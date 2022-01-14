import React from 'react';
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const pageSize = 9;

  const links = [
    { name: 'Home', to: '/' },
    { name: 'Business', to: '/business' },
    { name: 'Health', to: '/health' },
    { name: 'Science', to: '/science' },
    { name: 'Sports', to: '/sports' },
    { name: 'Technology', to: '/technology' },
  ]


  return (
    <>
      <Router>
        <Navbar links={links} />
        <News />
        <Routes>
          <Route exact path={links.to} component={Navbar} />
        </Routes>
      </Router>


      {/* <Router>
        <Navbar links={links} />
        <Routes>
          <Route exact path="/" component={Navbar}>
            <News
              key="general"
              country="in"
              category="general"
            />
          </Route>
          <Route exact path={links.to} component={Navbar}>
            <News
              key="business"
              country="in"
              category="business"
            />
          </Route>
          <Route exact path={links.to} component={Navbar}>
            <News
              key="health"
              country="in"
              category="health"
            />
          </Route>
          <Route exact path={links.to} component={Navbar}>
            <News
              key="science"
              country="in"
              category="science"
            />
          </Route>
          <Route exact path={links.to} component={Navbar}>
            <News
              key="sports"
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path={links.to} component={Navbar}>
            <News
              key="technology"
              country="in"
              category="technology"
            />
          </Route>
        </Routes>
      </Router> */}

    </>
  );
}

export default App;
