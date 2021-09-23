exports.up = function (knex) {
    return knex.schema
      .createTable("recipes", (tbl) => {
        tbl.increments("recipe_id");
        tbl.string("recipe_name", 128).notNullable().unique();
        tbl.timestamp("created_at").defaultTo(knex.fn.now());
      })
      .createTable("ingredients", (tbl) => {
        tbl.increments("ingr_id");
        tbl.string("ingr_name", 128).notNullable();
      })
      .createTable("steps", (table) => {
        table.increments("step_id");
        table.string("step_instructions", 150).notNullable();
        table.integer("step_order").notNullable();
        table
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipe_id")
          .inTable("recipe")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
      .createTable("step_ingredents", (tbl) => {
        tbl.increments("strin_id");
        tbl
          .integer("step_id")
          .unsigned()
          .notNullable()
          .references("step_id")
          .inTable("steps")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
       tbl.float("quanity")
      });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("step_ingredents")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
  };
  