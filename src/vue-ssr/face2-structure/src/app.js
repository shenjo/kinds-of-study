import Vue from 'vue'
import App from 'App'
import createRouter from './router'
import createStore from './store'
import sync from 'vuex-router-sync'

export default function createApp() {
	const router = createRouter();
	const store = createStore();
	sync(router,store);
	const app = new Vue({
		router,
		store,
		render: h => h(App)
	});
	return { app, router, store };
}