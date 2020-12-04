const progress = document.getElementById('progress');
const prev = document.getElementById('prev');// buttons
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); //Node list

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    
    if(currentActive >= circles.length) {
        currentActive = circles.length;
    }
    update()

})

prev.addEventListener('click', () => {
    currentActive--;
    
    if(currentActive < 1) {
        currentActive = 1;
    }
    update()
})

const update = () => {
    circles.forEach( (circle, i) => {
        if(i < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    // Progress bar state
    progress.style.width = (actives.length -1)  / (circles.length -1) * 100 + '%';
    
    // State for buttons 
    if(currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false
    }
}

