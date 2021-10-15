/**
 * @desc 活动列表
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {}

export interface IParams {
  bodyParams: object
}

export function postGetActivityList(
  { bodyParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request(
    '/yyy/activity/getActivityList',
    'post',
    bodyParams,
    errorHandler
  )
}
