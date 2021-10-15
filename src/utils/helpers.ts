export const formatPath = (path: string): string => {
  return '/' + path.split('/').filter(Boolean).join('/')
}

export function getUrlParamsKey(key: string, search?: string){
  const params = new URLSearchParams(search || window.location.search);
  return params.get(key);
}

// 获取query参数
export function getQuery(name: string, search?: string) {
  const re = new RegExp('(\\?|\\&)' + name + '=([^\\&]*)', 'i')
  const a = re.exec(search || document.location.href)
  if (a == null) {
    return null
  }
  return decodeURIComponent(a[2])
}

/** 给列表数组添加key
 * @param {Array} data 列表数组
 */
export const arrayAddKey = (data: any[] = []) => {
  if (data.length === 0) return []
  return data.map((item) => {
    item.key = item?.id
    return item
  })
}

export const debounce = (fun: any, wait: number) => {
  let timer: any = null
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fun(...args)
    }, wait)
  }
}

// 表格请求处理
export async function initList(
  params: any,
  sort: any,
  _filter: any,
  getList: any
) {
  const sortData = []
  for (const key in sort) {
    sortData.push({
      field: key,
      order: sort[key] === 'ascend' ? 'asc' : 'desc',
    })
  }
  const paramsD = { ...params }
  delete paramsD.current
  delete paramsD.pageSize
  try {
    const res = await getList({
      bodyParams: {
        query: {
          ...paramsD,
        },
        currentPage: params.current,
        pageSize: params.pageSize,
        sorts: sortData,
      },
    });
    return {
      data: res.list,
      success: true,
      total: res.pagination.total,
    }
  } catch (_e) {
    return {}
  }
}
