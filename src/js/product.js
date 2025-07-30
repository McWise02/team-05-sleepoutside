import { getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import Product from "./ProductDetails.mjs";
import { loadHeaderFooter }  from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices("tents");
const productID = getParam("product");
console.log("Product ID from URL:", productID);
const product = new Product(productID, dataSource);
product.init();
console.log(product);
