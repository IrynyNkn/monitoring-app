export const up = pgm => {
  pgm.createTable('user', {
    id: { type: 'uuid', primaryKey: true },
    email: { type: 'varchar(255)', notNull: true, unique: true },
    passwordHash: { type: 'text', notNull: true },
  })
  pgm.createTable('http_ping_config', {
    id: { type: 'uuid', primaryKey: true },
    userId: {
      type: 'uuid',
      notNull: true,
      references: '"user"',
      onDelete: 'cascade',
    },
    endpointUrl: { type: 'varchar(255)', notNull: true },
    checkInterval: { type: 'integer', notNull: true },
    isPaused: { type: 'boolean', default: false },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  })
  pgm.createTable('icmp_ping_config', {
    id: { type: 'uuid', primaryKey: true },
    userId: {
      type: 'uuid',
      notNull: true,
      references: '"user"',
      onDelete: 'cascade',
    },
    hostname: { type: 'varchar(255)', notNull: true },
    checkInterval: { type: 'integer', notNull: true },
    isPaused: { type: 'boolean', default: false },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  })
  pgm.createTable('kube_metrics_config', {
    id: { type: 'uuid', primaryKey: true },
    userId: {
      type: 'uuid',
      notNull: true,
      references: '"user"',
      onDelete: 'cascade',
    },
    checkInterval: { type: 'integer', notNull: true },
  })
  pgm.createTable('alert', {
    id: { type: 'uuid', primaryKey: true },
    userId: {
      type: 'uuid',
      notNull: true,
      references: '"user"',
      onDelete: 'cascade',
    },
    email: { type: 'varchar(255)', notNull: true },
    alertGroup: { type: 'varchar(255)', notNull: true },
    alertType: { type: 'varchar(255)', notNull: true },
  })
}
