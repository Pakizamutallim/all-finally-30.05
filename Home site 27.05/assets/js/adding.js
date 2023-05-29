document.querySelector("button").addEventListener("click", function(){
    const adding = fetch('https://6469bba8183682d614455b66.mockapi.io/house', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: document.querySelector("#name").value,
            img: document.querySelector("#img").value,
            price: document.querySelector("#price").value
        })
    })
    adding.then(res => {
        (res.ok == true)
        {
            document.querySelector("#name").value = ""
            document.querySelector("#img").value = ""
            document.querySelector("#price").value = ""
        }
    }).catch(error=> console.log(error))
}) 


