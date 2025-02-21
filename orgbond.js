// Function to display chemical structure
document.addEventListener("DOMContentLoaded", function () {
    const examples = document.querySelectorAll(".example");
    const structureDiv = document.getElementById("structure");

    examples.forEach((example) => {
        example.addEventListener("click", function () {
            const imageSrc = this.getAttribute("data-src");
            const compoundName = this.getAttribute("data-name");

            structureDiv.innerHTML = `
                <h2>${compoundName}</h2>
                <img src="${imageSrc}" alt="${compoundName} Structure">
            `;
        });
    });
});
