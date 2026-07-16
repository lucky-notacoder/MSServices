document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('products-container');
  const status = document.getElementById('products-status');

  function renderProducts(products) {
    if (!container) return;

    container.innerHTML = '';
    products.forEach((product) => {
      const card = document.createElement('article');
      card.className = 'product-card';

      const inner = document.createElement('div');
      inner.className = 'product-card-inner';

      const front = document.createElement('div');
      front.className = 'product-card-face product-card-front';

      if (product.badge) {
        const badge = document.createElement('span');
        badge.className = 'product-badge';
        badge.textContent = product.badge;
        front.appendChild(badge);
      }

      if (product.title) {
        const title = document.createElement('h2');
        title.textContent = product.title;
        front.appendChild(title);
      }

      const hint = document.createElement('p');
      hint.className = 'product-hint';
      hint.textContent = 'Hover to view details';
      front.appendChild(hint);

      const back = document.createElement('div');
      back.className = 'product-card-face product-card-back';

      if (product.title) {
        const backTitle = document.createElement('p');
        backTitle.className = 'product-back-title';
        backTitle.textContent = product.title;
        back.appendChild(backTitle);
      }

      if (product.description) {
        const description = document.createElement('p');
        description.textContent = product.description;
        back.appendChild(description);
      }

      if (product.link) {
        const link = document.createElement('a');
        link.href = product.link;
        link.target = '_blank';
        link.rel = 'noopener sponsored';
        link.className = 'product-link';
        link.textContent = 'View on Amazon';
        back.appendChild(link);
      }

      inner.append(front, back);
      card.appendChild(inner);
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
        status.textContent = '';
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
