import { useDispatch, useSelector } from 'react-redux';
import { FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import { password } from '../../assets/auth/password_object';
import { set_is_correct, show_modal_selector, set_show_modal, password_input_selector, set_password_input } from '../../redux/main_slice';
import { Change_language } from './Change_language';

export function Password_modal() {

  const dispatch = useDispatch();
  const showModal = useSelector(show_modal_selector);
  const input = useSelector(password_input_selector);

  const handleClose = () => dispatch(set_show_modal(false));
  const handleShow = () => dispatch(set_show_modal(true));

  const { t } = useTranslation();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if(input === password.key) {
      dispatch(set_is_correct(true));
      dispatch(set_show_modal(false));
      localStorage.setItem('tim_and_carmen_password', 'is_in_local_storage');
    }
    else {
      alert(t("alert"));
      dispatch(set_show_modal(false));
    }
    dispatch(set_password_input(''));
  }

  return (
    <>
      <Change_language />
      <Button variant="primary" onClick={handleShow}>
        {t("password_open")}
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          {t("password_title")}
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder={t("placeholder")}
                autoFocus
                onChange={(e) => dispatch(set_password_input(e.target.value.toLowerCase()))}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("close")}
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {t("submit")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
