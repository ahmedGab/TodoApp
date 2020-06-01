import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>edit</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
   
        <label for="name">id:</label>
  <input type="text"  id="fname"  name="fname" value={props.el.id} /><br/><br/>
  <label for="lname">title:</label>
  <input type="text"  id="title" name="title"  onChange={props.handlechangeTitre}/><br/><br/>
  
        </ModalBody>
        <ModalFooter>
          <Button onClick={()=>props.editClick(props.el.title,props.el.id)} color="primary"  >update</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;