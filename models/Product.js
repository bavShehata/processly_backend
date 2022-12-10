const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: {
    type: 'String',
    required: true
  },
  price: {
    type: 'Number',
    required: true
  },
  imgUrl: {
    type: 'String'
  },
  sizes: {
    type: 'String'
  }
});

// the first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// therefore, in this case, the model we create will be mapped to the "products" collection.
const ProductModel = model('product', ProductSchema);

module.exports = ProductModel;
