import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);

export default createRouter=>{
	return new Router({
		mode:'history',
		routers:[]
	})
}