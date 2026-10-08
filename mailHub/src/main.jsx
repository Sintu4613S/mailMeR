import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux';
import store from './components/redux/store.js';

const container = document.getElementById('root');

createRoot(container).render(
    <Provider store={store}>
        <App />
    </Provider>
 

)
