// $('.like, .dislike').on('click', function(event) {
//   event.preventDefault();
//   $('.active').removeClass('active');
//   $(this).addClass('active');
// });
const cardImage=document.getElementById("card-image")
const likeCount=document.getElementById("like-count")
const cardTitle=document.getElementById("card-title")
const commentsList=document.getElementById("comments-list")
const url='https://randomfox.ca/floof/'

fetch(url)
    .then((response) => response.json())
    .then(renderGram);
      
    function renderGram(data){
      cardImage.src=data.image
    }