'use strict';

const mongoose = require('mongoose');

const storefrontSchema = mongoose.Schema({
  category: {type: String, required: true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  inventoryCount: { type: Number, required: true },
  quantityInCart: { type: Number, required: true },
});

const storefrontModel = mongoose.model('food', storefrontModel);

module.exports = storefrontSchema;
