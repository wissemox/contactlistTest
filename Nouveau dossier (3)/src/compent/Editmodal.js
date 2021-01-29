    import React, { useState } from 'react';
    import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, FormFeedback, FormText,Form } from 'reactstrap';
    import { useDispatch } from "react-redux";
    import { editContact } from '../redux/actions/contactActions';

    const EditModal = ({el}) => {
    const dispatch= useDispatch() ; 
    
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
        setName(el.name)
        setEmail(el.name)
        setPhone(el.name)
    }
    const [name , setName]=useState(el.name)
    const [email , setEmail]=useState(el.email)
    const [phone , setPhone]=useState(el.phone)
    const editt = ()=>{
        dispatch(editContact(el._id,{name,email,phone}))
        toggle()
    }

    return (
        <div>
        <Button color="danger" onClick={toggle}>edit contact</Button>
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
            <Form>
                
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
            
            </Form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={editt}>save</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
    }

    export default EditModal;