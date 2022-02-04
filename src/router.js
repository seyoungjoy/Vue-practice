import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);
//뷰라우터를 사용하겠다.

const router = new VueRouter({
    mode:"history",
    routes: [
        {path:"/", component: Home},
        //기본일때는 Home을 로딩하겠다.
        {path:"/about", component:About}
    ]
})

export default router;