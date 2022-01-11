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
function createPost(stampHtml, element){
    stampHtml.innerHTML +=`
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
        <div class="post__text">${element.postText}</div>
        <div class="post__image">
            <img src="${element.postImage}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">0</b> persone
                </div>
            </div> 
        </div>            
    </div>`
}
const containerHtml = document.querySelector('.posts-list')

let posts = [
    {
        postId: 1,
        authorName: 'Marco Marchi',
        authorPhoto: 'https://unsplash.it/300/300?image=15',
        postDate: '01-15-2022',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        postImage: 'https://unsplash.it/600/300?image=171'
    },
    {
        postId: 2,
        authorName: 'Pino Pini',
        authorPhoto: 'https://unsplash.it/300/300?image=15',
        postDate: '01-20-2022',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        postImage: 'https://unsplash.it/600/300?image=171'
    },
    {
        postId: 3,
        authorName: 'Giorgio Giorgetti',
        authorPhoto: 'https://unsplash.it/300/300?image=15',
        postDate: '02-10-2022',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias'
    },
    {
        postId: 4,
        authorName: 'Rosa Rossi',
        authorPhoto: 'https://unsplash.it/300/300?image=15',
        postDate: '02-15-2022',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias'
    },
    {
        postId: 5,
        authorName: 'Paola Paolini',
        authorPhoto: 'https://unsplash.it/300/300?image=15',
        postDate: '02-18-2022',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        postImage: 'https://unsplash.it/600/300?image=171'
    },
]



// MILESTONE 2
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
for(let i = 0; i < posts.length; i++){
    let post = posts[i];
    createPost(containerHtml, post)
}

// MILESTONE 3
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

