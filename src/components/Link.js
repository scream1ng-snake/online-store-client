import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Link({path, children, onClick}) {
  return(
    <LinkContainer to={path}><Nav.Link onClick={onClick}>{children}</Nav.Link></LinkContainer>
  )
}