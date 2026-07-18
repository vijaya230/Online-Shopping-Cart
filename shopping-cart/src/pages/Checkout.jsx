import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkout } from "../service";

function Checkout() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        customerName: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await checkout(form);

            alert(response.data.message);

            navigate("/");

        } catch (error) {

            alert("Checkout failed!");

            console.error(error);

        }

    };

    return (

        <div className="checkout-page">

            <h1>Checkout</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="customerName"
                    placeholder="Customer Name"
                    value={form.customerName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                />

                <textarea
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Place Order
                </button>

            </form>

        </div>

    );

}

export default Checkout;