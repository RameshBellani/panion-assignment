import React, { Component } from 'react';
import './App.css'; 
import ImageComponent from './components/ImageComponent';
import FormComponent from './components/FormComponent';
import InvoiceDetails from './components/InvoiceDetails';
import ActionHistory from './components/ActionHistory';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <div className="left">
          <ImageComponent /> 
        </div>
        <div className="right">
          <FormComponent /> 
          <InvoiceDetails /> 
          <ActionHistory /> 
        </div>
      </div>
      <Footer />
      </>
    );
  }
}

export default App;
