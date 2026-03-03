body {
    font-family: Arial;
    margin: 0;
    background: #fff5eb;
}

header {
    background: #ff6b6b;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
}

.products {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 30px;
}

.product {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #ddd;
    text-align: center;
}

button {
    background: #ff6b6b;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.cart-modal {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}

.cart-box {
    background: white;
    padding: 20px;
    margin: 100px auto;
    width: 300px;
}
