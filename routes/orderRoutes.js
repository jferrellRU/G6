const express = require('express');
const router = express.Router();
const orderHandler = require('../handlers/orderHandler');

router.get('/', orderHandler.getAllOrders);
router.get('/canceled', orderHandler.getCanceledOrders);
router.put('/:id/cancel', orderHandler.cancelOrder);
router.get('/:id/user', orderHandler.getUserName);
router.get('/:id/quantity', orderHandler.getOrderQuantity);
router.get('/:id/total-price', orderHandler.getTotalPrice);
router.get('/:id/status', orderHandler.getOrderStatus);
router.post('/add-product-to-cart', orderHandler.addProductAsOrder);
router.delete('/:id/remove', orderHandler.deleteOrder);
router.put('/:id/complete', orderHandler.completeSpecificOrder);
router.put('/:id/cancel', orderHandler.cancelOrder);
router.put('/:id/increase-quantity', orderHandler.increaseCartQuantity);


module.exports = router;