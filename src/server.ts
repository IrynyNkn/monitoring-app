import App from './infrastructure/webserver/server.js'
import AuthRoute from './interface/routes/auth.route.js'

export const app = new App({
  plugins: [],
  routes: [AuthRoute],
})

app.listen()
