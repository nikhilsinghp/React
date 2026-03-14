
import { useState } from "react"
import "./Contact.css"


const Contact = () => {

    let [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        query: "",
        message: "",
    })

    function handleInput(e) {
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(e.target.value);

    }
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(data);

        try {
            let response = await fetch("http://localhost:8080/contact/save", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert("Data Saved Sussfully")
            } else {
                alert("Error Data Not Saved")
            }
        } catch (error) {
            alert("Error Data Not Saved")
        }

        if (data.query.type === "radio") {
            data.query.checked = "false";
        }
        setData({
            firstName: "",
            lastName: "",
            email: "",
            query: "",
            message: "",
        });
    }

    return <div className="Contact" onSubmit={handleSubmit}>
        <section >
            <div className="con-h1">
                <h2>Contact Us</h2>
            </div>
            <form action="">
                <div className="name">
                    <div>
                        <label htmlFor="">First Name *</label>
                        <input type="text" required name="firstName" value={data.firstName} onInput={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="">Last Name *</label>
                        <input type="text" required name="lastName" value={data.lastName} onInput={handleInput} />
                    </div>
                </div>

                <div className="email">
                    <label htmlFor="">Email Address *</label>
                    <input type="email" required name="email" value={data.email} onInput={handleInput} />
                </div>

                <div className="Query-Type">
                    <div className="label">
                        <label htmlFor="">Query Type *</label>
                    </div>
                    <main className="Query-main">
                        <div>
                            <input type="radio" name="query" required value={"General Equity"} onInput={handleInput} />
                            <label htmlFor="">General Equity </label>
                        </div>
                        <div>
                            <input type="radio" name="query" required value={"Support Request"} onInput={handleInput} />
                            <label htmlFor="">Support Request</label>
                        </div>
                    </main>
                </div>

                <div className="message">
                    <label htmlFor="">Message *</label>
                    <textarea name="message" rows={5} required placeholder="Message" value={data.message} onInput={handleInput}></textarea>
                </div>
                <div className="checkbox">
                    <input type="checkbox" required />
                    <p>I consent to being contacted by the team *</p>
                </div>
                <div className="button">
                    <button>Submit</button>
                </div>
            </form>
        </section>
    </div>
}
export default Contact
