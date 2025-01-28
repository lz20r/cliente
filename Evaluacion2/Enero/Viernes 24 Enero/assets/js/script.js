window.onload = function () {
    document.querySelector('div').onclick = function (event) {
        event.currentTarget.style.backgroundColor = 'yellow';
        event.target.style.color = 'red' ? event.target.style.
            color = 'black' : event.target.style.color = 'red';

        console.log("Current target: " + event.currentTarget.tagName + "\nTarget: " + event.target.tagName 
            + "\nclientX: " + event.clientX + "\nclientY: " + event.clientY + "\npageX: " + event.pageX
            + "\npageY: " + event.pageY + "\noffsetX: " + event.offsetX + "\noffsetY: " + event.offsetY
            + "\nX: " + event.x + "\nY: " + event.y);
        
        if (event.target.tagName === 'DIV') {         
            event.target.style.backgroundColor = 'green';
        } 
        if (event.target.tagName === 'P') {
            event.target.style.backgroundColor = 'orange';
        }

        if (event.target.tagName === 'H1') {
            event.target.style.backgroundColor = 'purple';
        } 

        if (event.target.tagName === 'BODY') {
            event.target.style.backgroundColor = 'white';
        }
    } 
}