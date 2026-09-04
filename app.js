const grid = document.querySelector('#collectionGrid');

async function loadCollections() {
  try {
    const response = await fetch('collections.json');

    if (!response.ok) {
      throw new Error('Could not load collections.json');
    }

    const collections = await response.json();

    grid.innerHTML = '';

    collections.forEach(collection => {
      const a = document.createElement('a');

      a.className = 'card';

      a.href =
        `viewer.html?pdf=${encodeURIComponent(collection.pdf)}` +
        `&title=${encodeURIComponent(collection.title)}`;

      a.innerHTML = `
        <img
          src="${collection.cover || ''}"
          alt="${collection.title}"
          onerror="this.style.display='none'"
        >

        <div class="card-body">
          <div class="card-title">${collection.title}</div>
          <div class="card-meta">
            ${collection.description || ''}
          </div>
        </div>
      `;

      grid.appendChild(a);
    });

  } catch (error) {
    console.error(error);

    grid.innerHTML = `
      <p class="error">
        Unable to load the notebook collections.
      </p>
    `;
  }
}

loadCollections();
