/**
 * @desc 删除文件
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** 文件id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteDeleteFile(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/file/deleteFile', 'delete', queryParams, errorHandler)
}
