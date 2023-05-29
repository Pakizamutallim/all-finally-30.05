$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    // autoplay:true,
    // autoplayTimeout: 2000,
    // stagePadding: 70,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


$('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        1000: {
            items: 1
        }
    }
})

// window.addEventListener("scroll", function(){
//     // logo.style.position.top = "10px"
//     background-color = "red"
// })


const row = document.querySelector('.row')
fetch('https://6469bba8183682d614455b66.mockapi.io/house')
    .then(resp => resp.json())
    // .then(res => console.log(res)) 
    .then(res => {
        res.forEach(el => {
            row.innerHTML += `
        <div class="post card col-3 m-2" style="width: 18rem;">
            <img src="${el.img}" class="card-img-top" alt="...">
            <div class="card-body d-flex justify-content-md-between">
                <h5 class="card-title">${el.name}</h5> 
                <p class="text-"> $ ${el.price} </p>
            </div>
        </div> `
        });
    })


const loadmore = document.querySelector(".load")

// loadmore.addEventListener("click", (e) => {
//     const element = document.querySelector(.post)
//     e.target.classList.remove(show-loader)
// })

