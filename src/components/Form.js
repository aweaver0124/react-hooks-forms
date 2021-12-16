import React from "react";

function Form(props) {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(event){
  //   setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event){
  //   setLastName(event.target.value)
  // }

  return (
    <form>
      <input
        type="text" 
        onChange={props.handleFirstNameChange}
        value={props.firstName} 
      />

      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// const [newsletter, setNewsLetter] = useState(false)

// function handleNewsletterChange(event){
//   setNewsLetter(event.target.checked)
// }

// return (
//   <form>
//     <label htmlFor='newsletter'>Subscribe to Our Newsletter?</label>
//     <input
//       type="checkbox"
//       id='newsletter'
//       onChange={handleNewsletterChange}
//       checked={newsletter}
//     />
//     <button type='submit'>Submit</button>
//   </form>
// );
// }

export default Form;
