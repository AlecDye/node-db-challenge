exports.up = function (knex) {
  return (
    knex.schema
      // Projects table
      .createTable("projects", (tbl) => {
        tbl.integer("id").primary();
        tbl.string("project_title").notNullable().unique();
        tbl.string("project_desc");
        tbl.boolean("project_completed").notNullable().defaultTo(false);
      })
      // Tasks table
      .createTable("tasks", (tbl) => {
        tbl.integer("id").primary();
        tbl.string("task_desc").notNullable().unique();
        tbl.string("task_notes");
        tbl.boolean("task_completed").notNullable().defaultTo(false);
        // Foreign key (projects)
        tbl
          .integer("project_id")
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
      // Resources table
      .createTable("resources", (tbl) => {
        tbl.integer("id").primary();
        tbl.string("resource_name").notNullable().unique();
        tbl.string("resource_desc");
      })
      // Project to Resource junction table
      .createTable("project_resources", (tbl) => {
        tbl.integer("id").primary();
        // Foreign keys (project & resources)
        tbl
          .integer("project_id")
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .integer("resource_id")
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
