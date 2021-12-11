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

