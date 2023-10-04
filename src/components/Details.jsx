import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function Details(){

    const{ id } = useParams();

    const [customer, setCustomer] = useState();

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/customers/" + id)
            .then((response)=>response.json())
            .then((data)=>{
                setCustomer(data.customer);
            });
    },{});



       return(
        <>
        <h1>Details page</h1>
            {customer ?(
                <div>
                    <p>Name: {customer.name}</p>
                </div>
            ):null}
            <div>
            <Link to={"/customers/"}>Return</Link>
             <br/>
            <Link to="mailto:emailaddress@gmail.com">Email me</Link>
                <br/>
            <Link to="tel:0717577640">Call me </Link>
            </div>

        </>
    );
}