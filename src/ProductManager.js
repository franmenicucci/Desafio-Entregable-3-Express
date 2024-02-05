// ProductManager.js
const fs = require('fs').promises;

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async getProducts() {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      const products = JSON.parse(data);
      return products;
    } catch (error) {
      console.error('Error reading products file:', error);
      throw error;
    }
  }

  async getProductById(productId) {
    const products = await this.getProducts();
    const product = products.find((p) => p.id === productId);
    return product;
  }
}

module.exports = ProductManager;
