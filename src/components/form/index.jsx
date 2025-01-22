import React, { useState } from "react";

const FormData = () => {
  const [name, setName] = useState('');
  const [tc, setTc] = useState(false);
  const [lang, setLang] = useState('');

  const getData = (e) => {
    e.preventDefault(); // Fixed typo here
    console.log(`Name: ${name}`);
    console.log(`Language: ${lang}`);
    console.log(`Accept: ${tc}`);
  };

  return (
    <div>
      <h1>Handle Form In React JS</h1>
      <form onSubmit={getData}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <select
          name="option"
          id="option"
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Punjabi">Punjabi</option>
        </select>
        <input
          type="checkbox"
          name="accept"
          id="accept"
          onChange={(e) => setTc(e.target.checked)}
        />
        <span> Accept</span>
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </form>
    </div>
  );
};

export default FormData;
