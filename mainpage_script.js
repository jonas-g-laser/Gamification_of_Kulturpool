function loadStartPage(){
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    function getSearchQuery() {
        const params = new URLSearchParams(window.location.search);
        return params.get("search");
    }

    const query = getSearchQuery();
    if (query) {
        document.getElementById("searchResult").textContent = `Gesucht: ${query}`;
    } else {
        document.getElementById("searchResult").textContent = "Keine Suche eingegeben";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const progressBar = document.querySelector(".progress");
    const iframe = document.getElementById("webgl");

    let progress = 0;

    const simulateProgress = setInterval(() => {
        if (progress < 80) {
            progress += 10;
            progressBar.style.width = progress + "%";
        }
    }, 300);

    iframe.onload = () => {
        clearInterval(simulateProgress);
        progressBar.style.width = "100%";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    };
});
