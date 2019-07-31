import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
// import OCR from "./Pages/OCR";
import Login from "./Pages/Login"
import fire from "./config/fire"
import "./App.css"

class App extends Component { 
 
    state = {
      user:null,
      email:"",
      password:"",
    }
    // this.authListener = this.authListener.bind(this);
    // this.handleSumbit = this.handleSumbit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  
  // componentDidMount() {
  //   this.authListener();
  // }
  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     // if (user) {
  //     //   this.setState({ user });
  //     // } else {
  //     //   this.setState({ user: null });
  //     // }
  //   });
  // }

handleChange(e) {
  this.setState({[e.target.name]: e.target.value})
}

handleSumbit(e) {
    e.preventDefault();
    console.log(this.state)

    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(res => {
      console.log(res)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
}
    render(){
      let routes;
      if(this.state.user){
        routes=(
        <Switch>
            {/* <Route exact path="/home" component={Home} /> */}
            {/* <Route exact path="/OCR" component={OCR} /> */}
            <Redirect from="/login" to="/admin"/>
            <Route exact path="/admin" component={Admin} />
            {/* <Route path="/login" component={Login} />  */}
            <Route exact path="/" component={Home} />
        </Switch>
        )
      }else {
        routes=(
          <Switch>
              <Redirect from="/" to="/login"/>
              <Route path="/login" render={(props) => <Login {...props} 
              handleSumbit={this.handleSumbit} 
              handleChange={this.handleChange} 
              email={this.state.email}
              password={this.state.password}/>} 
              />
              {/* <Redirect to="/login" />     */}
          </Switch>
          )
      }
      return (
        <div className="App">
         {routes}
        </div>
    );
  }
}

export default App;
