var rest = require('../server/controllers/rest');

module.exports = function(app){

  // find all songs route
  app.get('/todos', rest.findAll);
  
  // find one song route
  app.get('/todos/:id', rest.findOne);
  
  // Add song route
  app.post('/todos', rest.add);
  
  // Update song route
  app.put('/todos/:id', rest.update);
  
  // Delete song route
  app.del('/todos/:id', rest.remove);
};