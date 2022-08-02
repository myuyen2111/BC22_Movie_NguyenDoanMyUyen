import logo from './logo.svg';
import './App.css';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();
function App() {
  return (
   <Router history={history}>
    
   </Router>
  );
}

export default App;
