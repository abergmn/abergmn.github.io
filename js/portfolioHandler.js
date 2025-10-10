/*
    GOAL: implement dynamic loading for portfolio items,
          load items from JSON file describing each file
          and the associated data (title, description, image, link, etc.)
*/

// Fetch portfolio data from JSON
async function getPortfolioData() {
    try {
        const res = await fetch("js/portfolio_data.json");

        if (!res.ok) throw new Error(`ERROR: HTTP Status -- ${res.status}`);
        return await res.json();
    } catch (err) {
        console.error("Failed to fetch portfolio data:", err);
        return [];
    }
}

function createPortfolioItem({ image, title, description, link }) {
    const container = document.createElement("div");
    container.className = "portfolio-item";

    container.innerHTML = `
        <img src="${image}" alt="${title}">
        <h3>${title}</h3>
        <p>${description}</p>
        ${link ? `<a href="${link}" target="_blank">View Project</a>` : ""}`;
    return container;
}

// On DOM load, fetch and display portfolio items
document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("portfolio-container");

    if (!container) {
        console.error("Portfolio container not found.");
        return;
    }

    const portfolioData = await getPortfolioData();
    const fragment = document.createDocumentFragment();

    portfolioData.forEach((item) => {
        fragment.appendChild(createPortfolioItem(item));
    });

    container.appendChild(fragment);
});

