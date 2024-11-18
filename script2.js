const footerlink = document.querySelector("#forminicio");

footerlink.addEventListener("click", (e) => {
    e.preventDefault(); 

    const iniciosection2 = document.querySelector(".footer");
    const sectionPosition2 = iniciosection2.getBoundingClientRect().top; 


    window.scrollBy({
        top: sectionPosition2 - 200, 
        behavior: "smooth" 
    });
});



