function hexencode(input,separator){
	var separator = separator || '%'
	var str=q=input;
	
	buf = new Buffer(str.length);


	for (var i = 0; i < str.length ; i++) {
	  buf[i] = str.charCodeAt(i);

	}
	var decoded=[]
	for (var i = 0; i < buf.length ; i++) {
	  decoded.push(parseInt(buf[i]).toString(16))
	}

	return separator+decoded.join(separator)
}

module.exports=hexencode;