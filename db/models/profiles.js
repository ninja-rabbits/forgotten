const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: function() {
    return this.hasMany('Auth');
  },
  items: function() {
    return this.belongsToMany('Items', 'users_items', 'user_id');
  }
});

module.exports = db.model('Profile', Profile);
