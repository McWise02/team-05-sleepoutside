import { renderListWithTemplate } from './utils.mjs';

function productCardTemplate(product) {
    console.log("Rendering product:", product.Name);
    let discountHTML = "";

    if (product.FinalPrice < product.SuggestedRetailPrice) {
        const discountAmount = (product.SuggestedRetailPrice - product.FinalPrice).toFixed(2);
        discountHTML = `
        <p class="product-card__original-price">$${product.SuggestedRetailPrice}</p>
        <span class="discount-badge">Save $${discountAmount}</span>
      `;
    }
    return `<li class="product-card">
        <a href="product_pages/index.html?product=${product.Id}">
        <img src="${product.Image}" alt="Image of ${product.Name}">
        <h2>${product.Brand.Name}</h2>
        <h3>${product.Name}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
        ${discountHTML}
      </a>
      </li>`;
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    renderList(list) {
        console.log("Rendering list with", list.length, "items");

        renderListWithTemplate(productCardTemplate, this.listElement, list);

    }
}