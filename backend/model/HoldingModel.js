const { model } = require('mongoose');
const { holdingSchema } = require('../schemas/HoldingSchema');

const HoldingModel = new model('Holding', holdingSchema);

module.exports = {HoldingModel};