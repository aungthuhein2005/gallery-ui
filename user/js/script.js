let accountHas = false;
let likeHas = false;

let blogsList = document.querySelector(".blogs-list");
let blogSearchBox = document.querySelector("#blog-search-box");

let blogs = [
    {
        id : 1,
        title : "44",
        image : "../image/webiste/wp2596952.jpg",
        category : "photo",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in ad fugit explicabo",
    },
    {
        id : 2,
        title : "title 2",
        image : "../image/webiste/photo-of-island-1714456.jpg",
        category : "photo",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in ad fugit explicabo",
    },
    {
        id : 3,
        title : "title 3",
        image : "../image/webiste/blog_background.webp",
        category : "landscape",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in ad fugit explicabo",
    },
    {
        id : 4,
        title : "title 4",
        image : "../image/webiste/forest-grass-green-1125776.jpg",
        category : "song",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in ad fugit explicabo",
    },
    {
        id : 5,
        title : "title 3",
        image : "../image/webiste/147130.jpg",
        category : "theme",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in ad fugit explicabo",
    }
]

blogsShow(blogs);

$('.blogs .card').waypoint(function(direction){
    $(".blogs .card").addClass('animate__fadeIn');
})

$("#home-btn").click(function(e){
    e.preventDefault();
    $("html,body").animate({scrollTop: $("header").offset().top}, 500);
})

$("#blogs-btn").click(function(e){
    e.preventDefault();
    $("html,body").animate({scrollTop: $(".blogs").offset().top}, 500);
})

$("#categories-btn").click(function(e){
    e.preventDefault();
    $("html,body").animate({scrollTop: $(".categories").offset().top}, 500);
})


$("#contact-btn").click(function(e){
    e.preventDefault();
    $("html,body").animate({scrollTop: $("footer").offset().top}, 500);
})


if(accountHas){
    $(".account-btn").addClass("login-true");
    $(".sign-in-icon").removeClass("login-false");
    $(".account-btn").click(function(){
        $(".user-account").toggle("slow");
    })
}else{
    $(".sign-in-icon").addClass("login-false");
    $(".account-btn").removeClass("login-true");
    $(".sign-in-icon").click(function () {
        console.log("hello");
        $(".register_login-links").toggle("slow");
      })
    $(".register-btn").click(function(){
        let a = document.createElement('a');
        a.href = "register.html";
        a.click();
    })
    $(".login-btn").click(function(){
        let a = document.createElement('a');
        a.href = "login.html";
        a.click();        
    })
}

$("#login-close").click(function(){
    let a = document.createElement('a');
    a.href = "index.html";
    a.click();     
})

$("#comments-show-btn").click(function(){
    if(accountHas){
        $(".comments").toggle("slow");
        $("html,body").animate({scrollTop: $(".comments").offset().top}, 500);
    }else{
        $(".modal").slideDown("slow");
        $("#login_register_modal_close").click(function(){
            $(".modal").slideUp("slow");
        })
    }
})


$("#like-btn").click(function(){
    if(accountHas){
        if(!likeHas){
            $(this).css({"color": "blue"});
            likeHas = true;
        }else{
            $(this).css({"color" : "#333"});
            likeHas = false;
        }
    }else{
        $(".modal").slideDown("slow");
        $("#login_register_modal_close").click(function(){
            $(".modal").slideUp("slow");
        })
    }
})

$("#unlike-btn").click(function(){
    if(accountHas){
        if(!likeHas){
            $(this).css({"color": "blue"});
            likeHas = true;
        }else{
            $(this).css({"color" : "#333"});
            likeHas = false;
        }
    }else{
        $(".modal").slideDown("slow");
        $("#login_register_modal_close").click(function(){
            $(".modal").slideUp("slow");
        })
    }
})

$(".blog-detail").each( function (indexInArray, valueOfElement) { 
     $(this).click(function(){
        let a = document.createElement('a');
        a.href = "blog.html";
        a.click();  
     })
});

// blogs search
blogSearchBox.addEventListener("input",(e)=>{
    let searchBlogResult = [];
    let search = e.target.value.toLowerCase();
    blogs.forEach(blog => {
        let searchBlog = blog.title.includes(search) || blog.description.includes(search);
        if(searchBlog){
            searchBlogResult.push(blog);
            blogsList.innerHTML = '';
            blogsShow(searchBlogResult);
        }
    });
})

// filter btns
$("#all-filter-btn").click(()=>{
    blogsList.innerHTML = '';
    blogsShow(blogs);
})

$("#photo-filter-btn").click(()=>{
    filterBlog("photo");
})

$("#song-filter-btn").click(()=>{
    filterBlog("song");
})

$("#theme-filter-btn").click(()=>{
    filterBlog("theme");
})

$("#landscape-filter-btn").click(()=>{
    filterBlog("landscape");
})

$("#poem-filter-btn").click(()=>{
    filterBlog("poem");
})


function filterBlog(value){
    let filter = [];
    $("html,body").animate({scrollTop: $(".blogs-list").offset().top}, 500);
    blogs.forEach(blog => {
        if(blog.category == value){
            filter.push(blog);
            blogsList.innerHTML = '';
        }
    })
    if(filter.length == 0){
        blogsList.innerHTML = `<h1 class="text-center" >No ${value} blogs</h1>`;
    }else{
        setTimeout(() => {
            blogsShow(filter);
        }, 500);
    }
}



// show blog 
function blogsShow(data){
    data.forEach(element => {
        blogsList.innerHTML += `
                <div class="col-4 mb-4">
                    <div class="card">
                        <img src="${element.image}" alt="" class="card-img-top">
                        <div class="card-body">
                            <h1 class="card-title fs-5">${element.title}</h1>
                            <p class="card-text">
                                ${element.description}
                            </p>
                            <div class="text-end">
                                <button class="btn btn-sm btn-outline-primary blog-detail">Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    });
}


//register