import React,{useState, useEffect} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
// import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const Actividades = () => {
  const [actividades, setActividades] = useState([]);
  const [modal, setModal] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const obtenerCita = async () => {
      try {
        const resultado = await axios.get('http://3.90.64.114/api/v1/web/activities');
        setActividades(resultado.data);
        console.log(actividades);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCita();
  }, []);

  const fields = ['id', 'name', '']

  return (
    <>
      {/* <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Actividades
            </CCardHeader>
            <CCardBody>
            <table className="table">
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Actividad</td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {actividades.map(item=>{
                  return(
                    <tr key={item.id.toString()}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <button className="btn btn-primary">Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                        <CButton 
                          onClick={() => setModal(!modal)} 
                          className="mr-1"
                          color="secondary"
                          >Agregar</CButton>
                        </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            </CCardBody>

            <CCardBody>
              <CModal 
                show={modal} 
                onClose={setModal}
              >
                <CModalHeader closeButton>
                  <CModalTitle>Registro de Pacientes</CModalTitle>
                  
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

           </CCardBody>
            
          </CCard>
        </CCol>
      </CRow> */}

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Actividades
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={actividades}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                '':
                  (item)=>(
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
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Actividades;