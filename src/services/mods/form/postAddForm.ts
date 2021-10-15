/**
 * @desc 新建预约表单
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {}

export interface IParams {
  bodyParams: defs.def11
}

export function postAddForm(
  { bodyParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/form/addForm', 'post', bodyParams, errorHandler)
}
