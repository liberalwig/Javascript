var http = requre('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World\n'); // Hello World라는 텍스트가 웹브라우저[http]에 출력되게 함
	res.end();
}).listen(1337, '127.0.0.1'); //JS파일이 서버쪽에서 기다리다가 사용자가 URL인 127.로 접속하면 HelloWorld라는 텍스트를 화면에 출력함. PHP, JSP등이 하던 역할을 JS가 수행함.
console.log('Server running at http://127.0.0.1:1337/');


//Node.js
//: PHP, Java, Python를 대체할 수 있음. JS는 웹브라우저를 제어하기 위한 기술로써도 쓰이고 웹서버를 제어하기 위한 기술로써도 쓰이기 때문에 JS로 양쪽 제어가 가능함.
//웹브라우저에서 받은 '요청'이 웹을 지나 웹서버에 도착하고 웹서버는 이에 '응답'함.
//웹브라우저에 응답하기 위한 정보를 프로그래밍적으로 생성하는 기술에 PHP, Java, Python 등이 있는데 Node.js는 이들을 대체할 수 있는 각광받는 기술임. -->