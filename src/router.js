import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'


import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import InmueblesCiudad from './components/InmueblesCiudad.vue'
import TodosInmuebles from './components/TodosInmuebles.vue'
import MisReservas from './components/MisReservas.vue'


const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/logIn',
        name: "logIn",
        component: LogIn,
        meta: { requiresAuth: false }
    },
    {
        path: '/user/signUp',
        name: "signUp",
        component: SignUp,
        meta: { requiresAuth: false }
    },
    {
        path: '/user/home',
        name: "home",
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/inmueblesCiudad',
        name: "buscarPorCiudad",
        component: InmueblesCiudad,
        meta: { requiresAuth: false }
    },
    {
        path: '/todosInmuebles',
        name: "todosInmuebles",
        component: TodosInmuebles,
        meta: { requiresAuth: false }
    },
    {
        path: '/misReservas',
        name: "misReservas",
        component: MisReservas,
        meta: { requiresAuth: true }
    },    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;