function hexencode(input,separator){
	var separator = separator || '%'
	var str=q=input;
	
	buf = new Buffer(str.length);

	arr=[];
	for (var i = 0; i < str.length ; i++) {
	  buf[i] = str.charCodeAt(i);
	  arr.push(str.charCodeAt(i))
	}

	// console.log(buf.toString());
	// console.log(arr.join('\n'));
	// console.log(buf)
	// console.log(str.toString(16))
	// console.log(new Buffer('80', 'hex')[0])
	var bytestring = Number('0x' + 66).toString(2);
	// console.log(bytestring)
	// console.log(parseInt(bytestring, 2).toString(16))
	// console.log(buf)
	// console.log(buf.toString('hex'),buf.length)
	var decoded=[]
	for (var i = 0; i < buf.length ; i++) {
	 // buf[i] = str.charCodeAt(i);
	  //arr.push(str.charCodeAt(i))
	 // console.log(buf[i].toString().toString('hex'), parseInt(buf[i]).toString(16))
	  decoded.push(parseInt(buf[i]).toString(16))
	}
	//console.log(decoded.join('%'))

	return separator+decoded.join(separator)
}

module.exports=hexencode;