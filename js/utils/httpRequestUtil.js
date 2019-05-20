function createXMLHttp() {
	var xmlhttp;
	if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else { // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}

function ajax_get(url, callback,type,flag) {
	var xhr = createXMLHttp();
	//设置监听
	xhr.onreadystatechange = function() {
			if(xhr.readyState === 4 && xhr.status === 200) {
				if(type==="json"){
					var data = xhr.responseText;
					callback(eval("("+data+")")); //回调函数.eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
				}else if(type==="xml"){
					var xmlDoc = xhr.responseXML;
					callback(xmlDoc); //回调函数.eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
				}else{
					callback(null);
				}
			}
		},
		//请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法
		xhr.open("GET", url, flag);
	xhr.send();

}

function ajax_post(url, params, callback,flag) {
	var xhr = createXMLHttp();
	//设置监听
	xhr.onreadystatechange = function() {
			if(xhr.readyState === 4 && xhr.status === 200) {
				if(type==="json"){
					callback(eval("("+xhr.responseText+")")); //回调函数.eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
				}else if(type==="xml"){
					callback(xhr.responseXML); //回调函数.eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
				}else{
					callback(null);
				}
			}
		},
		//请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法
		xhr.open("GET", url, flag);
	xhr.send(params);
}

