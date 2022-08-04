import storage from 'store2'
import request from '@/utils/request'

const ipcApiRoute = {
  common: {
    changeWindowSize: 'controller.common.changeWindowSize',
  },
  oschina: {
    authInfo: 'controller.oschina.authInfo',
    getAuthToken: 'controller.oschina.getAuthToken',
    getNews: 'controller.oschina.getNews',
    getNewsDetail: 'controller.oschina.getNewsDetail',
  },
  gitee: {
    test: 'controller.example.test',
  },
  user: {
    test: 'controller.example.test',
  },
  setting: {
    test: 'controller.example.test',
  },
}

const specialIpcRoute = {
  appUpdater: 'app.updater' // 此频道在后端也有相同定义
}

/**
 * 访问内置http服务
 */
const requestHttp = (uri, parameter) => {
  // url转换
  const config = storage.get('httpServiceConfig');
  const host = config.server || 'http://127.0.0.1:7071';
  let url = uri.split('.').join('/');
  url = host + '/' + url;
  console.log('url:', url);
  return request({
    url: url,
    method: 'post', 
    data: parameter, // body
    params: {}, // URL 参数
    timeout: 60000,
  })
}

export {
  ipcApiRoute,
  specialIpcRoute,
  requestHttp
}