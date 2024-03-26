import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SidebarContent from './SidebarContent';

export default function ProductsSidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isSmallScreen = window.innerWidth < 768;
  return (
    <>
      {isSmallScreen ? (
        <FontAwesomeIcon icon={faBars} size="lg" onClick={handleShow} style={{ cursor: 'pointer' }} className='ms-4'/>
      ) : (
        <div className="sidebar">
          <SidebarContent />
        </div>
      )}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarContent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}