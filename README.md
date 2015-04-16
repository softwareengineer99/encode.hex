# encode.hex

## synposis
Simply require the encode.hex module and encode your string.

	encode_hex=require('../')
	if (encode_hex('query') === '%71%75%65%72%79'){
		console.log('with default options: 	','pass')
	}
	if (encode_hex('query','+') === '+71+75+65+72+79'){
		console.log('with + as separator: 	','pass')
	}