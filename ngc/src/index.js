import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';
import registerServiceWorker from './utils/create-react-app/registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
