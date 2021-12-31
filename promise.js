//Promise

//Constructor promise akan menerima argument sebuah fungsi 
//dengan 2 parameter yaitu resolve dan reject.
//Then dan catch adalah 2 method promise yang nantinya akan di
// gunakan untuk menangani hasil dari sebuah promise.

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

const createPost = (post) => {
  return  new Promise((resolve, reject)=>{
    setTimeout(() => {
        posts.push(post);
        const error = false
        if (!error){
            resolve()
        }else{
            reject()
        }
      }, 2000);

  })

};

const getPost = () => {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post);
    });
  }, 1000);
};

const newPost = {
  id: 3,
  title: "masak sayur",
};

createPost(newPost)
    .then(getPost)
    .catch(error=>console.log(error))

