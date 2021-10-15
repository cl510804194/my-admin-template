type AxiosResponse<T = any> = {
  data: T
  status: number
  statusText: string
  headers: any
  config: any
  request?: any
}
type ErrInfo = {
  /** errorKey */
  errorKey?: string
  /** errorMsg */
  errorMsg?: string
  /** field */
  field?: string
}
type ResponseData<T = any> = {
  data?: T
  msg?: string
  code?: number
  ret?: number
  err_infos?: Array<ErrInfo>
  error_code?: number
}
type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export class def0 {
    /** appid */
    app_id: string
  }

  export class def1 {
    /** kidList */
    kidList: string

    /** sceneDesc */
    sceneDesc?: string

    /** tid */
    tid: string
  }

  export class def10 {
    /** 简介 */
    brief?: string

    /** 创建者id */
    createcommodityId?: number

    /** 创建时间 */
    createdAt?: string

    /** 详情 */
    detail?: number

    /** 活动详情图[""] */
    detailImages?: string

    /** 商品id */
    id?: number

    /** 轮播图[""] */
    images?: string

    /** 积分 */
    integral?: number

    /** 库存 */
    inventory?: number

    /** 是否上架 0,1 */
    isNormal?: number

    /** 商品标题 */
    title?: string

    /** 发货方式 1自取 2快递 */
    type?: number

    /** 更新时间 */
    updatedAt?: string
  }

  export class def11 {
    /** 活动id */
    activityId: number

    /** 活动信息JSON */
    activityInfo?: string

    /** 取消时间 */
    cancelTime?: string

    /** 删除时间 */
    deleteTime?: string

    /** 表单收获地址 */
    formAddress?: string

    /** 表单图片[""] */
    formImages?: string

    /** 表单定位 */
    formLocation?: string

    /** 表单姓名 */
    formName?: number

    /** 表单编号 */
    formNumber: string

    /** 表单其他信息JSON */
    formOther?: string

    /** 表单电话 */
    formPhoneNumber?: string

    /** 表单备注 */
    formRemark?: string

    /** 表单时间 */
    formTime?: string

    /** 表单微信号 */
    formWxId?: string

    /** 完成时间 */
    fulfill?: string

    /** 规格 [""] */
    specification?: string

    /** 表单状态 cancel取消 delete删除 fulfill完成 pending进行中 await待开始 */
    status: string

    /** 用户id */
    userId: number
  }

  export class def12 {
    /** 活动id */
    activityId?: number

    /** 活动信息JSON */
    activityInfo?: string

    /** 取消时间 */
    cancelTime?: string

    /** 删除时间 */
    deleteTime?: string

    /** 表单收获地址 */
    formAddress?: string

    /** 表单图片[""] */
    formImages?: string

    /** 表单定位 */
    formLocation?: string

    /** 表单姓名 */
    formName?: number

    /** 表单编号 */
    formNumber?: string

    /** 表单其他信息JSON */
    formOther?: string

    /** 表单电话 */
    formPhoneNumber?: string

    /** 表单备注 */
    formRemark?: string

    /** 表单时间 */
    formTime?: string

    /** 表单微信号 */
    formWxId?: string

    /** 完成时间 */
    fulfill?: string

    /** 预约表单id */
    id: number

    /** 规格 [""] */
    specification?: string

    /** 表单状态 cancel取消 delete删除 fulfill完成 pending进行中 await待开始 */
    status?: string

    /** 用户id */
    userId?: number
  }

  export class def13 {
    /** 活动id */
    activityId?: number

    /** 活动信息JSON */
    activityInfo?: string

    /** 取消时间 */
    cancelTime?: string

    /** 创建时间 */
    createdAt?: string

    /** 删除时间 */
    deleteTime?: string

    /** 表单收获地址 */
    formAddress?: string

    /** 表单图片[""] */
    formImages?: string

    /** 表单定位 */
    formLocation?: string

    /** 表单姓名 */
    formName?: number

    /** 表单编号 */
    formNumber?: string

    /** 表单其他信息JSON */
    formOther?: string

    /** 表单电话 */
    formPhoneNumber?: string

    /** 表单备注 */
    formRemark?: string

    /** 表单时间 */
    formTime?: string

    /** 表单微信号 */
    formWxId?: string

    /** 完成时间 */
    fulfill?: string

    /** 预约表单id */
    id?: number

    /** 规格 [""] */
    specification?: string

    /** 表单状态 cancel取消 delete删除 fulfill完成 pending进行中 await待开始 */
    status?: string

    /** 更新时间 */
    updatedAt?: string

    /** 用户id */
    userId?: number
  }

  export class def2 {
    /** 活动简介 */
    brief: string

    /** 创建者id */
    createUserId: number

    /** 详情 */
    detail?: string

    /** 活动详情图[""] */
    detailImages?: string

    /** 结束时间 */
    endTime: string

    /** 表单选中字段[""] */
    formClecked?: string

    /** 表单其他信息JSON */
    formOther?: string

    /** 表单必填项目[""] */
    formRequire?: string

    /** 轮播图[""] */
    images?: string

    /** 活动积分 */
    integral?: number

    /** 是否上架 0否,1是，默认1 */
    isNormal?: number

    /** 价格 */
    price?: number

    /** 规格 [""] */
    specifications?: string

    /** 开始时间 */
    startTime: string

    /** 参与人数 */
    submitCount?: number

    /** 活动标题 */
    title: string

    /** message信息，shop商品，book预约 */
    type: string
  }

  export class def3 {
    /** 活动简介 */
    brief: string

    /** 创建者id */
    createUserId?: number

    /** 详情 */
    detail?: string

    /** 活动详情图[""] */
    detailImages?: string

    /** 结束时间 */
    endTime: string

    /** 表单选中字段[""] */
    formClecked?: string

    /** 表单其他信息JSON */
    formOther?: string

    /** 表单必填项目[""] */
    formRequire?: string

    /** 活动id */
    id: number

    /** 轮播图[""] */
    images?: string

    /** 活动积分 */
    integral?: number

    /** 是否上架 0否,1是，默认1 */
    isNormal?: number

    /** 价格 */
    price?: number

    /** 规格 [""] */
    specifications?: string

    /** 开始时间 */
    startTime: string

    /** 参与人数 */
    submitCount?: number

    /** 活动标题 */
    title: string

    /** message信息，shop商品，book预约 */
    type: string
  }

  export class def4 {
    /** 活动简介 */
    brief?: string

    /** 创建者id */
    createUserId?: number

    /** 创建时间 */
    createdAt?: string

    /** 详情 */
    detail?: string

    /** 活动详情图[""] */
    detailImages?: string

    /** 结束时间 */
    endTime?: string

    /** 表单选中字段[""] */
    formClecked?: string

    /** 表单其他信息JSON */
    formOther?: string

    /** 表单必填项目[""] */
    formRequire?: string

    /** 活动id */
    id?: number

    /** 轮播图[""] */
    images?: string

    /** 活动积分 */
    integral?: number

    /** 是否上架 0否,1是，默认1 */
    isNormal?: number

    /** 价格 */
    price?: number

    /** 规格 [""] */
    specifications?: string

    /** 开始时间 */
    startTime?: string

    /** 参与人数 */
    submitCount?: number

    /** 活动标题 */
    title?: string

    /** message信息，shop商品，book预约 */
    type?: string

    /** 更新时间 */
    updatedAt?: string
  }

  export class def5 {
    /** 应用id */
    appId: number

    /** 头像 */
    avatarUrl?: string

    /** 生日 */
    birthday?: string

    /** 城市 */
    city?: string

    /** 国家 */
    country?: string

    /** 性别 */
    gender?: number

    /** 上级用户绑定时间 */
    higherUserBindTime?: string

    /** 上级用户id */
    higherUserId?: number

    /** 积分 */
    integral?: string

    /** 是否租户 0,1 */
    isTenant?: number

    /** 语言 */
    language?: string

    /** 定位信息`经度,纬度,名字` */
    location?: string

    /** 用户名 */
    nickName?: string

    /** 小程序openId */
    openId: string

    /** 密码 */
    password?: number

    /** 用户限制 0,1 */
    prohibit?: number

    /** 省份 */
    province?: number

    /** 没有区号的手机号 */
    purePhoneNumber?: string

    /** 备注 */
    remark?: string

    /** 角色id */
    roleId?: number

    /** 租户id */
    tenantId?: number

    /** 会员id */
    userId?: string

    /** 微信号 */
    wxId?: string
  }

  export class def6 {
    /** 应用id */
    appId: number

    /** 头像 */
    avatarUrl?: string

    /** 生日 */
    birthday?: string

    /** 城市 */
    city?: string

    /** 国家 */
    country?: string

    /** 性别 */
    gender?: number

    /** 上级用户绑定时间 */
    higherUserBindTime?: string

    /** 上级用户id */
    higherUserId?: number

    /** 用户id */
    id: number

    /** 积分 */
    integral?: string

    /** 是否租户 0,1 */
    isTenant?: number

    /** 语言 */
    language?: string

    /** 定位信息`经度,纬度,名字` */
    location?: string

    /** 用户名 */
    nickName?: string

    /** 小程序openId */
    openId: string

    /** 密码 */
    password?: number

    /** 用户限制 0,1 */
    prohibit?: number

    /** 省份 */
    province?: number

    /** 没有区号的手机号 */
    purePhoneNumber?: string

    /** 备注 */
    remark?: string

    /** 角色id */
    roleId?: number

    /** 租户id */
    tenantId?: number

    /** 会员id */
    userId?: string

    /** 微信号 */
    wxId?: string
  }

  export class def7 {
    /** 应用id */
    appId?: number

    /** 头像 */
    avatarUrl?: string

    /** 生日 */
    birthday?: string

    /** 城市 */
    city?: string

    /** 国家 */
    country?: string

    /** 创建时间 */
    createdAt?: string

    /** 性别 */
    gender?: number

    /** 上级用户绑定时间 */
    higherUserBindTime?: string

    /** 上级用户id */
    higherUserId?: number

    /** 用户id */
    id?: number

    /** 积分 */
    integral?: string

    /** 是否租户 0,1 */
    isTenant?: number

    /** 语言 */
    language?: string

    /** 定位信息`经度,纬度,名字` */
    location?: string

    /** 用户名 */
    nickName?: string

    /** 小程序openId */
    openId?: string

    /** 密码 */
    password?: number

    /** 用户限制 0,1 */
    prohibit?: number

    /** 省份 */
    province?: number

    /** 没有区号的手机号 */
    purePhoneNumber?: string

    /** 备注 */
    remark?: string

    /** 角色id */
    roleId?: number

    /** 租户id */
    tenantId?: number

    /** 更新时间 */
    updatedAt?: string

    /** 会员id */
    userId?: string

    /** 微信号 */
    wxId?: string
  }

  export class def8 {
    /** 简介 */
    brief: string

    /** 创建者id */
    createcommodityId?: number

    /** 详情 */
    detail?: number

    /** 活动详情图[""] */
    detailImages?: string

    /** 轮播图[""] */
    images?: string

    /** 积分 */
    integral?: number

    /** 库存 */
    inventory?: number

    /** 是否上架 0,1 */
    isNormal?: number

    /** 商品标题 */
    title: string

    /** 发货方式 1自取 2快递 */
    type: number
  }

  export class def9 {
    /** 简介 */
    brief?: string

    /** 创建者id */
    createcommodityId?: number

    /** 详情 */
    detail?: number

    /** 活动详情图[""] */
    detailImages?: string

    /** 商品id */
    id: number

    /** 轮播图[""] */
    images?: string

    /** 积分 */
    integral?: number

    /** 库存 */
    inventory?: number

    /** 是否上架 0,1 */
    isNormal?: number

    /** 商品标题 */
    title?: string

    /** 发货方式 1自取 2快递 */
    type?: number
  }
}

