<template>
  <div>
    <p>{{date | date}}</p>
    <img :src="'http://wawaji.h5h5h5.cn/FtUSzVJ8HFO5ZQVfAk394gUYjrB2' | imageView2"
         width="200" />
    <p><a href="javascript: void(0)"
         @click="login">登录</a></p>
    <p><a href="javascript: void(0)"
         @click="get">获取</a></p>
    <p><a href="javascript: void(0)"
         @click="register">注册</a></p>
    <p v-html="content"></p>
    <p v-html="content2"></p>
  </div>
</template>

<script>
// import { demoApi } from '@/api'
import { demoLocal, demoSession } from '@/storage'
import axios from 'axios'
import imei from './imei'

export default {
  data() {
    return {
      date: new Date(),
      content: '',
      content2: ''
    }
  },
  created() {
    console.log(demoLocal.get())
    console.log(demoSession.get())
    // demoLocal.set('demoLocal-value')
    // demoSession.set('demoSession-value')

    // demoApi.list().then(data => {
    //   this.success('success')
    // }, err => {
    //   this.error('error')
    //   Promise.reject(err)
    // })
  },
  methods: {
    register() {
      imei.forEach(v => {
        axios({
          url: 'http://business.api.scrm.vmajy.com/super/v1.0/phoneManager',
          method: 'POST',
          data: {
            'android_version': '',
            'imei': v,
            'password': v,
            'phone_brand': '',
            'phone_os': ''
          }
        }).then(data => {
          console.log(`${v} success`)
        }, e => {
          console.log(`${v} error: ${e}`)
        })
      })
    },
    login() {
      axios({
        url: 'http://localhost:51001/v1.0/frame/login',
        method: 'POST',
        data: {
          account: 'admin',
          password: '123456'
        }
      }).then(data => {
        demoSession.set(data.macKey)
      })
    },
    get() {
      axios({
        url: 'http://localhost:51001/v1.0/frame/get?a=1',
        method: 'GET',
        params: {
          b: 2
        }
      })
    }
  }
}
</script>
