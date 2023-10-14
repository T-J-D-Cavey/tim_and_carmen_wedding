import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import { UK_carousel } from './UK_carousel';

export function UK_modal () {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        {t("button_details")}
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="UK wedding details"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <UK_carousel />
        </Modal.Body>
      </Modal>
    </>
  );
}