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

// fungsi string slice

