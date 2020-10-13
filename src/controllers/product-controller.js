const Product = require('../models/product');

module.exports = {
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },

  async get(req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);

    return res.json(product);
  },

  async store(req, res) {
    console.log(req.body)
    const { name, sku, price, quantity } = req.body;

    const product = await Product.create({
        name,
        sku,
        price,
        quantity
    });

    return res.json(product);
  },

  async update(req, res) {
    let { quantity } = req.body;
    const { id } = req.params;
    
    const product = await Product.findById(id);

    await product.updateOne({ quantity });
    const updated = await Product.findById(id);

    return res.json(updated);
  },

  async delete(req, res) {
    await Product.deleteOne({ _id: req.params.id});
    return res.json().status(204);
  }
}