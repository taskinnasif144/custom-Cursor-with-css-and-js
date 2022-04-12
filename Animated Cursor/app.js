const cursor = document.querySelector('.cursor');


document.addEventListener("mousemove", e => {

    cursor.setAttribute("style", "top:" + (e.pageY - 15)+"px; left:" + (e.pageX-15) + "px;");
  
});


document.addEventListener('click',(e) => {
    cursor.classList.add("expand");

    setTimeout(
        () => {
            cursor.classList.remove('expand')
        }, 500
    )
})