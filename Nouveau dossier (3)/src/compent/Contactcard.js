
import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { useDispatch  } from "react-redux";
import { deleteContact } from '../redux/actions/contactActions'
import EditModal from './Editmodal'
function Contactcard({el}) {
    const dispatch = useDispatch() ; 
    const delte = () =>{
        dispatch(deleteContact(el._id))
    }
    return (
        <div className="all">
             <Card body inverse color="primary">
        <CardTitle tag="h5">{el.name}</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button onClick={delte}color="secondary">delte</Button>
        <EditModal  el={el}/>
      </Card>
        </div>
    )
}

export default Contactcard
