import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function Orders(){

    const{ id } = useParams();

    const [order, setOrder] = useState();

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/orders/" + id)
            .then((response)=>response.json())
            .then((data)=>{
                setOrder(data.order);
            });
    },{});



        return(
        <>
            <h1>Order details</h1>
            {order ?(
                <div>
                    <p>Item: {order.name}</p>
                </div>
            ):null}
            <div>
            <Link to={"/customers/"}>Return</Link>
             <br/>
            </div>
        </>
    );
}
