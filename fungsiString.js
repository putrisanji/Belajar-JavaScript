// char Code At digunakan untuk menampilkan kode unik/ kode asli dari suatu karakter

    function KodeAt() {
        const kode = 'mie ayam enak'
        console.log(kode.charCodeAt(4)) //nilai 4 merupakan index dari karakter yang dituju
        
    }
    KodeAt()

//String Code Point menampilkan karakter berdasarka kode unik/kodeaslinya

    function KodePoint(kode) {
        console.log(String.fromCodePoint(kode))
        
    }
    KodePoint(97) //nilai dalam kurung ini bisa berupa heksa (0x2615,0x2744,0x2f40)

// fungsi upercase dan lowercase
    function UpLowCase(kalimat) {
        console.log(kalimat.toLowerCase())
        console.log(kalimat.toUpperCase())   
    }
    UpLowCase('belajar apa Aja')

// fungsi char At digunakan untuk menampilkan karakter di fungsi tertentu

    function charAt(kalimat,char) {
        console.log(kalimat.charAt(char)) 
    }
    charAt('bayam dimakan kambing', 12)

// fungsi substring menampilkan karakter berdasarkan urutannya pada case ini karakter pertama indeks/urutanya satu bukan 0

    function subStr(params,start, end) {
        console.log(params.substr(start))
        console.log(params.substr(start, end))
    }
    subStr('anjing lucu banget',1,11)

// fungsi string slice sama sengan sub string
    function sliceFunc(params,slice) {
        console.log(params.slice(slice))
        
    }
    sliceFunc('aku ingin cilok', -4)

// fungsi split merubah karakter menjadi array

    function splitFunc(params) {
        console.log(params.split()) // perkata
        console.log(params.split("")) // perkarakter
        
    }
    splitFunc('aku ingin cilok')

//fungsi trim menghapus spasi diawal atau di akhir kalimat

    function trimFunc(params) {
        console.log(params)
        console.log(params.trim())
        
        
    }
    trimFunc(' aku ingin cilok ')

//fungsi string concat untuk menambahkan string atau menyambung string seperti oprator +

    function concatFunc(paramsA,paramsB) { // jumlah parameternya bebas
        let kalimat= 'acu'
        console.log(kalimat.concat(paramsA))
        console.log(kalimat.concat(paramsA,paramsB)) //bisa menambah karakter 2 sekaligus
    }
    concatFunc(' ingin cilok',' bumbu kacang')

// fungsi includes digunakan untuk mencari sebuah string(kata) berada pada string lain (kalimat)

    function includesFunc(paramsA,paramsB) { // jumlah parameternya bebas
        console.log(paramsA.includes(paramsB))
        
    }
    const kalimat = 'terlalu sering mandi dapat menyebabkan kulit menjadi kering'
    includesFunc(kalimat,'mandi') //true
    includesFunc(kalimat,'Mandi') //false

//fungsi start with untuk mengetahui kata pada awal string dan end with digunakan untuk mengetahui kata di akhir string
    function startEndWithFunc(paramsA,paramsB,index) { // jumlah parameternya bebas
        console.log(paramsA.startsWith(paramsB, index))
        console.log(paramsA.endsWith(paramsB, index))
    }
    startEndWithFunc(kalimat,'mandi')//false tidak ada di awal dan akhir kalimat
    startEndWithFunc(kalimat,'terlalu')//true false karena ada diawal namun tidak ada di akhir
    startEndWithFunc(kalimat,'kering')//false true karena kata kering ada di akhir 
    startEndWithFunc(kalimat,'sering',8)// true false kata sering ada dimulai dari index ke 8

// fungsi repeat digunakan untuk mengulang string
    function repeatFunc(params,loop) { // jumlah parameternya bebas
        console.log(params.repeat(loop))
    }
    repeatFunc('ini kucing ', 10)

// fungsi konversi string mengubah tipe data menjadi string mengunakan toString atau valueOf
function konvFunc(params) { 
    var kon= new String(params)//data berupa object
    console.log(typeof kon) //typeof untuk megidentifikasi jenis datanya
    console.log(kon)//data object
    var konStr= kon.toString();//mengkonfersi data berupa string
    console.log(typeof konStr)//typeof untuk megidentifikasi jenis datanya
    console.log(konStr)//data sudah berupa string
    var konStr2= kon.valueOf();//mengkonfersi data berupa string
    console.log(typeof konStr2)//typeof untuk megidentifikasi jenis datanya
    console.log(konStr2)//data sudah berupa string

}
konvFunc('ini kucing ')

//fungsi indexof untuk mencari posisi index dari sebuah string

    function indexOfFunc(params,str) { // jumlah parameternya bebas
        console.log(params.indexOf(str))
    }
    indexOfFunc('ini gue kucing gembul kucing ', "kucing")//mendeteksi kucing diawal kalimat

// fungsi string last indexOf mencari posisi index dari sebuah string dari index paling belakang atau akhir string

    function lastIndexOfFunc(params,str) { // jumlah parameternya bebas
        console.log(params.lastIndexOf(str))
    }
    lastIndexOfFunc('ini gue kucing gembul kucing', 'kucing')// mendeteksi kucing di akhir kalimat

// fungsi string Search sama seperti indexof namun pencarannya berdasaekan regular expression
    function cari(params, search) {
        console.log(params.search(search))
    }
    cari('ini gue kucing gembul kucing', 'kucing')
    cari('ini gue kucing gembul kucing', /kucing/)//regular expression

// string match digunakan untk mencari seperti search dengan hasil berupa array

    function Match(params, str) {
        console.log(params.match(str))
    }

    Match('ini gue kucing gembul kucing', 'kucing')
    Match('ini gue kucing gembul kucing', /kucing/)//regular expression

// fungsi string replace digunakan untuk mengganti string 


    function Replace(sentences,paramsA, paramsB) {
        console.log(sentences.replace(paramsA,paramsB))//paramsA adalah kata yang ingin diganti paramsB adalah kata pengganti
                                                    
    }
    Replace('ini gue kucing gembul kucing', 'kucing', 'anjing')//fungsi ini hanya mengganti string satu kali saja

//fungsi konversi menjadi string 

function konvStringFunc(params) {
    return String(params)
    
}
console.log(konvStringFunc(true))
console.log(konvStringFunc(124))
console.log(konvStringFunc('coba'))



