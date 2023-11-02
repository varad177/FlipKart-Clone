

import React from 'react'
import './payment.css'
import { Link } from 'react-router-dom'

const Payment = () => {

   

    const moveOncart = () => {
   
        alert("Thanks For Order")
    }



    return (
        <>


            <div style={{marginTop : '2rem'}} className="container">
                <div id="Checkout" className="inline">
                    <h1>( fake )Pay Invoice</h1>
                    <div className="card-row">
                        <span className="visa"></span>
                        <span className="mastercard"></span>
                        <span className="amex"></span>
                        <span className="discover"></span>
                        <h6>please do not enter your real payment information</h6>
                    </div>
                    <form>
                        <div className="form-group">
                            
                        </div>
                        <div className="form-group">
                            <label or="NameOnCard">Name on card</label>
                            <input id="NameOnCard" className="form-control" type="text" maxlength="255"></input>
                        </div>
                        <div className="form-group">
                            <label for="CreditCardNumber">Card number</label>
                            <input id="CreditCardNumber" className="null card-image form-control" type="text"></input>
                        </div>
                        <div className="expiry-date-group form-group">
                            <label for="ExpiryDate">Expiry date</label>
                            <input id="ExpiryDate" className="form-control" type="text" placeholder="MM / YY" maxlength="7"></input>
                        </div>
                        <div className="security-code-group form-group">
                            <label for="SecurityCode">Security code</label>
                            <div className="input-container" >
                                <input id="SecurityCode" className="form-control" type="text" ></input>
                                <i id="cvc" className="fa fa-question-circle"></i>
                            </div>
                            <div className="cvc-preview-container two-card hide">
                                <div className="amex-cvc-preview"></div>
                                <div className="visa-mc-dis-cvc-preview"></div>
                            </div>
                        </div>
                        <div className="zip-code-group form-group">
                            <label for="ZIPCode">ZIP/Postal code</label>
                            <div className="input-container">
                                <input id="ZIPCode" className="form-control" type="text" maxlength="10"></input>
                                <Link tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i className="fa fa-question-circle"></i></Link>
                            </div>
                        </div>
                        <Link to={'/'}>
                            <button onClick={ moveOncart} style={{ margin: '1rem' }} id="PayButton" className="btn btn-block btn-success submit-button" type="submit">
                                <span className="submit-button-lock"></span>
                                <span className="align-middle">Place Order</span>
                            </button>
                        </Link>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Payment
