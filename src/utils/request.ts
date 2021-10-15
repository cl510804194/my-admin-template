import sysConfig from '../config';
import type { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import axios from 'axios';

const { baseUrl, host } = sysConfig;

/**
 * @param url
 * @param options
 */

export async function myRequest(url: string, options?: AxiosRequestConfig, errorHandleFun?: (res: any) => void) {
	const defaultOptions = {
		header: {
			'Content-Type': 'application/json;charset=utf-8',
      app_id: 'wx8e77411116f2cf91',
      wechat: 'yyy'
		},
		timeout: 15000,
	};

	const newOptions = { ...options };
  newOptions.method = options?.method;
  if(options?.method?.toLowerCase() === 'post'){
    newOptions.data = newOptions.params;
    delete newOptions.params;
  }
  axios.interceptors.request.use(
    (config) => {
      config.headers = defaultOptions.header;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  )

	// eslint-disable-next-line @typescript-eslint/no-shadow
	return new Promise((resolve) => {
    axios({
      url: encodeURI(`${host}${baseUrl || ''}${url}`),
      ...newOptions,
    })
      .then((response: AxiosResponse) => {
        const res = response;
        if (res.status === 200) {
          resolve(res.data.data);
        } else {
          resolve(null);
          if(errorHandleFun){
            errorHandleFun(res);
          }
        }
      })
      .catch((_error) => {
        resolve(null);
        errorHandle(_error);
        if(errorHandleFun){
          errorHandleFun(_error);
        }
      });
  });
}

function errorHandle(_error: any) {
	console.log('errorHandle', _error);
};

export default async (url: string, methed: Method, params?: any, errorHandleFun?: (res: any) => void) => {
	return await myRequest(url, {
		method: methed,
		params: params || {},
	}, errorHandleFun)
};
