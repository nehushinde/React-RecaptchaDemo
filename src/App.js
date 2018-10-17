import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import './App.css';

class App extends Component {
  state = {
    isVerified : false
  }

  recaptchaLoaded = () => {
    console.log('captcha loaded')
  }

  handleSubscribe = ( ) => {
    if (this.state.isVerified) {
      alert('You have successfully subscribed!')
    } else {
      alert('Please verify that you are human!')
    }
  } 

  verifyCallback = (response) => {
    if(response) {
      this.setState({
        isVerified: true
      })
    }
  }

  render() {
    return (
      <div className="App">
          <div>
            <input type="text" placeholder="mail-id" className="Input"></input>
            {/* sitekey: go to https://www.google.com/recaptcha/admin#list 
              add in domains: localhost for test application and register 
              after reg you will get sitekey.
            */}
            <Recaptcha
                sitekey="6LdIF3UUAAAAAPBCHZv1_awjJsQosJ0O4_kSkxvK"
                render="explicit"
                verifyCallback={this.verifyCallback}
                onloadCallback={this.recaptchaLoaded}
              />
            <div onClick={this.handleSubscribe}>Subscribe</div>
          </div>
      </div>
    );
  }
}

export default App;
