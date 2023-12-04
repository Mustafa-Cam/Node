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


     //! bu örnek daha güzel online js compiler de deneyebilirsin => 

     // Asenkron bir fonksiyon simüle edelim
// const fetchData = () => {
//     return new Promise((resolve) => {
//       // Simüle edilmiş asenkron bir işlem
//       setTimeout(() => {
//         resolve("Veri başarıyla alındı!");
//       }, 2000);
//     });
//   };
  
//   // async fonksiyonu tanımlayalım
//   const fetchDataAsync = async () => {
//     console.log("Veri alımı başlıyor...");
  
//     // await ifadesi, asenkron işlemin tamamlanmasını bekler
//     const result = await fetchData();
  
//     // Sonuç elde edildikten sonra işleme devam eder
//     console.log(result);
//     console.log("Veri alımı tamamlandı!");
//   };
  
//   // async fonksiyonu çağıralım
//   fetchDataAsync();
  
  

  
