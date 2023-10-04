import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { set_is_correct } from '../redux/main_slice';

export function Password_modal() {
  // To consider: moving this state logic into the main slice state:
  const [show, setShow] = useState(true);
  const [input, setInput] = useState('')
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Need to store password in another file and folder in an object and import it here: 
  const password = 'test';
  // Need to find the type for these event parameters:
  function handleSubmit(e) {
    //  need to set up the local storage logic so succesful password is added to local storage
    if(input === password) {
      dispatch(set_is_correct(true));
      setShow(false)
    }
    else {
      alert('Incorrect password');
      // setShow(false)
    }
  }

// need to work out a way to clear the input when the submit button is submitted, for correct and incorrect submits:

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Submit password to enter site
      </Button>

      <Modal show={show} onHide={handleClose}>
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
                onChange={(e) => setInput(e.target.value)}
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
