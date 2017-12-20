/**
 *  与服务器集成  express
 */


const Vue = require('vue'),
	server = require('express')(),
	renderer = require('vue-server-renderer').createRenderer();

server.get('*', (req, res) => {
	const app = new Vue({
		data() {
			return {
				url: req.url
			}
		},
		template: '<div>you are requesting {{url}} </div>'
	});

	renderer.renderToString(app,(err,html)=>{
		if(err){
			res.status(500).end('Internal Server Error.');
			return;
		}
		res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
	})
});

server.listen(3000);

