import CIcon from '@coreui/icons-react'
import React,{useState, useEffect} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
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
              Pacientes
            </CCardHeader>
        
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>

            <CCardBody>
            <table className="table">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>NOMBRE</td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {nutriologos.map(item=>{
                  return(
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.user.name}</td>
                      <td>
                      <button className="btn btn-primary">
                     <CIcon name="cil-pencil" className="mfe-2" /> 
                       Editar
                       </button>
                        <button className="btn btn-danger">
                        <CIcon name="cil-trash" className="mfe-2" /> 
                        Eliminar
                        </button>
                        </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Pacientes;