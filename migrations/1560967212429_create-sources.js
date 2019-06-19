exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("sources", {
      id: "id",
      token: { type: "varchar", notNull: true },
      kind: { type: "varchar", notNull: true },
      createdAt: { type: 'datetime', notNull: true, default: 'now()' },
      updatedAt: { type: 'datetime', notNull: true, default: 'now()' }
  })
};

exports.down = (pgm) => {
    pgm.dropTable("sources", {})
};
