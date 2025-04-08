import App from './infrastructure/webserver/server.js'

// db
import PostgresPlugin from './infrastructure/plugins/postgres.plugin.js'

// plugins
import AuthPlugin from './infrastructure/plugins/auth.plugin.js'
import AccountPlugin from './infrastructure/plugins/account.plugin.js'
import PgClientPlugin from './infrastructure/plugins/pgClient.plugin.js'

// routes
import AuthRoute from './interface/routes/auth.route.js'

export const app = new App({
  plugins: [PostgresPlugin, PgClientPlugin, AuthPlugin, AccountPlugin],
  routes: [AuthRoute],
})

app.listen()
