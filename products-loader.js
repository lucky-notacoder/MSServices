document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('products-container');
  const status = document.getElementById('products-status');

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

  function createPagerCard(totalPages) {
    // Render a pager as a card placed after the product cards
    const pagerCard = document.createElement('article');
    pagerCard.className = 'product-card pager-card';

    const inner = document.createElement('div');
    inner.className = 'product-card-inner';

    const front = document.createElement('div');
    front.className = 'product-card-face product-card-front';
    front.style.display = 'flex';
    front.style.alignItems = 'center';
    front.style.justifyContent = 'center';
    front.style.gap = '14px';

    // Previous button (left arrow)
    const prevBtn = document.createElement('button');
    prevBtn.className = 'product-link pager-button pager-prev';
    prevBtn.type = 'button';
    prevBtn.setAttribute('aria-label', 'Previous page');
    prevBtn.innerHTML = '&#x2190;'; // left arrow

    // Next button (right arrow)
    const nextBtn = document.createElement('button');
    nextBtn.className = 'product-link pager-button pager-next';
    nextBtn.type = 'button';
    nextBtn.setAttribute('aria-label', 'Next page');
    nextBtn.innerHTML = '&#x2192;'; // right arrow

    // Disable when appropriate
    if (currentPage <= 1) prevBtn.disabled = true;
    if (currentPage >= totalPages) nextBtn.disabled = true;

    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage -= 1;
        renderCurrentPage();
        // move focus to first product for keyboard users
        const firstCard = container.querySelector('.product-card');
        if (firstCard) firstCard.focus();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage += 1;
        renderCurrentPage();
        const firstCard = container.querySelector('.product-card');
        if (firstCard) firstCard.focus();
      }
    });

    front.append(prevBtn, nextBtn);

    // Back face is not necessary for pager but keep structure consistent
    const back = document.createElement('div');
    back.className = 'product-card-face product-card-back';
    back.style.display = 'flex';
    back.style.alignItems = 'center';
    back.style.justifyContent = 'center';
    back.style.gap = '14px';

    // Mirror buttons on back so flipping still allows navigation
    const prevBtnBack = prevBtn.cloneNode(true);
    const nextBtnBack = nextBtn.cloneNode(true);
    prevBtnBack.addEventListener('click', () => prevBtn.click());
    nextBtnBack.addEventListener('click', () => nextBtn.click());

    back.append(prevBtnBack, nextBtnBack);

    inner.append(front, back);
    pagerCard.appendChild(inner);
    return pagerCard;
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

    // Only show pager when there is more than one page
    if (totalPages > 1) {
      const pager = createPagerCard(totalPages);
      container.appendChild(pager);
    }

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
      showError(error.message);
    });
});
