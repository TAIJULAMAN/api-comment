// // post-section....................

const postSection =()=>{
    const url = fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
    .then(post =>  console.log(post))
}
function postDisplay(){
    postland
    console.log('this is a paragraph')
}
// const post1 = (post)=>{
//     post1.value =post.post
//     console.log
// }
