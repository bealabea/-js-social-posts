// MILESTONE 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post,
// numero progressivo da 1 a n nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.
function createPost(stampHtml, element) {
  let textHtml = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${element.authorPhoto}" alt="${element.authorName}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.authorName}</div>
                    <div class="post-meta__time">${element.postDate}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.postText}</div>`;

  if (element.postImage) {
    textHtml += `
            <div class="post__image">
             <img src="${element.postImage}" alt="">
            </div>`;
  }

  textHtml += `<div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#${element.postId}" id="${element.postId}" data-postid="${element.postId}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter" id="#${element.postId}">
                Piace a <b id="like-counter-${element.postId}" class="js-likes-counter">${element.like}</b> persone
            </div>
        </div> 
    </div>            
</div>`;

  stampHtml.innerHTML += textHtml;
}

const containerHtml = document.querySelector(".posts-list");

let posts = [
  {
    postId: 1,
    authorName: "Marco Marchi",
    authorPhoto: "https://images.unsplash.com/photo-1641207455875-6a55841732f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    postDate: "01-15-2022",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
    postImage: "https://images.unsplash.com/photo-1641946320881-3b8442ba482a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    like: 304
  },
  {
    postId: 2,
    authorName: "Pino Pini",
    authorPhoto: "https://images.unsplash.com/photo-1641824780302-d918ddc3ba08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    postDate: "01-20-2022",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
    postImage: "https://images.unsplash.com/photo-1641924875397-5324016b96bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    like: 2405
  },
  {
    postId: 3,
    authorName: "Giorgio Giorgetti",
    authorPhoto: "https://images.unsplash.com/photo-1640952891722-d340f4f19adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
    postDate: "02-10-2022",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
      like: 60
  },
  {
    postId: 4,
    authorName: "Rosa Rossi",
    authorPhoto: "https://images.unsplash.com/photo-1641391503184-a2131018701b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    postDate: "02-15-2022",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
      like: 36
  },
  {
    postId: 5,
    authorName: "Paola Paolini",
    authorPhoto: "https://unsplash.it/300/300?image=15",
    postDate: "02-18-2022",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
    postImage: "https://unsplash.it/600/300?image=171",
    like: 202
  },
];

// MILESTONE 2
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
for (let i = 0; i < posts.length; i++) {
  let post = posts[i];
  createPost(containerHtml, post);
}

// MILESTONE 3
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

let counter = document.querySelectorAll(".js-likes-counter"); /* con querySelectorAll seleziono e raggruppo tutti gli elementi con la classe js-likes-counter (per modificare il numero di like)*/
const likeButtons = document.querySelectorAll(".like-button"); /* con querySelectorAll seleziono e raggruppo tutti gli elementi con la classe like-button (per la selezione del button)*/
let idLiked = []; /* creo un array vuoto dove inserire gli id dei post ai quali ho messo like*/

for(let i=0; i< likeButtons.length; i++){ /* creo un ciclo all'interno della lista di elementi con la classe like-button*/
likeButtons[i].addEventListener("click", function (e) { e.preventDefault() /* creo un evento click ad ogni button*/
        
        if(likeButtons[i].classList.contains('like-button--liked')){ /* SE il button contiene la classe like-button--liked, quando lo clicco la classe viene rimossa e la proprietà like del rispettivo oggetto viene decrementata*/
            posts[i].like--; /* decremento la proprietà like dell'oggetto ciclato*/
            likeButtons[i].classList.remove('like-button--liked'); /* rimuovo la classe per dare il colore al button */
        }else {
            idLiked.push(posts[i].postId) /* aggiungo all'array vuoto l'id del post a cui ho messo like */
            posts[i].like++; /* incremento la proprietà like dell'oggetto ciclato */
            likeButtons[i].classList.add('like-button--liked'); /* aggiungo la classe per dare il colore al button */
        }
        counter[i].innerHTML = posts[i].like; /* stampo il conteggio dei like ad ogni click */
        });
}

