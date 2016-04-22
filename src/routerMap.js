
import DemosRouterMap from './demosRouterMap'
import Home from 'views/home/index'
import Finance from 'views/finance/index'
module.exports = Object.assign({}, {
  '/': {
    component: Home
  },
  'finance': {
    component: Finance
  }
}, DemosRouterMap)

