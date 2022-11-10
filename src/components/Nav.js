import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' >
      <MDBContainer fluid>
       

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='top1'
          //  className='mr-auto mb-2 mb-lg-0 ' 
           >
          <MDBNavbarItem>
              <MDBNavbarLink  href='./Login' tabIndex={-1} aria-disabled='true'>
                تسجيل الدخول
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='./About'>من نحن</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='./Card'>خدماتنا </MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='./'>
                 الرئيسية
              </MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>

        
        </MDBCollapse>
        <MDBNavbarBrand href='./' className='top'>تأمين</MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  );
}