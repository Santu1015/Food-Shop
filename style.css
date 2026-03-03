let cart = [];

function addToCart(name, price) {

    let existing = cart.find(item => item.name === name);

    if(existing){
        existing.qty += 1;
    } else {
        cart.push({name, price, qty: 1});
    }

    updateCartCount();
}

function updateCartCount(){
    let count = cart.reduce((sum,item)=> sum + item.qty,0);
    document.getElementById("cart-count").innerText = count;
}

function openCart(){
    document.getElementById("cart-modal").style.display = "block";
    displayCart();
}

function closeCart(){
    document.getElementById("cart-modal").style.display = "none";
}

function displayCart(){
    let container = document.getElementById("cart-items");
    container.innerHTML = "";
    let total = 0;

    cart.forEach(item=>{
        total += item.price * item.qty;
        container.innerHTML += `
            <p>${item.name} x ${item.qty} = ₹${item.price * item.qty}</p>
        `;
    });

    document.getElementById("total").innerText = total;
}

function checkout(){

    let total = cart.reduce((sum,item)=> sum + item.price * item.qty,0);

    if(total == 0){
        alert("Cart is empty!");
        return;
    }

    // 🔥 Replace with your Cashfree Intelliform Link
    let intelliLink = "https://payments.cashfree.com/intelliform/YOUR_LINK";

    window.location.href = intelliLink + "?amount=" + total;
}
