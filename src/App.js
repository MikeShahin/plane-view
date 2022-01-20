import './App.css';

class App extends Component {

  render() {
    return (
      <div>
         <BrowserRouter>
         <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);
