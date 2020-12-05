import CIcon from '@coreui/icons-react'
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
  CDataTable
} from '@coreui/react'
import axios from 'axios';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
// import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const Nutriologos = () => {

  const [nutriologos, setNutriologos] = useState([]);
  const [nutriologo, setNutriologo] = useState({});

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const obtenerNutriologos = async () => {
      try {
        const resultado = await axios.get('http://3.90.64.114/api/v1/mobile/nutriologist/');
        // setNutriologos(resultado.data.user.name);
        // setNutriologos(resultado.data);
        // setNutriologo(resultado.data.map(i=>i.user));
        // setNutriologos(resultado.data.map(i=>i.id), resultado.data.map(i=>i.user));
        // setNutriologo(resultado.data.map(i=>i.id), resultado.data.map(i=>i.user.name));
        // var x={
        //   "id":resultado.data.map(i=>i.id),
        //   "name": resultado.data.map(i=>i.user.name)
        // }
        // setNutriologo(x);
        var s=resultado.data;
        var a =resultado.data.map(i=>i.id);
        // console.log(s);
        var name = resultado.data.map(i=>i.user.name);
        console.log(resultado.data.map(i=>i.user.name));
        s[0].nombre = name;
        console.log(s.name);
        setNutriologos(s);
        // var obj = Object.assign(s,x);
        // console.log(Object.assign(a,x));
        // // s.name=resultado.data.map(i=>i.user.name);
        // console.log(obj);
        // setNutriologos(x);
        // setNutriologo(setNutriologos);
        // console.log(resultado.data.map(i=>i.user));
      } catch (error) {
        console.log(error);
      }
    };
    obtenerNutriologos();
  }, []);

  const fields = ['id', 'nombre', '']
  return (
    <>
     {/* <CRow>        
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Nutiologos
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
            </CCardBody>
           </CCard>
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
                {nutriologos.map(item=>{
                  return(
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.user.name}</td>
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
              Nutriologos
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={nutriologos}
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

export default Nutriologos;