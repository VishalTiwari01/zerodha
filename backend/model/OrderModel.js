const {model} = require('mongoose');
const orderSchema = require('../schemas/OrderSchema');

const OrderModel = new model('Order', orderSchema);

module.exports = {OrderModel}