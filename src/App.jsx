import 'styles/style.css';
import Index from 'pages';
import ShitzuPage from 'pages/shitzu';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/shitzu">
                        <ShitzuPage />
                    </Route>
                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;