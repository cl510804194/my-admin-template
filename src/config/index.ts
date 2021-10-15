const config = {
	host: 'http://42.192.97.15:1358',
  baseUrl: '',
  cos: {
    Bucket: 'yyy-1256453760',
    Region: 'ap-chongqing'
  }
};

const env = process.env.NODE_ENV || 'production';

const envConfig = require(`./config.${env}`).default || {};

export default Object.assign({}, config, envConfig || {});
