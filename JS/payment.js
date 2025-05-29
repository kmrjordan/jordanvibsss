document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });

    const formattedTotal = `$${total.toFixed(2)}`;
    const amountInput = document.getElementById('amount');
    if (amountInput) {
      amountInput.value = formattedTotal;
    }
  });