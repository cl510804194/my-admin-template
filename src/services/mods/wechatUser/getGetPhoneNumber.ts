/**
 * @desc 小程序获取手机号
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** sessionKey */
  sessionKey: string
  /** 包括敏感数据在内的完整用户信息的加密数据 */
  encryptedData: string
  /** 加密算法的初始向量 */
  iv: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function getGetPhoneNumber(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/applet/getPhoneNumber', 'get', queryParams, errorHandler)
}
