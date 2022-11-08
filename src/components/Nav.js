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
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>تأمينات</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='./'>
                الصفحة الرئسية
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='./About'>من نحن</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='./Card'>خدماتنا </MDBNavbarLink>
            </MDBNavbarItem>
            

            <MDBNavbarItem>
              <MDBNavbarLink  href='./Login' tabIndex={-1} aria-disabled='true'>
                تسجيل الدخول
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='' aria-label='Search' />
            <MDBBtn color='primary'>بحث</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}