import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import { Malaysia_carousel } from './Malaysia_carousel';

export function Malaysia_modal () {
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
        aria-labelledby="Malaysia wedding details"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body id="Malaysia wedding details">
          <Malaysia_carousel />
        </Modal.Body>
      </Modal>
    </>
  );
}