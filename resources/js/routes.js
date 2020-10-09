export const routes = [
    {
        path: '/app/dashboard',
        name: 'dashboard',
        component: () => import('./pages/Dashboard'),
        meta: {
            Auth: true,
        }
    },
    {
        path: '/app/signin',
        name: 'signin',
        component: () => import('./pages/auth/SignIn'),
        meta: {
            Guest: true,
        }
    },
    {
        path: '/app/transaction',
        name: 'transaction',
        component: () => import('./pages/transaction/index'),
        meta: {
            Auth: true,
        }
    },
    {
        path: '/app/signup',
        name: 'signup',
        component: () => import('./pages/auth/Signup'),
        meta: {
            Guest: true,
        }
    },
    { path: '*', redirect: '/app/dashboard' },
]