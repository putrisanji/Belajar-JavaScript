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


