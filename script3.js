const sesionLink = document.querySelector("#LastSection");

sesionLink.addEventListener("click", (e) => {
    e.preventDefault(); 

    const lastSection3 = document.querySelector(".LastSection");
    const sectionPosition3 = lastSection3.getBoundingClientRect().top; 


    window.scrollBy({
        top: sectionPosition3 - 200, 
        behavior: "smooth" 
    });
});





