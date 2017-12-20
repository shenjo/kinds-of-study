
const Vue = require('vue');


const app = new Vue({
	template:`<div>hello world</div>`
});

const renderer = require('vue-server-renderer').createRenderer({
	template: require('fs').readFileSync('./template/index.html', 'utf-8')
});

renderer.renderToString(app,(err,html)=>{
	if(err){
		throw err;
	}

	console.log(html)
});

const renderer1 = require('vue-server-renderer').createRenderer({
	template: require('fs').readFileSync('./template/index2.html', 'utf-8')
});

const context = {
	title:'world'
}

renderer1.renderToString(app,context,(err,html)=>{
	if(err){
		throw err;
	}

	console.log(html)
});
