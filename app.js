var http = require('http');

http.createServer(function(req, res){
	res.writeHead({
	  "Content-Type" : "application/json"
	});
	var data = {
		name : "Easy Java",
		description : "This blog actually helps programmers to learn & understand the java ecosystem. People can also upload their issues, can answer to open questions and earn ratings.",
		developers : [
			{name : "Nilanjan", email : "nilanjanchakraborty87@gmail.com"},
			{name : "Anup", email : "ianupmondal@gmail.com"}
		],
		contact : "easyjavaorg@gmail.com"		
	};
	res.end(JSON.stringify(data));
}).listen(3000);