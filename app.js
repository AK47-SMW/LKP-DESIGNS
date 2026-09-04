const collections=[
  {title:'2026 Collection',description:'Latest hardcover notebook designs.',count:'Add your PDF',pdf:'collections/2026.pdf',cover:'assets/collection-2026.jpg'},
  {title:'Floral Collection',description:'Botanical and floral cover concepts.',count:'Add your PDF',pdf:'collections/floral.pdf',cover:'assets/collection-floral.jpg'},
  {title:'Corporate Collection',description:'Clean, professional notebook covers.',count:'Add your PDF',pdf:'collections/corporate.pdf',cover:'assets/collection-corporate.jpg'}
];
const grid=document.querySelector('#collectionGrid');
collections.forEach(c=>{const a=document.createElement('a');a.className='card';a.href=`viewer.html?pdf=${encodeURIComponent(c.pdf)}&title=${encodeURIComponent(c.title)}`;a.innerHTML=`<img src="${c.cover}" alt="${c.title}" onerror="this.style.display='none'"><div class="card-body"><div class="card-title">${c.title}</div><div class="card-meta">${c.description}</div></div>`;grid.appendChild(a)});
