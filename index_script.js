document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("search");

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = searchInput.value.trim();

        if (query) {
            console.log("Suchbegriff:", query);
            window.location.href = "mainpage.html?search=" + encodeURIComponent(query);
        } else {
            alert("Bitte geben Sie einen Suchbegriff ein.");
        }
    });
});
