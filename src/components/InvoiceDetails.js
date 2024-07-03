import React, { Component } from 'react';
import axios from 'axios';

class InvoiceDetails extends Component {
  state = {
    invoiceDetails: null,
  };

  async componentDidMount() {
    try {
      const response = await axios.get('/api/invoice-details');
      this.setState({ invoiceDetails: response.data });
    } catch (error) {
      console.error('Error fetching invoice details', error);
    }
  }

  render() {
    const { invoiceDetails } = this.state;
    return (
      <div>
        {invoiceDetails ? (
          <div>
            <p>Currency: {invoiceDetails.currency}</p>
            <p>Amount: {invoiceDetails.amount}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}

export default InvoiceDetails;
