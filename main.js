let nums = document.querySelectorAll(".state .price");
let section = document.querySelector(".state");
let start = false;


window.onscroll = function() {
     if(window.scrollY >= section.offsetTop) {

        if(!start) {
            nums.forEach((num) => startCount(num));
        } start = true;
     }
}

function startCount(elemnt) {
    let goal = elemnt.dataset.goal;
    let count = setInterval(() => {
        elemnt.textContent++

        if(elemnt.textContent == goal) {
           clearInterval(count)
        }
    }, 10 / goal);
}
