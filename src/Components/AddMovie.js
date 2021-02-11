import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddMovie = ({ show, handleClose, addMovie }) => {
    const [title, setTitle] = useState('')
    const [posterUrl, setPosterUrl] = useState('')
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState(0)
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>posterUrl</Form.Label>
              <Form.Control type="text" placeholder="Enter posterUrl" onChange={(e)=>setPosterUrl(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>rate</Form.Label>
              <Form.Control type="number" placeholder="Enter rate" onChange={(e)=>setRate(e.target.value)} />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();addMovie(title,posterUrl,description,rate)}}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
