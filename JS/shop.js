async function fetchMoreProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=100');
      const products = await response.json();

      const container = document.getElementById('dynamic-products-container');

      products.forEach(product => {
        const productHTML = `
          <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl" data-aos="fade-up">
            <div class="w-full aspect-[4/3] overflow-hidden">
              <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-4">
              <h4 class="text-lg font-semibold">${product.title}</h4>
              <p class="text-gray-600">₹${product.price.toFixed(2)}</p>
              <button
                class="mt-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300 ease-in-out"
                onclick='addToCart({"id": "${product.id}", "name": "${product.title}", "price": ${product.price}})'>
                Add to Cart
              </button>
            </div>
          </div>
        `;
        container.insertAdjacentHTML('beforeend', productHTML);
      });

      AOS.refresh(); // Refresh animations for new elements
    } catch (error) {
      console.error('Failed to fetch dynamic products:', error);
    }
  }

  // Init AOS and fetch products
  document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    fetchMoreProducts();
  });