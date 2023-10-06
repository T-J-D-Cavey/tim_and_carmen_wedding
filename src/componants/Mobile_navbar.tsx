import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from "react-i18next";

export function Mobile_navbar() {
    const { t } = useTranslation();

    return (
        <div>
            <Navbar key={'xxl'} expand={'xxl'} className="bg-body-tertiary mb-3">
              <Container fluid>
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
                      <Nav.Link href="/">{t("home_nav")}</Nav.Link>
                      <Nav.Link href="/about-us">{t("about_nav")}</Nav.Link>
                      <Nav.Link href="/malaysia-celebration">{t("malay_nav")}</Nav.Link>
                      <Nav.Link href="uk-celebration">{t("uk_nav")}</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
        </div>
    );
}
  