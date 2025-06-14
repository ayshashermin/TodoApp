import axios from 'axios'

const commonApi = (reqUrl, reqMethod, reqData, header = {}) => {
  const config = {
    method: reqMethod,
    url: reqUrl,
    data: reqData,
    headers: {
      "Content-Type": "application/json", 
      ...header                          
    }
  }

  return axios(config)
}

export default commonApi
