function loadStartPage() {
  window.location.href = "index.html";
}

function getSearchQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("search");
}

document.addEventListener("DOMContentLoaded", () => {
  const mainpage_searchForm = document.getElementById("mainpage-searchForm");
  const mainpage_searchInput = document.getElementById("mainpage-searchInput");

  mainpage_searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = mainpage_searchInput.value.trim().toLowerCase();

    if (query) {
      console.log("Suchbegriff:", query);
      window.location.href =
        "mainpage.html?search=" + encodeURIComponent(query);
    } else {
      alert("Bitte geben Sie einen Suchbegriff ein.");
    }
  });
});

const query = getSearchQuery();
if (query) {
  document.getElementById("mainpage-searchInput").placeholder =
    `Gesucht: ${query}`;
} else {
  document.getElementById("mainpage-searchInput").placeholder =
    "Keine Suche eingegeben";
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
  }, 100);

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
        "https://jonas-g-laser.github.io",
      );
    }
  });
});

const toggleButton = document.getElementById("iframe-toggle-button");
const iframeContainer = document.querySelector(".iframeContainer");

toggleButton.addEventListener("click", function () {
  if (
    iframeContainer.style.display === "none" ||
    iframeContainer.style.display === ""
  ) {
    iframeContainer.style.display = "block";
    toggleButton.textContent = "Virtuelles Museum ausblenden";
  } else {
    iframeContainer.style.display = "none";
    toggleButton.textContent = "Virtuelles Museum anzeigen";
  }
});
