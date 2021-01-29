// import axios from 'axios'
// import React, { useEffect , useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getContacts } from "../redux/actions/contactActions";


// const ContactList = () => {
//   // const dispatch = useDispatch();
//   // useEffect(() => {
//   //   dispatch(getContacts());


//   // }, []);
//   const [fetchData,Setfetchdata]=useState([])
//   const [fetchData02,Setfetchdata02]=useState()
//   useEffect(() => {
//   axios.get("/api/contacts/")
//   .then(res=>  Setfetchdata(res.data.contacts))
//   .catch(err=> console.log(err))
//   }, [])
  
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
//      {console.log(fetchData)}
//      {fetchData.map(el=><> <p> {el.name} </p>
//      <button onClick={()=>Setfetchdata02(el._id)}> click eme </button>
//      {console.log(fetchData02)}
//      {/* <button onClick={removerdata(el._id ,fetchData)}>Delete </button> */}
//      <button o>Delte</button>
     
//      </>
//      )
     
//      }
//      <button onClick={()=>Setfetchdata([...fetchData,{name:"wissem"}])}> click eme </button>
     
//     </div>
//   );
// };

// export default ContactList;
//redux
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/actions/contactActions";
import Contactcard from './Contactcard'

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  const contacts = useSelector((state) => state.contacts.contacts);
  return (
    <div cl style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      <input/>
     {console.log(contacts)}
     <div className="ahml">
       
    {contacts && contacts.map(el=>  <Contactcard el={el}/>)}
    
    </div>
    </div>
  );
};

export default ContactList;