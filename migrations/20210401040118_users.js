
exports.up = async function(knex) {
    await knex.schema.createTable("users",(t)=>{
        t.increments();
        t.string("first_name").notNull()
        t.string("last_name").notNull();
        t.string("email").notNull().unique();;
    })
   };
   exports.down = async function(knex) {
     await knex.schema.dropTableIfExists('users');
   };
   