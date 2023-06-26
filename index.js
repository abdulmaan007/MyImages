const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const imgContainer = document.querySelector(".image-container")
const imgEl = document.querySelectorAll("img")
let timeout;

let currentImg = 1;

nextBtn.addEventListener("click", ()=>{
    currentImg++;
    clearTimeout(timeout);
    update();
    
})

prevBtn.addEventListener("click", ()=>{
    currentImg--;
    clearTimeout(timeout);
    update();
})

update();

function update(){
    if(currentImg > imgEl.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imgEl.length
    }
    imgContainer.style.transform = `translateX(-${(currentImg -1) * 500}px)`

    timeout = setTimeout(()=>{
        currentImg++;
        update();
    }, 3000);
}
