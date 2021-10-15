import * as activity from './activity'
import * as app from './app'
import * as auth from './auth'
import * as commodity from './commodity'
import * as file from './file'
import * as form from './form'
import * as role from './role'
import * as swagger from './swagger'
import * as template from './template'
import * as tenant from './tenant'
import * as user from './user'
import * as wechatUser from './wechatUser'

;(window as any).API = {
  activity,
  app,
  auth,
  commodity,
  file,
  form,
  role,
  swagger,
  template,
  tenant,
  user,
  wechatUser
}
