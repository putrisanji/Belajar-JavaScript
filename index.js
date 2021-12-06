//perbedaan antar variable let, var, const

    //var dan let nilainya dapat diubah 

    var a =1
    let b= 2

    const c=5 //nilai tidak bisa dubah 

    console.log(a)

//Perbedaan var dan let

    // variabel var akan berlaku disemua tempat

    if (true){
        var a= 4;
        let b= 5;
        console.log ("Inner value >>", b)//outputnya 5
    }
    console.log ('value >>', a) //outputnya 4, nilai a terganti dengan variable a dalam if

    console.log ('outer value>>', b)//outputnya menghasilkan 2 

//membuat variabel tanpa let var const 

 d=4; // tanpa deklarasi variabel
 console.log(d)
    // perbedaan 
    let e; //e dapat terdefinisi namum valuenya tidak ada atau undifind
     g; //tidak terdefinisi, harus disertakan valuenya

