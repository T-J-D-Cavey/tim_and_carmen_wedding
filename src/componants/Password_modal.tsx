import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { set_is_correct, show_modal_selector, set_show_modal, password_input_selector, set_password_input } from '../redux/main_slice';

export function Password_modal() {
  // To consider: moving this state logic into the main slice state:
  const dispatch = useDispatch();
  const showModal = useSelector(show_modal_selector);
  const input = useSelector(password_input_selector);

  const handleClose = () => dispatch(set_show_modal(false));
  const handleShow = () => dispatch(set_show_modal(true));
  // Need to store password in another file and folder in an object and import it here: 
  const password = 'test';
  // Need to find the type for these event parameters:
  function handleSubmit(e) {
    //  need to set up the local storage logic so succesful password is added to local storage
    if(input === password) {
      dispatch(set_is_correct(true));
      dispatch(set_show_modal(false));
    }
    else {
      alert('Incorrect password');
      dispatch(set_show_modal(false));
    }
  }

// need to work out a way to clear the input when the submit button is submitted, for correct and incorrect submits:

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Submit password to enter site
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          Submit password to enter site:
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="enter password here"
                autoFocus
                onChange={(e) => dispatch(set_password_input(e.target.value))}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
