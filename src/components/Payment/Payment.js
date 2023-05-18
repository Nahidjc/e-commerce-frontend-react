import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useState } from 'react';
const Payment = () => {

    const [name, setName] = useState("Nahid");
    const [credit, setCredit] = useState(1000);
    // const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            "name": name,
            "total_amount": credit,
            "phone": "01910125428",
            "doctor Name": "Ashraful Islam",
            "email": "nahid@gmail.com"
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
            data
        };
        axios.get('http://localhost:8000/payment/init', config)
            .then(response => {
                window.location.href = response.data.GatewayPageURL;
                // redirect(response.data.GatewayPageURL);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '100vh',
            width: '100vh',
        }}>
            <div className="payment" >
                <form>
                    <div className="form-group">
                        <input type="text" value={name} placeholder={"Enter customer name"}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input type="number" value={credit} placeholder={"Enter Credit"}
                            onChange={e => setCredit(e.target.value)}
                        />
                    </div>

                    <div className="BDT">
                        <h3>Pay Tk {credit} BDT</h3>
                    </div>

                    <div className="form-group">
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={handleSubmit}
                        >
                            Checkout
                        </Button>
                        {/* <button onClick={handleSubmit}>Checkout</button> */}
                    </div>

                </form>
            </div>
        </div>

    );
}

export { Payment };

