/**
 * vue服务端渲染成字符串
 */
const Vue = require('vue') // 加载vue
const express = require('express')
const renderer = require('vue-server-renderer').createRenderer() // 得到渲染器


const server = express()

server.get('/', (req, res) => {
  // 创建vue实例
  const app = new Vue({
    template: `
      <div id="app">
        <h1>{{ message }} </h1>
      </div>
    `,
    data: {
      message: '小李模板渲染'
    }
  })

  // 将vue对象渲染成html字符串
  renderer.renderToString(app,(err, html) => {
    if (err) throw err
    // 得到模板字符串
    console.log(html)
  })

})
