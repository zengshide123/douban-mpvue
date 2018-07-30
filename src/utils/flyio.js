import Vue from 'vue'
import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()

fly.interceptors.request.use((request) => {
    request.headers["X-Tag"] = "flyio";
    return request
})

fly.config.baseURL = " https://www.easy-mock.com/mock/5b5dd81d9b54da5dcc7d1875/music"

export default fly