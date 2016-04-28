
import DemosRouterMap from './demosRouterMap'
import Home from 'views/home/index'
import Finance from 'views/finance/index'
import Reimburse from 'views/finance/reimburse'
module.exports = Object.assign({}, {
  '/': {
    component: Home
  },
  'finance': {
    component: Finance
  },
  'finance/reimburse': {
    component: Reimburse
  }
}, DemosRouterMap)

