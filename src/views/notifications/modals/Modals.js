import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'

const Modals = () => {

  const [modal, setModal] = useState(true)
  const [primary, setPrimary] = useState(false)

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Bootstrap Modales
          </CCardHeader>
          <CCardBody>
            <CButton 
              onClick={() => setModal(!modal)} 
              className="mr-1"
              color="secondary"
            >Launch demo modal</CButton>

            {/* Modal largo */}
            {/* <CButton 
              onClick={() => setLarge(!large)} 
              className="mr-1" 
              color="secondary"
            >
              Launch large modal
            </CButton> */}
          
            <CModal 
              show={modal} 
              onClose={setModal}
            >
              <CModalHeader closeButton>
                <CModalTitle>Titulo modal</CModalTitle>
              </CModalHeader>
              <CModalBody>
                
                
              </CModalBody>
              <CModalFooter>                
                <CButton 
                  color="danger" 
                  onClick={() => setModal(false)}
                >Cancelar</CButton>
                <CButton color="primary">Grabar</CButton>{' '}
              </CModalFooter>
            </CModal>

{/* modal largo

            <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => setLarge(!large)}>Do Something</CButton>{' '}
                <CButton color="secondary" onClick={() => setLarge(!large)}>Cancel</CButton>
              </CModalFooter>
            </CModal> */}

            <hr />

            <CButton color="primary" onClick={() => setPrimary(!primary)} className="mr-1">
              Primary modal
            </CButton>

            <CModal 
              show={primary} 
              onClose={() => setPrimary(!primary)}
              color="primary"
            >
              <CModalHeader closeButton>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => setPrimary(!primary)}>
                  Do Something
                </CButton>{' '}
                <CButton color="secondary" onClick={() => setPrimary(!primary)}>
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>

           </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Modals
