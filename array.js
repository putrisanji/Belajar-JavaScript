// fungsi .shift diguankan untuk menghapus index ke-0 dari kota
//menampilkan data yang terhapus
 const Arr = [1,2,3,4,5,6,7]
 console.log(Arr)

 const Arr2=Arr.shift()
 console.log(Arr2)

// fungsi pop untuk menghapus data di index terakhir
//menampilkan data yang terhapus
    const Arr3= Arr
    console.log(Arr3)
    const Arr4=Arr3.pop()
    console.log(Arr4)

//fungsi .push untuk menambahkan data dalam array
//menampilkan data yang ditambahkan
    const Arr5= Arr
    console.log(Arr5)
    const Arr6=Arr5.push(8)
    console.log(Arr6)
//fungsi .spilce untuk menambahkan data dalam array
    const kota=['jakarta', 'bandung', 'surabaya']
    console.log(kota)
    kota.splice(2,0,'palembang')
    console.log(kota)
    //angka 2 menunjukkan lokasi (indeks) penempatan data yang
    //ingin ditambahkan
    //angka 0 mewakili jumlah data yang ingin dihapus setelah penambahan
    //menghapus data dengan splice 
    const dataKota=kota
    dataKota.splice(2,1)
    console.log(dataKota)
    //palembang pada index ke dua terhapus 
    // jika angka 1 diubah dengan angka 2 maka yang akan terhapus adalah 2 data

// fungsi .unshift digunakan untuk menambah data baru pada index pertama

function unShiftArr() {
    const Arr=kota
    console.log(Arr)
    Arr.unshift('medan', 'makasar')
    //medan dan makasar akan ditambahkan pada index awal array
    console.log(Arr)
}
unShiftArr()

//Array Reverse
const arr=['bandung', 'jakarta', 'medan']
console.log(arr)

function arrReverse(params) {
    let result=params.reverse()
    // return result
    console.log(result)
}
arrReverse(arr) 
console.log(arr)//array telah ter revese 


//fungsi concat

function arrConcat(paramsA, paramsB) {
    let result=paramsA.concat(paramsB)
    return result
}

const data=['jombang', 'mojokerto','blitar','tuban','pasuruan']

console.log(arrConcat(arr,data))

//fungsi slice Array untuk mengambil sebagian atau semua bagian array untuk di copy pada variable lain

function arrSlice(params) {
    let semua=params.slice()//meng copy semua array
    let sebagian= params.slice(2,4)//meng copy sebagian yaitu pada index ke 2 hingga urutan ke 4 data
    console.log(semua)
    console.log(sebagian)
}
arrSlice(data)

//fungsi array join dapat merubah data array menjadi string 

function arrJoin(params) {
    console.log(params)
    const result =params.join(",")
    return result
}
console.log(arrJoin(data))

//fungsi split dapat mengubah sebuah string menjadi array

var exsplit='coba fungsi spalit'

function arrSplit(params) {
    console.log(params)
    const result =params.split(" ")//kondisi diperlukan untuk menentukan pemisahan kata
    return result
}
console.log(arrSplit(exsplit))

// fungsi IndexOf Array mencari index dari sebuah data dalam array

function arrIndexOf(params, word) {
    console.log(params)
    const result =params.indexOf(word)//jika data tidak ada maka menghasilkan -1
    return result
}
console.log(arrIndexOf(data, 'blitar'))

// ForEach untuk perulangan 

const caracters= ['a', 'b', 'c']

function arrForEach(params) {
    params.forEach(function (item, index, array) { //penamaan bebas namun urutan parameternya tetap yaitu 1 mewakili item kedua index dan ke 3 array
        console.log(item)
        console.log(index)
        console.log(array)
        
    })
}

arrForEach(caracters)

//fungsi map untuk perulangan

// const caracters= ['a', 'b', 'c']

function arrMap(params) {
    params.map(function (item, index, array) { //penamaan bebas namun urutan parameternya tetap yaitu 1 mewakili item kedua index dan ke 3 array
        console.log(item)
        console.log(index)
        console.log(array)
        
    })
}

arrMap(caracters)

//fungsi Array Filter

