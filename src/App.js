import DataFetching from "./DataFetching"
import Navbar from "./Navbar"
import NewPost from "./NewPost"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <>
          <Switch>
            <Route exact path="/posts">
              <DataFetching />
            </Route>
            <Route exact path="/create">
              <NewPost />
            </Route>
          </Switch>
        </>
      </div>
    </Router>
  )
  
}

export default App;
