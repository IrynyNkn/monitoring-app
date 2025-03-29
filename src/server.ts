import App from './infrastructure/webserver/server.js'

// plugins
import AuthPlugin from './infrastructure/plugins/auth.plugin.js'
import AccountPlugin from './infrastructure/plugins/account.plugin.js'

// routes
import AuthRoute from './interface/routes/auth.route.js'

export const app = new App({
  plugins: [AuthPlugin, AccountPlugin],
  routes: [AuthRoute],
})

app.listen()
