import CIcon from '@coreui/icons-react'
import React,{useState, useEffect} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable
} from '@coreui/react'
import axios from 'axios';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
// import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const Categorias = () => {

  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const [categorias, setCategorias] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const obtenerCategoria = async () => {
      try {
        const resultado = await axios.get('http://3.90.64.114/api/v1/web/aliments-categories');
        setCategorias(resultado.data);
        console.log(categorias);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCategoria();
  }, []);

  const fields = ['id', 'name', '']

  return (
    <>
      {/*<CRow>
        
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Categoria de Alimentos
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
                <CCol xs="1" md="3">
                <CButton size="sm" color="primary">
                  <CIcon name="cil-scrubber" /> Consultar
                  </CButton> 
                  </CCol>
                  <CCol xs="1" md="3">
                  <CButton size="sm" color="primary">
                  <CIcon name="cil-scrubber" /> Agregar
                  </CButton> 
                  </CCol>
                  </CFormGroup>
              </CForm>
            </CCardBody> */}
            {/* <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Consultar</CButton> 
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter> */}
          {/* </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard> */}
            {/* <CCardHeader>
              Nutriologos
            </CCardHeader> */}
            {/* <CCardBody>
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
                {categorias.map(item=>{
                  return(
                    <tr key={item.id}>
                      <td>{item.id}</td>
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
            Categorias
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={categorias}
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

export default Categorias;