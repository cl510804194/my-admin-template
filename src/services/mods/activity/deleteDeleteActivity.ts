/**
 * @desc 删除活动
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

export function deleteDeleteActivity(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request(
    '/yyy/activity/deleteActivity',
    'delete',
    queryParams,
    errorHandler
  )
}
