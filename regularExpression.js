// regex digunakan unntuk mencari atau mengubah sesuatu pada data string

function panggilRegex(params,item) {
    return params.search(item)
    
}

console.log(panggilRegex("abcdefg",/b/))//output 1 karena b berada pada index 1

//fungsi RexExp Test untuk pencocokan sebuah data dengan hasil yang dikeluarkan berupa boolean

function testRegex(params,tests) {
 return tests.test(params)
    
}
console.log(testRegex('apa aja boleh',/boleh/)) // output true karena kata boleh ada dalam valiable yang ditest

//fungsi RegExp Exec digunakan untuk mengembalikan string yang menemukan kecocokan jika tifak maka akan megembalikan nilai null

function execFunc(params, execs) {
    let str = new RegExp(execs)
    console.log(str.exec(params)) 
}
execFunc("habis ini mau nonton drama korea", "drama") //output berupa array

//RexExp Replace untuk penggantian data

const kata="belajar supaya dapat juara satu"
function replaceFuc(params,Old,New) {
    console.log(params.replace(Old,New))

    
}
replaceFuc(kata,/satu/,'1')

//Flags in RegExp ini akan memberikan efek pada misal pencarian yang dilakukan
// contoh flags i dalam pencarian akan menjadikana tidak case sensitive
const a = 'qwertyuiopasdfghjkl'
function flagIFuc(params, item) {
    return params.search(item)
    
}
console.log(flagIFuc(a, /K/)) //output -1 karena tidak ditemukan huruf K besar case-sensitive
console.log(flagIFuc(a, /K/i)) //output index K , menjadi tidak case sensitive setelah penambahan i
console.log(flagIFuc(a, /k/i))//output index k bisa


//token RegExp dikelompokkan berdasarkan isinya
function tokenFunc(params,re) {
   console.log(params.match(re)) 
}

let token1= ' ibu bapak gulu kelasan.. kelas 1 dan kelas 2'
let token2= 'abcdS123 ef$8_79 !(5(0% ABC&^'
tokenFunc(token1,/./g) //output semua kecuali titik
tokenFunc(token1,/\./g) //output titik
tokenFunc(token2,/\d/g) //output angka
tokenFunc(token2,/\D/g) //output selain angka
tokenFunc(token2,/\w/g) //output angka, huruf, underscore
tokenFunc(token2,/\W/g) //selain angka, huruf, dan underscore
tokenFunc(token2,/\s/g) //whitespace
tokenFunc(token2,/\S/g) //kecuali whitespace/spasi


//karakter spesifik RegExp 
tokenFunc(token1,/kelas/g)
tokenFunc(token1,/[kelas]/g)// mengkasilkan array yang memeuat perhuruf dimana seluruh huruf k, e, l, a, s akan ditampilkan
tokenFunc(token1,/[^kelas]/g) //mengambil karakter kecuali karakter k,e,l,a,s
tokenFunc(token1,/[a-d]/g) //mengambil karakter diantara karakter a-d

//flag g digunakan untuk mencari keseluruhan atau global jika tanpa g maka yang tertapil haya satu output

tokenFunc(token1,/kelas/g) //global seluruh kata kelas dalam kalimat tampil
tokenFunc(token1,/kelas/)




