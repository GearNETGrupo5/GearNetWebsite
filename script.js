const iniciolink = document.querySelector("#inicio");

iniciolink.addEventListener("click", (e) => {
    e.preventDefault(); 

    const iniciosection = document.querySelector(".main");
    const sectionPosition2 = iniciosection.getBoundingClientRect().top; 


    window.scrollBy({
        top: sectionPosition2 - 200, 
        behavior: "smooth" 
    });
});



