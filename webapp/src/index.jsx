import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import "shards-ui/dist/css/shards.min.css"
//import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