let Identitas=[
    {
        name:'cindy',
        gender:'female'
    },
    {
        name:'adi',
        gender:'male'
    },
    {
        name:'budi',
        gender:'male'
    },
    {
        name:'kekei',
        gender:'female'
    }
]


let female=  Identitas.filter((data)=>{
        return data.gender==='male';
    })
    

console.log(female)

function arrFilter(params,value) {
    const result =params.filter((data)=>{
        return data.gender === value;
    })
    return result
}
console.log(arrFilter(Identitas,'female'))


// fungsi array every untuk menentukan sebuah data dalam sebuah array memenuhi kriteria tertentu
// namun hanya akan mereturn true jika semua data memenuhi kriteria

console.log(Identitas.every(params=>params.gender==='male')) // mereturn false karena terdapat gender lain yaitu female

//fungsi array some mirip dengan every
//namun fungsi ini akan mereturn true jikan salah satu data ada yang memenuhi kriteria yang ditentukan

console.log(Identitas.some(params=>params.gender==='male'))//return true

// fungsi Array Finf and Find Index
// find digunakan untuk mengembalikan sebuah nilai dari item pertama dalam sebuah array yang memenuhi fungsi pengujian yang dilakukan


const angka=[11,3,5,12,4,6]

const found= angka.find((item)=>{
    return item>10;

})
console.log(found)// output 11 karena 11 berada pada index awal dan telah memenuhi kondisi yang  diharapkan yaitu >10

function isLargeNumber(params) {
    return params>11;
    
}

console.log(angka.findIndex(isLargeNumber))

//Fungsi Array Reduce dan Reduce Right
//Reduce digunakan untuk megakumulasikan atau mengurangi nilai di dalama array
// Reduce Right menerapkan fungsi terhadap akumulator dan setiap niali array dari kanan kekiri untuk meguranginya menjadi niali tunggal
const reducer= (accumulator,currentValue)=> accumulator+currentValue;

console.log(angka.reduce(reducer))
console.log(angka.reduce(reducer,5))

//jika bukan nested array maka fungsi ini sama dengan reduce biasa
const reduceR= angka.reduceRight((accumulator,currentValue)=>{
    return accumulator+currentValue
})
console.log(reduceR)

//nested array

const koordinat= [[0,1],[5,6],[4,8],[0,9]]
const reduceR2= koordinat.reduceRight((accumulator,currentValue)=>{
    return accumulator+currentValue
})
console.log(reduceR2)//hasulnya merupakan gabungan dari element kanan dengan element kiri pada sub array yang berbeda

const reduceR3= koordinat.reduceRight((accumulator,currentValue)=>{
    return accumulator.concat(currentValue)
})
console.log(reduceR3) //menghasilkan satu array

//Array Sort diguankan untuk mengurutakn element didalam array sesuai Abjad
//jika elementnya bukan huruf makan akan diubah semntara menjadi string lalu diurutkan
//sementara jika terdapat element null maka akan diletakkan di akhir

function pengurutan(params) {
    console.log(params)
    let result= params.sort()
    return result
    
}

console.log(pengurutan(data))

//untuk megurutkan secara descending dapat menggunakan method reverse


//fungsi array Eval fungsi ini digunakan untuk megefaluasi ekspresi dan dapat juga digunakan untuk mengeksekusi peryataan

function Evalfunc(params) {
    var total= 0
    for(let i=0;i<params.length;i++){
        total+=params[i]
    }
    console.log(eval(total))
    
}
Evalfunc(angka)

//fungsi isFinite 
const campuran=[1,2,3,'depok','bekasi']

function isFintefunc(paramsA, paramsB, paramsC, paramsD) {
    let a=isFinite(paramsA)
    let b=isFinite(paramsB)
    let c=isFinite(paramsC)
    let d=isFinite(paramsD)
    
    console.log(a) //data terbatas dalam array
    console.log(b) //data terbatas dalam array
    console.log(c) //data terbatas dalam array
    console.log(d) //data tidak terbatas
    
}
isFintefunc(angka, data, campuran, -559994.65)

// fungsi isNan akan mereturn true jika ada data not a number

function isNanFuc(params) {
    return isNaN(params)
    
}
console.log(isNanFuc(angka))// hasilnya true karena tipe datanya array bukan number
console.log(isNanFuc(223)) //hasilnya false karena tipe datanya number