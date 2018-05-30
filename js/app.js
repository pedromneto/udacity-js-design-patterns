const showData = (val) => {
    document.querySelector("#quantCliques").innerText = val;
};

window.onload = () => {
    
    window.catClicked = 0;

    document.querySelector(".imagem__animal").
    addEventListener("click", (e) => {

        window.catClicked++;
        showData(window.catClicked);
    });
};