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
          <Modal.Title id="UK wedding details">
            {t("uk_modal_title")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UK_carousel />
          <p>{t("uk_modal_top_p")}</p>
          
          <p>
                <a href="https://visitbristol.co.uk/your-visit/travelling-to-bristol" target="_blank">
                    {t("uk_modal_travel_link")}
                </a>
                {' '}
                {t("uk_modal_travel_p")}
            </p>    
        </Modal.Body>
      </Modal>
    </>
  );
}