
// const input = document.querySelector(".input")
// input.addEventListener('input', function(){
//     const input = document.querySelector(".input")
//     const filter = input.value.toLowerCase()
//     const list = document.querySelectorAll(".list-group-item")

//     list.forEach((item) => {
//         let text = item.textContent
//         if (text.toLowerCase().includes(filter.toLowerCase())) {
//             item.style.display = ''
//         }
//         else{
//             item.style.display = "none"
//         }
//     })
// })

const input = document.querySelector(".input")
input.addEventListener("input", function(){
    const input = document.querySelector('.input')
    const filter = input.value.toLowerCase()
    const list = document.querySelectorAll('.list-group-item')

    list.forEach((el) => {
        const text = item.textContent
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            el.style.display = ''
        }
        else{
            el.style.display = "none"
        }
    });
})
