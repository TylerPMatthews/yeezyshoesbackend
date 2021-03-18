exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable();
      users.string("password", 200).notNullable();
      users.string("email", 320).notNullable();
      users.boolean("account_type").notNullable().defaultTo(0);
      users.timestamps(false, true);
    })
    .createTable("customers", (customer) => {
      customer.increments("customer_id");
      customer.string("customer_first", 200).notNullable();
      customer.string("customer_last", 200).notNullable();
      customer.string("customer_street", 200).notNullable();
      customer.string("customer_city", 200).notNullable();
      customer.string("customer_state", 200).notNullable();
      customer.string("customer_zip", 200).notNullable();
      customer
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("RESTRICT");
    })
    .createTable("orders", (order) => {
      order.increments("order_id");
      order.integer("order_total").notNullable();
      order.specificType("order_item_names", "text ARRAY").notNullable();
      order
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onDelete("RESTRICT");
    })
    .createTable("order_final", (order) => {
      order.increments("order_final_id");
      order
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("RESTRICT");
      order
        .integer("customer_id")
        .unsigned()
        .notNullable()
        .references("customer_id")
        .inTable("customers")
        .onDelete("RESTRICT");
      order
        .integer("order_id")
        .unsigned()
        .notNullable()
        .references("order_id")
        .inTable("orders")
        .onDelete("RESTRICT");
    })
    .createTable("yeezys", (yeezy) => {
      yeezy.increments("yeezy_id");
      yeezy.string("yeezy_title", 200).notNullable().unique();
      yeezy.string("yeezy_gender", 200).notNullable();
      yeezy.specificType("yeezy_img", "text ARRAY");
      yeezy.text("yeezy_description").notNullable();
      yeezy.specificType("yeezy_size", "text ARRAY").notNullable();
      yeezy.integer("yeezy_price").notNullable();
      yeezy.integer("count").notNullable().defaultTo(0);
      yeezy.boolean("inCart").notNullable().defaultTo(0);
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("customers")
    .dropTableIfExists("orders")
    .dropTableIfExists("order_final")
    .dropTableIfExists("yeezys");
};
