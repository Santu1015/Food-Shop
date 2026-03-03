let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    document.getElementById("cart-count").innerText = cart.length;
    alert(name + " added to cart!");
}

function viewCart() {
    document.getElementById("cart-modal").style.display = "block";
    let list = document.getElementById("cart-items");
    list.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item.name + " - ₹" + item.price;
        list.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function checkout() {
    alert("Redirecting to Payment Gateway...");

    // 👉 Replace this with your Payment Gateway Link
    window.location.href = "https://your-payment-link.com";
}
