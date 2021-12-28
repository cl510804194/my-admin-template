type AxiosResponse<T = any> = {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
};
type ErrInfo = {
  /** errorKey */
  errorKey?: string;
  /** errorMsg */
  errorMsg?: string;
  /** field */
  field?: string;
};
type ResponseData<T = any> = {
  data?: T;
  msg?: string;
  code?: number;
  ret?: number;
  err_infos?: Array<ErrInfo>;
  error_code?: number;
};
type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class InformationOnCurrency {
    /** dex */
    dex?: string;

    /** symbol */
    symbol?: string;
  }

  export class ReturnsADataObject<T0 = any> {
    /** 错误码 */
    code?: number;

    /** 具体的内容 */
    data?: Array<defs.InformationOnCurrency>;

    /** 提示信息 */
    msg?: string;
  }

  export class TokenOnCurrencyDataObjects {
    /** symbol */
    symbol?: string;
  }
}

declare namespace API {
  /**
   * Statistics Info Controller
   */
  export namespace statisticsInfo {
    /**
     * token数据列表
     * /api/getTokenList
     */
    export namespace getAllTokenInfoVOList {
      export type IResponseDataType = any;
      export type IReturnType = Promise<IResponseDataType>;
      export function getAllTokenInfoVOList(
        errorHandler?: (error: AxiosResponse<ResponseData>) => void,
      ): IReturnType;
    }
  }

  /**
   * Token Notice Controller
   */
  export namespace tokenNotice {
    /**
     * 上币通知接口
     * /api/addToken
     */
    export namespace getAllTokenInfoVOList {
      export type IResponseDataType = any;
      export type IReturnType = Promise<IResponseDataType>;
      export function getAllTokenInfoVOList(
        { bodyParams }: { bodyParams: defs.TokenOnCurrencyDataObjects },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void,
      ): IReturnType;
    }
  }
}
