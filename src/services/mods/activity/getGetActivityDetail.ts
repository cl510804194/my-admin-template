/**
 * @desc 活动详情
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** 活动id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getGetActivityDetail(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request(
    '/yyy/activity/getActivityDetail',
    'get',
    queryParams,
    errorHandler
  )
}
