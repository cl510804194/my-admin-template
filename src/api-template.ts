import type { Interface } from "pont-engine";
import { CodeGenerator } from "pont-engine";

function getOption(inter: Interface) {
  const bodyParmas = inter.getBodyParamsCode();
  const hasQueryParams = !!inter.parameters.filter(
    (param) => param.in === "path" || param.in === "query"
  ).length;
  const hasBody = !!inter.parameters.filter((param) => param.in === "body")
    .length;
  return {
    bodyParmas,
    hasQueryParams,
    hasBody,
  };
}

function getRequestParams(inter: Interface) {
  const { bodyParmas, hasQueryParams } = getOption(inter);
  const hasParam = bodyParmas || hasQueryParams;
  const requestParams = !hasParam
    ? ""
    : bodyParmas && hasQueryParams
    ? "{queryParams, bodyParams}"
    : bodyParmas
    ? "{bodyParams}"
    : "{queryParams}";
  return {
    requestParams,
    bodyParmas,
    hasQueryParams,
  };
}

function getRequestParamsInterface(inter: Interface) {
  const { bodyParmas, hasQueryParams } = getOption(inter);
  const hasParam = bodyParmas || hasQueryParams;
  const requestParams = !hasParam
    ? ""
    : bodyParmas && hasQueryParams
    ? `{queryParams, bodyParams}: {queryParams: Params, bodyParams: ${bodyParmas}}`
    : bodyParmas
    ? `{bodyParams}: {bodyParams: ${bodyParmas}}`
    : "{queryParams}: {queryParams: Params}";
  return requestParams;
}

export default class MyGenerator extends CodeGenerator {
  private getCode(inter: Interface) {
    const bodyParamsCode = inter.getBodyParamsCode();
    const { hasQueryParams, hasBody } = getOption(inter);
    const queryPramsCode = hasQueryParams ? "params: Params" : "";
    const requestParams = hasBody
      ? `${
          queryPramsCode ? `${queryPramsCode},` : ""
        } bodyParams: ${bodyParamsCode}`
      : queryPramsCode;
    const exportParamsCode = `${
      hasQueryParams
        ? `export ${inter.getParamsCode("Params", this.surrounding)}`
        : ""
    }`;
    return {
      bodyParamsCode,
      hasBody,
      hasQueryParams,
      queryPramsCode,
      requestParams,
      exportParamsCode,
    };
  }

  getInterfaceContentInDeclaration(inter: Interface) {
    const { exportParamsCode } = this.getCode(inter);
    const requestParamsInerface = getRequestParamsInterface(inter);
    return `
      ${exportParamsCode}
      export type IResponseDataType = ${inter.responseType};
      export type IReturnType = Promise<IResponseDataType>
      export function ${
        inter.name
      }(${requestParamsInerface}${requestParamsInerface &&
      ","}errorHandler?: (error: AxiosResponse<ResponseData>) => void): IReturnType;
    `;
  }
  getDeclaration() {
    return `
      type AxiosResponse<T = any> = {
        data: T
        status: number
        statusText: string
        headers: any
        config: any
        request?: any
      }
      type ErrInfo = {
        /** errorKey */
        errorKey?: string
        /** errorMsg */
        errorMsg?: string
        /** field */
        field?: string
      }
      type ResponseData<T = any> = {
        data?: T
        msg?: string
        code?: number
        ret?: number
        err_infos?: Array<ErrInfo>
        error_code?: number
      }
      type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
        [key in Key]: Value;
      }
      ${this.getCommonDeclaration()}
      ${this.getBaseClassesInDeclaration()}
      ${this.getModsDeclaration()}
    `;
  }
  getInterfaceContent(inter: Interface) {
    const { bodyParmas, hasQueryParams, requestParams } = getRequestParams(
      inter
    );

    const queryParamsType = "IQueryParams";
    const queryParamsTmp = `queryParams:${queryParamsType}`;
    const bodyParamsTmp = `bodyParams:${bodyParmas}`;
    const paramsInterfaceTmp =
      bodyParmas && hasQueryParams
        ? `
    interface IParams{
      ${queryParamsTmp}
      ${bodyParmas ? bodyParamsTmp : ""}
    }
    `
        : bodyParmas
        ? `interface IParams{
      ${bodyParmas ? bodyParamsTmp : ""}
    }`
        : `interface IParams{
      ${queryParamsTmp}
    }`;
    // let responseType = inter.responseType
    // if (!inter.responseType.includes('ResponseContent')) {
    //   responseType = `defs.live.ResponseContent<${responseType}>`
    // }
    return `
    /**
     * @desc ${inter.description}
     */
    import { AxiosResponse } from 'axios';
    import Request from '@/utils/request';

    export ${inter.getParamsCode(queryParamsType)}

    export ${paramsInterfaceTmp}

    export function ${inter.name} (${
      requestParams ? `${requestParams}:IParams = {} as IParams,` : ""
    }
      errorHandler?: (error: AxiosResponse<ResponseData>) => void): Promise<${
        inter.responseType
      }|unknown> {
      return Request('${inter.path}',
          '${inter.method}',
          ${bodyParmas ? "bodyParams" : hasQueryParams ? "queryParams" : "{}"},
          errorHandler
      );
    }
  `;
  }
  getIndex() {
    if (this.dataSource.mods.length > 0) {
      return super.getIndex();
    } else {
      return `
        import { ${this.dataSource.name} as defs } from './baseClass';
        export const ${this.dataSource.name} = {};
        export { defs };
      `;
    }
  }
}
