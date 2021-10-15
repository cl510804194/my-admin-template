/**
 * @desc 新建个人模版
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {}

export interface IParams {
  bodyParams: defs.def1
}

export function postAddTemplate(
  { bodyParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/template/addTemplate', 'post', bodyParams, errorHandler)
}
