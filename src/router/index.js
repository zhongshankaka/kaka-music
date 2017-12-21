import Vue from 'vue'
import Router from 'vue-router'

// import MyRecommend from '@/components/MyRecommend/MyRecommend'
// import MyRank from '@/components/MyRank/MyRank'
// import MySinger from '@/components/MySinger/MySinger'
// import MySearch from '@/components/MySearch/MySearch'

Vue.use(Router)

const MyRecommend = (resolve) => {
  import('@/components/MyRecommend/MyRecommend').then((module) => {
    resolve(module)
  })
}
const MySinger = (resolve) => {
  import('@/components/MySinger/MySinger').then((module) => {
    resolve(module)
  })
}
const MyRank = (resolve) => {
  import('@/components/MyRank/MyRank').then((module) => {
    resolve(module)
  })
}
const MySearch = (resolve) => {
  import('@/components/MySearch/MySearch').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: MyRecommend

    },
    {
      path: '/singer',
      name: 'singer',
      component: MySinger
    },
    {
      path: '/rank',
      name: 'rank',
      component: MyRank
    },
    {
      path: '/search',
      name: 'search',
      component: MySearch
    }
  ]
})
