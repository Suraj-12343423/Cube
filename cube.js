const cube = document.querySelector('.cube')
let rotateX = 0;
let rotateY = 0;



let isPaused = false;

cube.addEventListener("mouseenter", () => isPaused = true);
cube.addEventListener("mouseleave", () => isPaused = false);


function animateCube(){
    if(!isPaused){
        rotateX += 1;
        rotateY += 1.5;
    }
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    requestAnimationFrame(animateCube);
}

animateCube();