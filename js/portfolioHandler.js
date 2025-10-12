/**
 * PURPOSE: Implements dynamic loading for portfolio items,
            load items from JSON file describing each project item
            and the associated data (title, description, image, link, etc.)
 */

// Fetch portfolio data from provided JSON file
async function getPortfolioData(t_file_path) {
    try {
        const res = await fetch(t_file_path);

        if (!res.ok) throw new Error(`ERROR: HTTP Status -- ${res.status}`);
        return await res.json();
    } catch (err) {
        console.error("ERROR: Failed to fetch portfolio data -- ", err);
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
        console.error("ERROR: Portfolio container not found in DOM.");
        return;
    }

    const portfolioData = await getPortfolioData("js/data/portfolio_data.json");
    const fragment = document.createDocumentFragment();

    portfolioData.forEach((item) => fragment.appendChild(createPortfolioItem(item)));

    container.appendChild(fragment);
});

