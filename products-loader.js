document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('products-container');
  const status = document.getElementById('products-status');

  function renderProducts(products) {
    if (!container) return;

    container.innerHTML = '';
    products.forEach((product) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        ${product.title ? `<h2>${product.title}</h2>` : ''}
        ${product.description ? `<p>${product.description}</p>` : ''}
        ${product.link ? `<a href="${product.link}" target="_blank" rel="noopener sponsored" class="product-link">View on Amazon</a>` : ''}
      `;
      container.appendChild(card);
    });
  }

  function showError(message) {
    if (status) {
      status.textContent = message;
    }
  }

  fetch('products.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Could not load products data.');
      }
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data) || !data.length) {
        throw new Error('Products data is empty or invalid.');
      }
      renderProducts(data);
      if (status) {
        status.textContent = 'Products loaded successfully.';
      }
    })
    .catch((error) => {
      console.error(error);
      if (container) {
        container.innerHTML = '<p class="sheet-empty">Unable to load product list.</p>';
      }
      showError(error.message);
    });
});
