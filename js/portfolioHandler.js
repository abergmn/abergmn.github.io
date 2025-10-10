/*
    GOAL: implement dynamic loading for portfolio items,
          load items from JSON file describing each file
          and the associated data (title, description, image, link, etc.)
*/



async function getPortfolioData() {
    try {
        const res = await fetch("js/portfolio_data.json");

        if (!res.ok) {
            throw new Error(`ERROR: HTTP status -- ${res.status}`);
        }

        return await res.json();
    } catch (err) {
        console.error("ERROR: Failed to fetcch portfolio data:", err);
        return [];
    }
}

function createPortfolioItem(item) {
    const container = document.createElement("div");
    container.className = "portfolio-item";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    container.appendChild(img);

    const title = document.createElement("h3");
    title.textContent = item.title;
    container.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = item.description;
    container.appendChild(desc);

    if (item.link) {
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = "View Project";
        link.target = "_blank";
        container.appendChild(link);
    }

    return container;
}


// On DOM load, fetch portfolio data and populate the page
document.addEventListener("DOMContentLoaded", async () => {
    const portfolioContainer = document.getElementById("portfolio-container");
    if (!portfolioContainer) {
        console.error("ERROR: Portfolio container not found!");
        return;
    }

    const portfolioData = await getPortfolioData();
    portfolioData.forEach((item) => {
        const portfolioItem = createPortfolioItem(item);
        portfolioContainer.appendChild(portfolioItem);
    });
});
