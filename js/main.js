let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

// NEXT BUTTON FUNCTION
// ARROW FUNCTION
nextBtn.onclick= () => {
    active = active + 1;
    setSlider();
}
// PREV BUTTON FUNCTION
// ARROW FUNCTION
prevBtn.onclick= () => {
    active = active - 1;
    setSlider();
}

// SET SLIDER FUNCTION
const setSlider = () =>{
    let oldActive = document.querySelector('.slider .list .item.active');
    if(oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');

    if(active == lastPosition) nextBtn.classList.add('d-none');
    if(active == firstPosition) prevBtn.classList.add('d-none');

}
setSlider();

// SETTING DIAMETER 
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;

    let diametter = Math.sqrt(Math.pow(widthSlider,2) + Math.pow(heightSlider,2));
    document.documentElement.style.setProperty('--daimeter', diameter+'px');
}
setDiameter();
window.addEventListener('resize', ()=>{
    setDiameter();
});