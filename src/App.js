import React, { Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'

// 懒加载
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))

function App() {
  return (
    <div className="App">
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
            {/* exact,这个属性的默认值是 false，所以内部采用是模糊匹配，只要匹配到一个就不会往后再匹配。 */}

              <Route path='/about'  component={About} />
              <Route path='/' exact component={Home} />

            </Suspense>
        </Switch>
    </div>
  );
}
export default App;
