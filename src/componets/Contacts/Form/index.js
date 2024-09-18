import { useState } from "react";

function Form() {
  const [form, setForm] = useState({ fullname: "", phone: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <div>
        <input name="fullname" placeholder="Full Name" onChange={onChangeInput}/>
      </div>
      <div>
        <input name="phone" placeholder="Phone" onChange={onChangeInput}/>
      </div>
      <div>
        <button type="button">Add</button>
      </div>
    </div>
  );
}

export default Form;
