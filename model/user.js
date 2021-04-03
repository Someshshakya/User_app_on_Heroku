const { Model } = require('objection')
const knex = require('../config')
Model.knex(knex);


// To check unique email id
class Users extends (Model) {
  static get tableName() {
      return 'users';
  }
  static get jsonSchema() {
      return {
          properties: {
              id: { type: 'integer' },
              first_name: { type: 'string'},
              last_name: { type: 'string' },
              email: { type: 'string' }
          }
      }
  }
}
module.exports = Users;