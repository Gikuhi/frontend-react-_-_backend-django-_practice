import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function Orders(){

        const{ id } = useParams();


    const [orders, setOrders] = useState();

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/orders/")
            .then((response)=>response.json())
            .then((data)=>{
                setOrders(data.orders);
            });
    },{});


    return(
        <>
        <p>
            {orders
                ? orders.map((orders)=> {
                    return(
                        <>
                            <p>Item: {orders.name}</p>
                            {/*<Link to={"/customers/" + customer.id}>View Customer</Link> <br/>*/}

                            <p>Number: {orders.number}</p>
                            <br></br>
                        </>
                    );
                })
                : null}

            <div>
                <Link to={"/customers/"}>Return</Link>

            </div>

        </p>
        </>
    );
}
