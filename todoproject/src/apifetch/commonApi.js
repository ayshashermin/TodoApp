import axios from 'axios'

const commonApi=(reqUrl,reqMethod,reqData)=>{
    const config={
        headers:{"Content-Type":"application/json"},
        method:reqMethod,
        url:reqUrl,
        data:reqData
    }
    return axios(config)
}
export default commonApi 