import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from "react-i18next";
import { Change_language } from './Change_language';

export function Mobile_navbar() {
    const { t } = useTranslation();

    return (
        <div className='mob_nav_container'>
            <Navbar key={'xxl'} expand={'xxl'} className="bg-body-tertiary">
              <Container className='mob_nav' fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'xxl'}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${'xxl'}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${'xxl'}`}
                  placement="end"
                  >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'xxl'}`}>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="/">{t("nav_home")}</Nav.Link>
                      <Nav.Link href="/malaysia-celebration">{t("nav_malay")}</Nav.Link>
                      <Nav.Link href="uk-celebration">{t("nav_uk")}</Nav.Link>
                      <Change_language />
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
        </div>
    );
}
  