import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Login from "../components/Auth/Login"
import Dashboard from "../components/dashboard/Dashboard"
import PrivateRoute from "../components/privateRoute"

const App = () => (
  <Layout>
    <Router>
        <PrivateRoute path="/app/board" component={Dashboard} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)
export default App