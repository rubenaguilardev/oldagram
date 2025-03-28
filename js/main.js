const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.png",
        comment: "just took a few mushrooms lol",
        likes: 214
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 42
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById('main-container')

for (let i = 0; i < posts.length; i++) {
    container.innerHTML += `
        <section class="main">
            <section class="userDetails">
                <img id="artist-avatar" src="${posts[i].avatar}" alt="${posts[i].name} picture">
                <div class="userNameLocation">
                    <p id="artistName">${posts[i].name}</p>
                    <p id="artistLocation">${posts[i].location}</p>
                </div>
            </section>

            <img class="image" src="${posts[i].post}" alt="Vincent van Gogh painting">

            <div class="icons">
                <img id="heart${i}" class="icon heart" src="images/icon-heart.png" alt="An icon for liking a post">
                <img class="icon" src="images/icon-comment.png" alt="An icon for commenting on a post">
                <img class="icon" src="images/icon-dm.png" alt="An icon for messaging the post to a user">
            </div>

            <p class="likes">${posts[i].likes} likes</p>

            <p id="userComment"><span>${posts[i].username}</span> ${posts[i].comment}</p>
        </section>
    `    
}

let heartBtn = document.querySelectorAll(`.heart`)

console.log(heartBtn)
    
   

