import React,{useState, useEffect} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
} from '@coreui/react'
import axios from 'axios';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
// import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const Pacientes = () => {

  const [nutriologos, setNutriologos] = useState([]);

  const [modal, setModal] = useState(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const obtenerCita = async () => {
      try {
        const resultado = await axios.get('http://3.90.64.114/api/v1/mobile/nutriologist/');
        setNutriologos(resultado.data);
        console.log(nutriologos);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCita();
  }, []);

  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Perfil
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="1">
                    <CLabel htmlFor="hf-email">Nombre:</CLabel>
                  </CCol>
                  <CCol xs="1" md="3">
                    <CInput type="email" id="hf-email" name="hf-email" placeholder="Ingrese Nombre" autoComplete="text" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="1">
                    <CLabel htmlFor="hf-email">Dirección:</CLabel>
                  </CCol>
                  <CCol xs="1" md="3">
                    <CInput type="email" id="hf-email" name="hf-email" placeholder="Ingrese Dirección" autoComplete="text" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="1">
                    <CLabel htmlFor="hf-email">Teléfono:</CLabel>
                  </CCol>
                  <CCol xs="1" md="3">
                    <CInput type="email" id="hf-email" name="hf-email" placeholder="Ingrese Teléfono" autoComplete="text" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="1">
                    <CLabel htmlFor="hf-email">Email:</CLabel>
                  </CCol>
                  <CCol xs="1" md="3">
                    <CInput type="email" id="hf-email" name="hf-email" placeholder="Ingrese Email" autoComplete="text" />
                  </CCol>
                </CFormGroup>
           
                <CFormGroup row>
                  <CCol xs="1" md="3">
                  <CButton 
                    // onClick={() => setModal(!modal)} 
                    className="mr-1"
                    color="success"
                    >Actualizar</CButton>
                  </CCol>
                  </CFormGroup>
              </CForm>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      
    </>
  )
}

export default Pacientes;