import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store';
import { Provider } from 'react-redux';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Form from './components/Form';
import ShowContact from './components/FormList';


store.subscribe(()=>console.log(store.getState()));

function App() {
  return (
    <>
    <Navbar />
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route path="/ShowContact" exact component={ShowContact} />
        <Route path="/ContactForm" exact component={Form} />
        <Route path="/edit/:id" exact component={Form} />

      </Switch>
      
      </BrowserRouter>
      
    </Provider>
    
    </>
  );
}

export default App;
