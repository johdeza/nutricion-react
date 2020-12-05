import React,{useState, useEffect} from 'react';
import {
  CCard,
  CDataTable,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import axios from 'axios';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
// import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import usersData from '../../users/UsersData'

const Alimentos  =()=> {
  const [alimentos, setAlimentos] = useState([]);
 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const obtenerAlimentos = async () => {
      try {
        const resultado = await axios.get('http://3.90.64.114/api/v1/web/aliments');
        setAlimentos(resultado.data.aliments);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerAlimentos();
  }, []);

  const fields = ['id', 'name', '']

  return (
    <>
      {/* <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Alimentos
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
                {alimentos.map(item=>{
                  return(
                    <tr key={item.id}>
                      <td>{item.id.toString()}</td>
                      <td>{item.name}</td>
                      <td>
                        <button className="btn btn-primary">Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}



      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Alimentos
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={alimentos}
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

export default Alimentos;