import COS from 'cos-js-sdk-v5';
import { getGetCredentials } from '@/services/mods/file/getGetCredentials';
import config from '@/config';

const cos = new COS({
  getAuthorization: async function (_options, callback) {
    const res: any = await getGetCredentials()
    callback({
      TmpSecretId: res.credentials.tmpSecretId,
      TmpSecretKey: res.credentials.tmpSecretKey,
      SecurityToken: res.credentials.sessionToken,
      StartTime: res.startTime,
      ExpiredTime: res.expiredTime,
    });
  }
})

// 普通文件上传
export async function putObjectList(files: any[]) {
  const urlList = [];
  for(const file of files){
    const res =  await cos.putObject({
      Bucket: config.cos.Bucket,
      Region: config.cos.Region,
      Key: `${Date.now().toString()}.${file.type.split('/')[1]}`,
      StorageClass: 'STANDARD',
      Body: file,
    });
    if(res.statusCode === 200){
      urlList.push({
        uid: res.Location.split('/')[1],
        name: res.Location.split('/')[1],
        status: 'done',
        url: `https://${res.Location}`,
      });
    }
  }
  return urlList;
}

export default cos;
