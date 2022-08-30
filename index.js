document.addEventListener('DOMContentLoaded', (event)=>{
const imageCard=document.getElementById("imageCard")
const cardImage=document.getElementById("card-image")
const likeCount=document.getElementById("like-count")
const cardTitle=document.getElementById("card-title")
const addLike=document.getElementById("add-like")
const disLike=document.getElementById("remove-like")
const commentsLst=document.getElementById("comments-list")
const url='https://randomfox.ca/floof/'
let likes = 0;



const imageRot=fetch(url)
    .then((response) => response.json())
    .then(renderImage);
      
    function renderImage(data){
      cardImage.src=data.image
      // renderComments(data.comments);
    }
    

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
  // comments.forEach(renderComment)
}


function renderComment(comment){
  const li=document.createElement("li")
  li.innerHTML=comment.content
  document.getElementById("comments-list").append(li)
}
function addComment(event){
  event.preventDefault();
  const commentText=event.target.comment.value;
  renderComment({content: commentText})

  event.target.reset();
}
