import 'styles/style.css';
import Index from 'pages';
import Layout from 'layouts/layout';
import ShitzuPage from 'pages/shitzu';
import BorderColliePage from 'pages/borderCollie';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Switch>
                            <Route path="/shitzu">
                                <ShitzuPage />
                            </Route>
                            <Route path="/bordercollie">
                                <BorderColliePage />
                            </Route>
                            <Route path="/">
                                <Index />
                            </Route>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;