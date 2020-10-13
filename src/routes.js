const { Router } = require('express');
const ProductController = require('./controllers/product-controller');

const routes = Router();

routes.get('/product', ProductController.index);
routes.get('/product/:id', ProductController.get);
routes.post('/product', ProductController.store);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.delete);

module.exports = routes;