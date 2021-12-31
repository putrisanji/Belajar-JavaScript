const posts = [
  {
    id: 1,
    title: "masak air",
  },
  {
    id: 2,
    title: "masak nasi",
  },
];

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback(); //memanggil kembali fungsi getpost untuk menampilkan penambahan data
  }, 2000);
};

const getPost = () => {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post);
    });
  }, 1000); //secara normal akan di eksekusi terlebih dahulu
}; //sehingga data yang ditambahkan fungsi createPost tidak akan muncul
//untuk mengatasi ini dapt menggunakan fungsi callback

const newPost = {
  id: 3,
  title: "masak sayur",
};

createPost(newPost, getPost);
getPost();
