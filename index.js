const cardImage=document.getElementById("card-image")
function MyFunc () 
{fetch(url)
    .then((response) => response.json())
    .then(renderImage);
    
cardImage.addEventListener("mouseover",blurImage);   
    function renderImage(data){
      cardImage.src=data.image
    }
  }
  const imageCard=document.getElementById("imageCard")
  const likeCount=document.getElementById("like-count")
  const cardTitle=document.getElementById("card-title") 
  const disLike=document.getElementById("remove-like")
  const commentsLst=document.getElementById("comments-list")
  const url='https://randomfox.ca/floof/'
  document.addEventListener('DOMContentLoaded', (event)=>{
MyFunc();
let likes = 0;

const addLike=document.getElementById("add-like")   

addLike.addEventListener("click",()=>{
  
  likes+=1
  renderLikes();
})

function renderLikes(){
  likeCount.textContent=`${likes} likes`
}

disLike.addEventListener("click",()=>{
  if(likes>0){
  likes-=1}
  renderDisLike();
})
document.getElementById("comment-form").addEventListener("submit",addComment)

function renderDisLike(){
  likeCount.textContent=`${likes} likes`
}
});

function renderComments(comments){
  document.getElementById("comments-list").innerHTML="";
}
function renderComment(comment){
  const li=document.createElement("li")
  li.innerHTML=comment.content
  document.getElementById("comments-list").append(li)
  li.addEventListener("click",()=>{
  li.style.display="none"
  })
}
function addComment(event){
  event.preventDefault();
  const commentText=event.target.comment.value;
  renderComment({content: commentText})

  event.target.reset();
}
// console.log(document.getElementById("logo"))
document.getElementById("logo").addEventListener("click",(event)=>{
  // console.log(event)
  MyFunc();  
})
function blurImage(){
    cardImage.style.opacity = 0.5;
}
function normalImage(){
  cardImage.style.opacity=1;
}
cardImage.addEventListener("mouseout",normalImage)
