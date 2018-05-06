var express = require('express'),
app = express(),
path = require("path"),
url=require('url'),
moment=require("moment"),	
//q=require("q"),
Promise=require("bluebird"),
bodyParser = require('body-parser');
app.engine('html', require('ejs').renderFile);
app.set('views',path.join(__dirname,'views'));
app.use(express.static(__dirname+'/views'));
app.locals.moment = moment;
app.locals.dtformat = "dd M YY";
/*app.use(bodyParser.json);*/
app.use(bodyParser.urlencoded({
	extended:true
}));
app.get('/visits',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	res.send('[{"name":"amir","val":"217"},{"name":"dwi","val":"553"},{"name":"eka","val":"145"},{"name":"ayu","val":"249"},{"name":"dhita","val":"553"},{"name":"aris","val":"145"},{"name":"yudhi","val":"249"}]');
});
app.get('/offers',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	res.send('[{"name":"amir","val":"18"},{"name":"dwi","val":"15"},{"name":"eka","val":"19"},{"name":"ayu","val":"65"},{"name":"dhita","val":"553"},{"name":"aris","val":"145"},{"name":"yudhi","val":"249"}]');
});
app.get('/newfbs',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	res.send('[{"name":"amir","val":"78"},{"name":"dwi","val":"19"},{"name":"eka","val":"11"},{"name":"ayu","val":"88"},{"name":"dhita","val":"553"},{"name":"aris","val":"145"},{"name":"yudhi","val":"249"}]');
});
app.get('/sellings',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	res.send('[{"name":"amir","val":"23"},{"name":"dwi","val":"12"},{"name":"eka","val":"17"},{"name":"ayu","val":"19"},{"name":"dhita","val":"553"},{"name":"aris","val":"145"},{"name":"yudhi","val":"249"}]');
});

/*app.all("/api/*",function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
	res.header("Access-Control-Allow-Methods","GET,PUT,POST");
	return next;
});*/
app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "GET, POST,PUT");
	next();
  
  });
app.listen(process.env.PORT || 1945);
