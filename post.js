// let postlist = [
//     {name:"mustafa", post:"a"},
//     {name:"muco", post:"b"},
// ]

// const list=()=>{
//     postlist.map(posts=>{
//         console.log(posts);
//     })
// }


// const addpost=(post)=>{
//     list();
//     postlist.push(post);
//     list();
// }

// addpost({name:"aslan akbey",post:"c"}); 

// async await kullnamaya gerek yok ama kullanalım.


let postlist = [
    { name: "mustafa", post: "a" },
    { name: "muco", post: "b" },
  ];
  
  const list = async () => {
    postlist.map((posts) => {
      console.log(posts);
    });
  };
  
  const addPost = async (post) => {
    await list();
    postlist.push(post);
    await list();
  };
  
  // async fonksiyonu çağırma
     addPost({ name: "aslan akbey", post: "c" });
  

  
