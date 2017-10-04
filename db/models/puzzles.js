const db = require('../');

const Puzzles = db.Model.extend({
  tableName: 'puzzles'
});


module.exports = db.model('Puzzles', Puzzles);
