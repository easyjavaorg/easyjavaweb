var mongoose = require('mongoose'), 
	Todo = mongoose.model('Todo');

exports.findAll = function(req, res){
Todo.find({}, function(err, todos) {
    if (err) {
      throw new Error(err);
    }
    res.send(todos);
  });
};

exports.findOne = function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    if (err) {
      throw new Error(err);
    }
    res.send(todo);
  });
};

exports.add = function(req, res) {
  var todo = new Todo(req.body);
  document.save(function(err, todo) {
    if (err) {
      throw new Error(err);
    }
    res.send(todo);
  });
};

exports.update = function(req, res) {
  Todo.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function(err, todo) {
    if (err) {
      throw new Error(err);
    }
    res.send(todo);
  });
};

exports.remove = function(req, res) {
  Todo.findByIdAndRemove(req.params.id, function(err, todo) {
    if (err) {
      throw new Error(err);
    }
    res.send(todo);
  });
};