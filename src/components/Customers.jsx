import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
export default function Customers(){
    const [customers, setCustomers] = useState();

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/customers/")
            .then((response)=>response.json())
            .then((data)=>{
                setCustomers(data.customers);
            });
    },{});


    return(
        <>
        <p>
            {customers
                ? customers.map((customers, orders)=> {
                    return(
                        <>
                            <p>Name: {customers.name}</p>
                            <Link to={"/details/" + customers.id}>View Details</Link> <br/>
                            <Link to={"/orders/" + orders.name }>View Order</Link> <br/>

                            <p>Number: {customers.number}</p>
                            <br></br>
                        </>
                    );
                })
                : null}
        </p>


        </>
    );
}
