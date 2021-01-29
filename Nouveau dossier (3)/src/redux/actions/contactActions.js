// import axios from "axios"
// import {GET_CONTACTS} from "../constants/actionType"
// export const getContacts=()=>(dispatch)=>{
//     axios.get("/api/contacts/")
//     .then(res=>console.log(res.data))
//     .then(res=> dispatch({type:GET_CONTACTS,payload:res.data}))
//     .catch(err => console.log(err))
// }
// export const addContact=(newContact)=>dispatch=>{
//     axios.post("/api/contacts/add",newContact)
//     .then(res=> dispatch(getContacts()))
// }
import axios from "axios";
import { GET_CONTACTS } from "../constants/actionType";
export const getContacts = () => dispatch => {
  console.log("ahla")
  axios.get('/api/contacts/')
    .then(res => dispatch({type:GET_CONTACTS, payload:res.data}))
    .catch(err=> console.log(err));
};

export const addContact = (newContact)=>(dispatch)=>{
  axios.post("/api/contacts/add",newContact)
  .then(res => dispatch(getContacts()))
  .catch(err=>console.log(err))
}
export const deleteContact = (idContact)=>(dispatch)=>{
  axios.delete(`/api/contacts/delete/${idContact}`)
  .then(res => dispatch(getContacts()))
  .catch(err=>console.log(err))
}
export const editContact = (idContact,editeContact)=>(dispatch)=>{
  axios.put(`/api/contacts/edit/${idContact}`,editeContact)
  .then(res => dispatch(getContacts()))
  .catch(err=>console.log(err))
}