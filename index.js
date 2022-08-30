document.addEventListener('DOMContentLoaded', (event)=>{
const imageCard=document.getElementById("imageCard")

const cardImage=document.getElementById("card-image")
const likeCount=document.getElementById("like-count")
const cardTitle=document.getElementById("card-title")
const commentsList=document.getElementById("comments-list")
const addLike=document.getElementById("add-like")
const disLike=document.getElementById("remove-like")

const url='https://randomfox.ca/floof/'
let likes = 0;

const imageRot=fetch(url)
    .then((response) => response.json())
    .then(renderImage);
      
    function renderImage(data){
      cardImage.src=data.image
    
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


function renderDisLike(){
  likeCount.textContent=`${likes} likes`
}
});

