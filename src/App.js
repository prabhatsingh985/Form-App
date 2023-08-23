import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, pushNotifications:""
  })

  function changeHandler(event) {
    // const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [event.target.name]:event.target.value}) );
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
   <div className="flex flex-col items-center mt-2">
   <form onSubmit={submitHandler}>

    <label htmlFor="firstName">First name</label>
    <br/>
    <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="Enter your first name"
      value={formData.firstName}
      onChange={changeHandler}
      className="outline"
    />

    <br/>
    <label htmlFor="lastName">Last name</label>
    <br/>
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Enter your last name"
      value={formData.lastName}
      onChange={changeHandler}
      className="outline"
    />

    <br/>
    <label htmlFor="email">Email Address</label>
    <br/>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="abcd@abcd.com"
      value={formData.email}
      onChange={changeHandler}
      className="outline"
    />

    <br/>
    <label htmlFor="country">Country</label>
    <br/>
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className="outline"
      >

      <option>India</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>

    <br/>
    <label htmlFor="streetAddress">Street Address</label>
    <br/>
    <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="C-645"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="outline"
    />

    <br/>
    <label htmlFor="city">City</label>
    <br/>
    <input
      type="text"
      name="city"
      id="city"
      placeholder="G-674"
      value={formData.city}
      onChange={changeHandler}
      className="outline"
    />

  <br/>
    <label htmlFor="state">State / Province</label>
    <br/>
    <input
      type="text"
      name="state"
      id="state"
      placeholder="Enter State name"
      value={formData.state}
      onChange={changeHandler}
      className="outline"
    />

    <br/>
    <label htmlFor="postalCode">Postal Code</label>
    <br/>
    <input
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="110077"
      value={formData.postalCode}
      onChange={changeHandler}
      className="outline"
    />


    <br/>
    <br/>
    <fieldset>
      <legend>Push Notifications</legend>
      <p>These are delivered via SMS to your mobile phone.</p>

      <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changeHandler}
      />

      <label htmlFor="pushEverything">Everything</label>

      <br/>
      <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as email"
        onChange={changeHandler}
      />

      <label htmlFor="pushEmail">Same as email</label>

      <br/>
      <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changeHandler}
      />

      <label htmlFor="pushNothing">No Push Notifications</label>

    </fieldset>



   <button
   className="bg-blue-500 text-white font-bold rounded py-2 px-4"
   >Save</button>






   </form>

   </div>
  );
}

export default App;
