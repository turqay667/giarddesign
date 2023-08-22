const moreBtn=document.getElementById('moreBtn')

function loadMore(){
    const expand=document.getElementById('expanded')
    expand.classList.add('expanded')
    moreBtn.classList.add("hide")
    expand.classList.remove('unexpanded')

}
function loadLess(){
    const expandedGallery=document.querySelector('.expanded')
    expandedGallery.classList.add('unexpanded')
    moreBtn.classList.remove("hide")
  

}


const slides=document.querySelector('.slides')
const prevButton= document.querySelector('.prevButton');
const nextButton= document.querySelector('.nextButton')
const slideWidth=document.querySelector('.slide').offsetWidth;
let currentSlide=0;

prevButton.addEventListener('click',()=>{
if(currentSlide>0){
    currentSlide--;
    updateSlide();
}
})
nextButton.addEventListener('click',()=>{
if(currentSlide<slides.children.length-1){
    currentSlide++;
    updateSlide();
}
})
function updateSlide(){
    slides.style.transform=`translateX(-${currentSlide*slideWidth}px)`
}

