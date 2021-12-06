//ceil: untuk pembulatan keata
//floor:untuk pembulatan kebawah
//round: untuk pembulatan berdasarkan 0.5 lebih besar dari 0.5 keatas kurang dari 0.5 kebawah 

const x=15.6
console.log(Math.ceil(x))
console.log(Math.floor(x))
console.log(Math.round(x))

//bilangan absolute fungsi abs mengubah value menjadi positif

let a= 3
let b = -5

console.log(Math.abs(b), a)

//POW untuk membuat pangkat

console.log(Math.pow(a,2)) //nilai 3 akan dipangkatkan 2 menghasilkan 9

//fungsi akar

function Akar(value) {
    console.log(Math.sqrt(value))
    
}

Akar(9)

//fungsi akar

function logaritma(value){
    console.log(Math.log(value))
    console.log(Math.log2(value))
    console.log(Math.log10(value))
}

logaritma(100)

//fungsi min max

function minMax(a,b,c,d,e,f) {
    let min=Math.min(a,b,c,d,e,f)
    console.log(min)
    console.log(Math.max(a,b,c,d,e,f))
}

minMax(10, 11, 12, 13, 14, 15)

//masih banyak lagi untuk dipelajari ganbateee!!!!


