var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ShoppingList = new Schema({
  listId: { type: Schema.ObjectId },
  title: { type: String, trim: true },
  items: [{
    quantity: { type: Number, min: 1 },
    name: { type: String, trim: true }
  }],
  validUntil: { type: Date },
  createDate: { type: Date }
});