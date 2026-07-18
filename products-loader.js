document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('products-container');
  const status = document.getElementById('products-status');
  const pagination = document.getElementById('products-pagination');

  // Pagination settings
  const PAGE_SIZE = 9;
  let productsData = [];
  let currentPage = 1;

  function createProductCard(product) {
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
    return card;
  }

  function changePage(page) {
    currentPage = page;
    renderCurrentPage();
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderPagination(totalPages) {
    if (!pagination) return;
    pagination.replaceChildren();
    pagination.hidden = totalPages <= 1;
    if (totalPages <= 1) return;

    const previous = document.createElement('button');
    previous.type = 'button';
    previous.className = 'pagination-button';
    previous.textContent = 'Previous';
    previous.disabled = currentPage === 1;
    previous.addEventListener('click', () => changePage(currentPage - 1));

    const pageStatus = document.createElement('span');
    pageStatus.className = 'pagination-status';
    pageStatus.setAttribute('aria-live', 'polite');
    pageStatus.textContent = `Page ${currentPage} of ${totalPages}`;

    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'pagination-button';
    next.textContent = 'Next';
    next.disabled = currentPage === totalPages;
    next.addEventListener('click', () => changePage(currentPage + 1));

    pagination.append(previous, pageStatus, next);
  }

  function renderCurrentPage() {
    if (!container) return;
    container.innerHTML = '';

    const totalItems = productsData.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));

    // clamp current page
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const pageItems = productsData.slice(start, end);

    if (!pageItems.length) {
      container.innerHTML = '<p class="sheet-empty">No products to display.</p>';
      return;
    }

    pageItems.forEach((p) => container.appendChild(createProductCard(p)));

    renderPagination(totalPages);

    // clear status text
    if (status) status.textContent = '';
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
      productsData = data;
      currentPage = 1;
      renderCurrentPage();
    })
    .catch((error) => {
      console.error(error);
      if (container) {
        container.innerHTML = '<p class="sheet-empty">Unable to load product list.</p>';
      }
      if (pagination) pagination.hidden = true;
      showError(error.message);
    });
});
