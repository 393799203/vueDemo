import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import Home from 'views/home/index'
import 'assets/style.css'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(Router)

const router = new Router({
  history: /vux.li/.test(window.location.href), // use history=false when testing
  saveScrollPosition: true
})

router.map({
  '/': {
    component: Home
  }
})

router.beforeEach(function (transition) {
  if (/\/http/.test(transition.to.path)) {
    let url = transition.to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    transition.next()
  }
})

router.afterEach(function (transition) {
  if (transition.to.fullPath !== '/demo') {
    window.scrollTo(0, 0)
  }
})

router.start(App, '#app')
