const counter = document.querySelector(".counter");
const target = +counter.getAttribute("data-target");

let count = 0;

const updateCounter = () => {
    const increment = target / 200;

    if(count < target){
        count += increment;
        counter.innerText = Math.floor(count);
        requestAnimationFrame(updateCounter);
    } else {
        counter.innerText = target.toLocaleString() + "+";
    }
};

updateCounter();
