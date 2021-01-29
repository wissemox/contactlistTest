import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import { useDispatch } from "react-redux";
import {addContact} from '../redux/actions/contactActions'
import {Redirect} from 'react-router-dom'
const Form01 = (props) => {
    const [name , setName]=useState()
    const [email , setEmail]=useState()
    const [phone , setPhone]=useState()
    const [cancel , setCancel]=useState(false)
    const dispatch = useDispatch(); 
    const add = ()=>{ 
        dispatch(addContact({name,email,phone}))
        setCancel(!cancel)
    } 
    const ahla = () => { 
        setCancel(!cancel)
    }
  return (
      <>
      {
          cancel ? (<Redirect to="/list"/>):(  <Form>
            
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
              value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="password" id="examplePassword" placeholder="password placeholder" />
              <Label for="examplePassword">Phone</Label>
              <Input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" name="Phone" id="examplePassword"  />
            </FormGroup>
            <Button onClick={add}>add </Button>
            <Button onClick={ahla}> cancel </Button>
          </Form>)
      }
  </>
  );
}

export default Form01;
