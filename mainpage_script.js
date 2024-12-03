function loadStartPage(){
    window.location.href = "index.html";
}

function getSearchQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get("search");
}

function displayImage(query) {
    const imageContainer = document.getElementById("imageResult");
    const image = document.createElement("img");
    image.src = `images/${query}.jpg`;
    image.alt = `Image for ${query}`;
    imageContainer.appendChild(image);

    document.querySelector("main").appendChild(imageContainer);
}

const query = getSearchQuery();
if (query) {
    document.getElementById("searchResult").textContent = `Gesucht: ${query}`;
    //displayImage(query); just testing
} else {
    document.getElementById("searchResult").textContent = "Keine Suche eingegeben";
}

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

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = getSearchQuery();
    const iframe = document.getElementById("webgl");

    if (!searchInput) {
        console.error("Kein Suchbegriff vorhanden.");
        return;
    }

    window.addEventListener("message", (event) => {
        if (event.data.type === "UnityReady") {
            console.log("Unity ist bereit. Nachricht wird gesendet...");
            iframe.contentWindow.postMessage(
                { type: "LoadImage", searchTerm: searchInput },
                "https://jonas-g-laser.github.io"
            );
        }
    });
});
