encode_hex=require('../')
if (encode_hex('query') === '%71%75%65%72%79'){
	console.log('with default options: 	','pass')
}
if (encode_hex('query','+') === '+71+75+65+72+79'){
	console.log('with + as separator: 	','pass')
}
// console.log(encode_hex('query','+'))
// console.log(encode_hex('query','%'))