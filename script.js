// Image change
const thumbnails = document.querySelectorAll(".thumbnails img");
const mainImage = document.getElementById("main-image");

thumbnails.forEach(img => {
    img.addEventListener("click", () => {
        mainImage.src = img.src;
    });
});

// Quantity
const quantity = document.getElementById("quantity");

document.getElementById("increase").onclick = () => {
    quantity.value++;
};

document.getElementById("decrease").onclick = () => {
    if(quantity.value > 1){
        quantity.value--;
    }
};

// Add to cart
document.getElementById("add-cart").onclick = () => {
    alert(`Added ${quantity.value} item(s) to cart 🛒`);
};

// Search
document.getElementById("search-btn").onclick = () => {
    let value = document.querySelector(".search-bar input").value;
    alert("Searching for: " + value);
};