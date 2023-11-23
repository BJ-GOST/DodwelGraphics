menuBtn = document.getElementById('menu-btn') 
dropMenu = document.getElementById('drop-down')



menuBtn.addEventListener("click", ()=>{
    dropMenu.classList.remove("hidden")
    dropMenu.classList.add("flex")
    setTimeout(
        ()=>{
            dropMenu.classList.remove("flex")
            dropMenu.classList.add("hidden")
        }, 5000
    )
    
})



