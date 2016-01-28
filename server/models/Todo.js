var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
    title: String,
    description: String,
    status: Number,
    priority: String
  }, 

  {
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: function(doc, ret, options) {
      ret.id = ret._id.toHexString();
      delete ret._id;
    }
  },
  
  toObject: {
    virtuals: true
  }
});

mongoose.model('Todo', Todo);
