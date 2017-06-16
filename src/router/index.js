import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Trade from '@/components/trade/index'
import Ico from '@/components/ico/ico'
import Financial from '@/components/financial/financial'
import Security from '@/components/security/security'
import Guide from '@/components/guide/guide'
import Login from '@/components/login/login'
import Registered from '@/components/registered/registered'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/ico',
            component: Ico
        },
        {
            path: '/trade/:id',
            component: Trade
        },
        {
            path: '/financial',
            component: Financial
        },
        {
            path: '/security',
            component: Security
        },
        {
            path: '/guide',
            component: Guide
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/registered',
            component: Registered
        }
    ]
})
