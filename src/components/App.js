import React from 'react';

import './App.scss';

const App = () => {
    return (
        <div className="app-container">
            <h1 className="app-header">React Boilerplate</h1>
            <p>Project contains:</p>
            <ul>
                <li>Webpack</li>
                <li>React</li>
                <li>Prettier</li>
                <li>Eslint</li>
                <li>Babel</li>
                <li>Autoprefixer</li>
                <li>Jest &amp; Enzyme</li>
            </ul>
        </div>
    );
};

export default App;
