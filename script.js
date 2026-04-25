function loadProducts(category) {
    let products = JSON.parse(localStorage.getItem("products")) || [];

    let container = document.getElementById("products");
    container.innerHTML = "";

    let filtered = products.filter(p => p.category === category);

    filtered.forEach(product => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${product.images[0]}" />
            <h3>${product.name}</h3>
        `;

        div.onclick = () => {
            window.open(`product.html?id=${product.id}`, "_blank");
        };

        container.appendChild(div);
    });
}