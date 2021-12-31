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
  
const init = async()=>{
    await createPost(newPost)
    getPost()
}

init()