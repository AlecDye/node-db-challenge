exports.up = function (knex) {
  return (
    knex.schema
      // "projects" table
      .createTable("projects", (tbl) => {
        tbl.integer("id").primary();
        tbl.string("p_name").notNullable();
        tbl.string("p_desc");
        tbl.boolean("p_completed").notNullable().defaultTo(false);
      })
      // "tasks" table
      .createTable("tasks", (tbl) => {
        tbl.integer("id").primary();
        tbl.string("t_desc").notNullable();
        tbl.string("t_notes");
        tbl.boolean("t_completed").notNullable().defaultTo(false);
        // Foreign Key -> "projects"
        tbl
          .integer("project_id")
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
      // "resources" table
      .createTable("resources", (tbl) => {
        tbl.integer("id").primary();
        tbl.string("item").notNullable();
        tbl.string("r_desc");
      })
      // "project_resources" junction table
      .createTable("project_resources", (tbl) => {
        tbl.integer("id").primary();
        // Foreign Keys -> "projects", "resources"
        tbl
          .integer("project_id")
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .integer("resources_id")
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project_resources");
  knex.schema.dropTableIfExists("resources");
  knex.schema.dropTableIfExists("tasks");
  knex.schema.dropTableIfExists("projects");
};
