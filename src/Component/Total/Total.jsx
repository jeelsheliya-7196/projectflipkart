import React from 'react'
import { useSelector } from 'react-redux'

function Total() {

    const {cart, total} = useSelector(state => state)

    return (
        <>
            <div>
                <span>
                    PRICE DETAILS
                </span>
                <div>
                    <div className='price_data'>
                        <p>Price</p>
                        <span>{total}</span>
                    </div>
                    <div className='price_data price_da'>
                        <p>Delivery Charges</p>
                        <span>Free</span>
                    </div>
                </div>
                <hr />
                <div>
                    <div className='amount'>
                        <p>Total Amount</p>
                        <span>{total}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Total