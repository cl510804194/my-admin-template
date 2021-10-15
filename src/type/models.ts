export interface TenantAttributes {
  id: number
  appId: string // 租户appId
  open?: number // 是否发布 0,1
  name: string // 租户名
  type?: string // 租户类型 store/user
  phoneNumber: string // 租户手机号
  address: string // 租户地址
  location?: string // 租户定位
  city?: string // 租户城市
  remark?: string // 租户备注
  detail?: string // 租户详情
  images?: string // 租户介绍图片
  openShop?: number // 是否开启积分商城 0,1
  openIntegral?: number // 是否开启积继承 0,1
  integralPercent?: number // 积分继承百分比
  createdAt: string
}
