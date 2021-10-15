/**
 * @desc 获取小程序公共模板标题
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** openid */
  openid: string
  /** 类目 id，多个用逗号隔开 */
  ids: string
  /** 用于分页，表示从 start 开始。从 0 开始计数 */
  start: number
  /** 用于分页，表示拉取 limit 条记录。最大为 30 */
  limit: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getGetPubTemplateTitleList(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request(
    '/yyy/template/getPubTemplateTitleList',
    'get',
    queryParams,
    errorHandler
  )
}
