import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Trade from '@/components/trade/trade'
import Ico from '@/components/ico/ico'
import Financial from '@/components/financial/financial'
import Security from '@/components/security/security'
import Guide from '@/components/guide/guide'
import Login from '@/components/login/login'
import Registered from '@/components/registered/registered'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/ico',
            name: 'Ico',
            component: Ico
        },
        {
            path: '/trade',
            name: 'Trade',
            component: Trade
        },
        {
            path: '/financial',
            name: 'Financial',
            component: Financial
        },
        {
            path: '/security',
            name: 'Security',
            component: Security
        },
        {
            path: '/guide',
            name: 'Guide',
            component: Guide
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/registered',
            name: 'Registered',
            component: Registered
        }
    ]
})
