// Fungsi Encode uri akan menyandikan karakter khusus kecuali karakter , / ? : @ = & + $ #


let uri = 'https://www.google.com/search?q=nyamuks&sxsrf=AOaemvI8A N63ixeIXzRBbrcs0wOxdX4Vog%3A1 639204118111&source=hp&ei'

let res= encodeURI(uri)

console.log(res)

//decode uri untuk memecahkan kode uri

var a= "my%20test.asp?name=st%c3%A5le&car=saab"
let resA= decodeURI(a)
console.log(resA)