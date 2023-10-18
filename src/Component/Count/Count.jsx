import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Cart_total } from '../../Services/Action/Cart_Add';

function Count({id}) {

    const Add_to = useSelector(state => state.cart)
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();


    const handleInc = () => {
        setCount(count + 1);
        Total();
    }

    const handleDec = () => {
        if (count > 1)
            setCount(count - 1)
        Total();
    }

    const Total = () => {
        let price = Add_to[id].price;
        console.log("price",price, count);

        let total = count * price;
        console.log(total);
        dispatch(Cart_total(total));
        // return total;
    }

    
    return (
        <>
            <div className='add_button'>
                <Button onClick={handleInc}>+</Button>
                <span>{count}</span>
                <Button onClick={handleDec}>-</Button>
            </div>
        </>
    )
}

export default Count;