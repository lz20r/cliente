window.onload = function () {
    const h1 = document.querySelector('h1');
    const element = document.querySelector('div');
    const p = document.querySelector('p');
    let up = getComputedStyle(p).top;   
    let left = getComputedStyle(p).left;
    
    h1.addEventListener('click', function () {
        element.style.color = 'red';
        element.style.backgroundColor = 'yellow';
    });

    element.addEventListener('click', function () { 
        element.style.color = 'black';
        element.style.backgroundColor = 'white';
    });

    p.addEventListener('click', function () {        
        up = getComputedStyle(p).top;
        p.style.top = parseInt(up) + 10 + 'px';
        p.style.left = parseInt(getComputedStyle(p).left) + 10 + 'px';
    });
};