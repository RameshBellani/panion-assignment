import React, { Component } from 'react';
import axios from 'axios';
import './FormComponent.css'

class FormComponent extends Component {
  state = {
    country: '',
    bankKey: '',
    bankAccountNumber: '',
    reference: '',
    advancePaid: '',
    tcsApplicable: 'no',
    alternatePayee1: '',
    alternatePayee2: '',
    city: '',
    street: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      country,
      bankKey,
      bankAccountNumber,
      reference,
      advancePaid,
      tcsApplicable,
      alternatePayee1,
      alternatePayee2,
      city,
      street,
    } = this.state;

    try {
      await axios.post('/api/submit-form', {
        country,
        bankKey,
        bankAccountNumber,
        reference,
        advancePaid,
        tcsApplicable,
        alternatePayee1,
        alternatePayee2,
        city,
        street,
      });
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to submit form');
    }
  };

  render() {
    return (
      <div className="p-4">
        <div className="flex space-x-4">
          <a href="/invoice-details" className="text-purple-600 font-semibold">
            Invoice Details
          </a>
          <a href="/action-history" className="text-gray-600">
            Action History
          </a>
        </div>
        <div className="mt-4">
          <form onSubmit={this.handleSubmit}>
            <details open>
              <summary className="font-semibold bg-gray-200 p-2">INVOICE AMOUNT DETAILS</summary>
              <div className="p-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <label className="w">
                      Currency <span className="text-red-600">*</span>:
                    </label>
                    <span className="w">INR</span>
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      Inv Basic Amt <span className="text-red-600">*</span>:
                    </label>
                    <span className="w">15,000.00</span>
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      Inv Tax Amt <span className="text-red-600">*</span>:
                    </label>
                    <span className="w">1,000.00</span>
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      Total Inv Amt [Inclu. of tax] <span className="text-red-600">*</span>:
                    </label>
                    <span className="w">16,000.00</span>
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      Advance Paid <span className="text-red-600">*</span>:
                    </label>
                    <input
                      className="w"
                      name="advancePaid"
                      value={this.state.advancePaid}
                      onChange={this.handleChange}
                      placeholder="0.00"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      TCS Applicable <span className="text-red-600">*</span>:
                    </label>
                    <div className="w flex items-center space-x-2">
                      <label>
                        <input
                          type="radio"
                          name="tcsApplicable"
                          value="yes"
                          checked={this.state.tcsApplicable === 'yes'}
                          onChange={this.handleChange}
                        />{' '}
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="tcsApplicable"
                          value="no"
                          checked={this.state.tcsApplicable === 'no'}
                          onChange={this.handleChange}
                        />{' '}
                        No
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      Net Payable Amt [Exclu. of TDS] <span className="text-red-600">*</span>:
                    </label>
                    <span className="w">16,000.00</span>
                  </div>
                </div>
              </div>
            </details>
            <details className="mt-4">
              <summary className="font-semibold bg-gray-200 p-2">ALTERNATE PAYEE DETAILS</summary>
              <div className="p-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <label className="w">
                      Alternate Payee 1 <span className="text-red-600">*</span>:
                    </label>
                    <input
                      className="w"
                      name="alternatePayee1"
                      value={this.state.alternatePayee1}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      Alternate Payee 2 <span className="text-red-600">*</span>:
                    </label>
                    <input
                      className="w"
                      name="alternatePayee2"
                      value={this.state.alternatePayee2}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      City <span className="text-red-600">*</span>:
                    </label>
                    <input
                      className="w"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      Street <span className="text-red-600">*</span>:
                    </label>
                    <input
                      className="w"
                      name="street"
                      value={this.state.street}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      Country <span className="text-red-600">*</span>:
                    </label>
                    <input
                      className="w"
                      name="country"
                      value={this.state.country}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      Bank Key / IFSC Code <span className="text-red-600">*</span>:
                    </label>
                    <input
                      className="w"
                      name="bankKey"
                      value={this.state.bankKey}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w">
                      Bank Acc No <span className="text-red-600">*</span>:
                    </label>
                    <input
                      className="w"
                      name="bankAccountNumber"
                      value={this.state.bankAccountNumber}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </details>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormComponent;
