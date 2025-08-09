import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `
    <li class="product-card">
      <a href="/product_pages/?product=${product.Id}">
        <img src="${product.Images.PrimaryMedium}" alt="${product.Name}">
        <h2>${product.Brand.Name}</h2>
        <h3>${product.Name}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
      <div class="product-card__actions">
        <button class="btn btn--quickview" data-quickview data-id="${product.Id}" aria-label="Quick view ${product.Name}">
          Quick View
        </button>
      </div>
    </li>
    `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    console.log(list)
    this.products = list;
    this.renderList(list);
    document.querySelector(".title").textContent = 
  this.category.charAt(0).toUpperCase() + this.category.slice(1);
  this.bindQuickView(); 
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);

  }

  bindQuickView() {
    // Event delegation: listen for clicks on any Quick View button
    this.listElement.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-quickview]");
      if (!btn) return;

      e.preventDefault();
      e.stopPropagation();

      const id = btn.getAttribute("data-id");
      const product = this.products?.find(p => String(p.Id) === String(id));
      if (product) this.openModal(product);
    });
  }

  openModal(product) {
    const modal = document.getElementById("quickview-modal");
    const content = modal.querySelector(".modal__content");

    content.innerHTML = `
      <div class="modal__grid">
        <div>
          <img src="${product.Images.PrimarySmall}" alt="${product.Name}"  height="50">
        </div>
        <div>
          <h2 id="qv-title" class="qv-title">${product.Name}</h2>
          <p class="qv-brand">${product.Brand?.Name ?? ""}</p>
          <p class="qv-price"><strong>$${product.FinalPrice}</strong></p>
          ${product.Description ? `<p class="qv-desc">${product.Description}</p>` : ""}
          <div class="qv-actions" style="margin-top: .75rem;">
            <a class="btn" href="/product_pages/?product=${product.Id}">View Product</a>
          </div>
        </div>
      </div>
    `;

    this.showModal(modal);
  }

  showModal(modal) {
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");

  // Only X button closes modal
  modal.querySelector("[data-close]").onclick = () => {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
  };
}
}