declare namespace API {
  /**
   * 预约活动
   */
  export namespace activity {
    /**
     * 新建活动
     * /yyy/activity/addActivity
     */
    export namespace postAddActivity {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postAddActivity(
        { bodyParams }: { bodyParams: defs.def2 },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 删除活动
     * /yyy/activity/deleteActivity
     */
    export namespace deleteDeleteActivity {
      export class Params {
        /** 活动id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function deleteDeleteActivity(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 编辑活动
     * /yyy/activity/editActivity
     */
    export namespace postEditActivity {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postEditActivity(
        { bodyParams }: { bodyParams: defs.def3 },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 活动详情
     * /yyy/activity/getActivityDetail
     */
    export namespace getGetActivityDetail {
      export class Params {
        /** 活动id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetActivityDetail(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 活动列表
     * /yyy/activity/getActivityList
     */
    export namespace postGetActivityList {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postGetActivityList(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }

  /**
   * 应用
   */
  export namespace app {
    /**
     * 新建应用
     * /yyy/app/addApp
     */
    export namespace postAddApp {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postAddApp(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 删除应用
     * /yyy/app/deleteApp
     */
    export namespace deleteDeleteApp {
      export class Params {
        /** 应用id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function deleteDeleteApp(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 编辑应用
     * /yyy/app/editApp
     */
    export namespace postEditApp {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postEditApp(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 应用详情
     * /yyy/app/getAppDetail
     */
    export namespace getGetAppDetail {
      export class Params {
        /** 应用id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetAppDetail(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 活动列表
     * /yyy/app/getAppList
     */
    export namespace postGetAppList {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postGetAppList(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }

  /**
   * 权限
   */
  export namespace auth {
    /**
     * 新建权限
     * /yyy/auth/addAuth
     */
    export namespace postAddAuth {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postAddAuth(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 删除权限
     * /yyy/auth/deleteAuth
     */
    export namespace deleteDeleteAuth {
      export class Params {
        /** 权限id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function deleteDeleteAuth(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 编辑权限
     * /yyy/auth/editAuth
     */
    export namespace postEditAuth {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postEditAuth(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 权限列表
     * /yyy/auth/getAuthList
     */
    export namespace postGetAuthList {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postGetAuthList(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }

  /**
   * 商品
   */
  export namespace commodity {
    /**
     * 新建商品
     * /yyy/commodity/addCommodity
     */
    export namespace postAddCommodity {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postAddCommodity(
        { bodyParams }: { bodyParams: defs.def8 },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 删除商品
     * /yyy/commodity/deleteCommodity
     */
    export namespace deleteDeleteCommodity {
      export class Params {
        /** 商品id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function deleteDeleteCommodity(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 编辑商品
     * /yyy/commodity/editCommodity
     */
    export namespace postEditCommodity {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postEditCommodity(
        { bodyParams }: { bodyParams: defs.def9 },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 商品详情
     * /yyy/commodity/getCommodityDetail
     */
    export namespace getGetCommodityDetail {
      export class Params {
        /** 商品id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetCommodityDetail(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 商品列表
     * /yyy/commodity/getCommodityList
     */
    export namespace postGetCommodityList {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postGetCommodityList(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }

  /**
   * 文件操作
   */
  export namespace file {
    /**
     * 新建文件
     * /yyy/file/addFile
     */
    export namespace postAddFile {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postAddFile(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 删除文件
     * /yyy/file/deleteFile
     */
    export namespace deleteDeleteFile {
      export class Params {
        /** 文件id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function deleteDeleteFile(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 编辑文件
     * /yyy/file/editFile
     */
    export namespace postEditFile {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postEditFile(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 获取临时密钥
     * /yyy/file/getCredentials
     */
    export namespace getGetCredentials {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetCredentials(
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 文件列表
     * /yyy/file/getFileList
     */
    export namespace postGetFileList {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postGetFileList(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 文件上传
     * /yyy/file/putFile
     */
    export namespace putPutFile {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function putPutFile(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }

  /**
   * 预约表单
   */
  export namespace form {
    /**
     * 新建预约表单
     * /yyy/form/addForm
     */
    export namespace postAddForm {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postAddForm(
        { bodyParams }: { bodyParams: defs.def11 },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 删除预约表单
     * /yyy/form/deleteForm
     */
    export namespace deleteDeleteForm {
      export class Params {
        /** 预约表单id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function deleteDeleteForm(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 编辑预约表单
     * /yyy/form/editForm
     */
    export namespace postEditForm {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postEditForm(
        { bodyParams }: { bodyParams: defs.def12 },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 预约表单详情
     * /yyy/form/getFormDetail
     */
    export namespace getGetFormDetail {
      export class Params {
        /** 预约表单id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetFormDetail(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 预约表单列表
     * /yyy/form/getFormList
     */
    export namespace postGetFormList {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postGetFormList(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }

  /**
   * 角色
   */
  export namespace role {
    /**
     * 新建角色
     * /yyy/role/addRole
     */
    export namespace postAddRole {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postAddRole(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 删除角色
     * /yyy/role/deleteRole
     */
    export namespace deleteDeleteRole {
      export class Params {
        /** 角色id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function deleteDeleteRole(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 编辑角色
     * /yyy/role/editRole
     */
    export namespace postEditRole {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postEditRole(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 角色列表
     * /yyy/role/getRoleList
     */
    export namespace postGetRoleList {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postGetRoleList(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }

  /**
   * 自定义swagger
   */
  export namespace swagger {
    /**
     * 获取swagger-json
     * /yyy/swagger/getJson
     */
    export namespace getGetJson {
      export type IResponseDataType = any
      export type IReturnType = Promise<IResponseDataType>
      export function getGetJson(
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }

  /**
   * 小程序消息模版
   */
  export namespace template {
    /**
     * 新建个人模版
     * /yyy/template/addTemplate
     */
    export namespace postAddTemplate {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postAddTemplate(
        { bodyParams }: { bodyParams: defs.def1 },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 获取小程序类目
     * /yyy/template/getCategory
     */
    export namespace getGetCategory {
      export class Params {
        /** openid */
        openid: string
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetCategory(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 获取小程序公共模板标题
     * /yyy/template/getPubTemplateTitleList
     */
    export namespace getGetPubTemplateTitleList {
      export class Params {
        /** openid */
        openid: string
        /** 类目 id，多个用逗号隔开 */
        ids: string
        /** 用于分页，表示从 start 开始。从 0 开始计数 */
        start: number
        /** 用于分页，表示拉取 limit 条记录。最大为 30 */
        limit: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetPubTemplateTitleList(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 获取信息
     * /yyy/template/getTemplateList
     */
    export namespace getGetTemplateList {
      export class Params {
        /** openid */
        openid: string
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetTemplateList(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }

  /**
   * 租户
   */
  export namespace tenant {
    /**
     * 新建租户
     * /yyy/tenant/addTenant
     */
    export namespace postAddTenant {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postAddTenant(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 删除租户
     * /yyy/tenant/deleteTenant
     */
    export namespace deleteDeleteTenant {
      export class Params {
        /** 租户id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function deleteDeleteTenant(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 编辑租户
     * /yyy/tenant/editTenant
     */
    export namespace postEditTenant {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postEditTenant(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 租户详情
     * /yyy/tenant/getTenantDetail
     */
    export namespace getGetTenantDetail {
      export class Params {
        /** 租户id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetTenantDetail(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 租户列表
     * /yyy/tenant/getTenantList
     */
    export namespace postGetTenantList {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postGetTenantList(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }

  /**
   * 用户
   */
  export namespace user {
    /**
     * 新建用户
     * /yyy/user/addUser
     */
    export namespace postAddUser {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postAddUser(
        { bodyParams }: { bodyParams: defs.def5 },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 删除用户
     * /yyy/user/deleteUser
     */
    export namespace deleteDeleteUser {
      export class Params {
        /** 用户id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function deleteDeleteUser(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 编辑用户
     * /yyy/user/editUser
     */
    export namespace postEditUser {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postEditUser(
        { bodyParams }: { bodyParams: defs.def6 },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 用户详情
     * /yyy/user/getUserDetail
     */
    export namespace getGetUserDetail {
      export class Params {
        /** 用户id */
        id: number
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetUserDetail(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 用户列表
     * /yyy/user/getUserList
     */
    export namespace postGetUserList {
      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function postGetUserList(
        { bodyParams }: { bodyParams: object },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }

  /**
   * 小程序用户信息
   */
  export namespace wechatUser {
    /**
     * code解析openid
     * /yyy/applet/getOpenid
     */
    export namespace getGetOpenid {
      export class Params {
        /** 微信code */
        code: string
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetOpenid(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }

    /**
     * 小程序获取手机号
     * /yyy/applet/getPhoneNumber
     */
    export namespace getGetPhoneNumber {
      export class Params {
        /** sessionKey */
        sessionKey: string
        /** 包括敏感数据在内的完整用户信息的加密数据 */
        encryptedData: string
        /** 加密算法的初始向量 */
        iv: string
      }

      export type IResponseDataType = object
      export type IReturnType = Promise<IResponseDataType>
      export function getGetPhoneNumber(
        { queryParams }: { queryParams: Params },
        errorHandler?: (error: AxiosResponse<ResponseData>) => void
      ): IReturnType
    }
  }
}
