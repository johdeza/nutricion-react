import CIcon from '@coreui/icons-react'
import React,{useState, useEffect} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CCollapse,
  CDataTable
} from '@coreui/react'
import axios from 'axios';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
// import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const Nutriologos = () => {

  const [nutriologos, setNutriologos] = useState([]);

  useEffect(() => {
    const obtenerNutriologos = async () => {
      try {
        const resultado = await axios.get('http://3.90.64.114/api/v1/mobile/nutriologist/');
        const alimentoCategoria = resultado.data.map(item=>{
          return{
            ...item,
          nombre: item.user.name
        }
      })
      console.log(alimentoCategoria);
      setNutriologos(alimentoCategoria);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerNutriologos();
  }, []);

  const [details, setDetails] = useState([])

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  const fields = [
    { key: 'id', label:'Id', _style: { width: '10%'} },
    { key: 'nombre', label:'Nutriólogo', _style: { width: '40%'} },
    {
      key: 'Opciones',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  return (
    <>
    <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Nutriólogos
              <CIcon name="cil-plus" className="mfe-2" /> 
              <CButton size="sm" color="primary">
                Nuevo  
              </CButton>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={nutriologos}
              fields={fields}
              columnFilter
              tableFilter
              footer
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
              scopedSlots = {{
                'Opciones':
                  (item, index)=>{
                    return (
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={()=>{toggleDetails(index)}}
                        >
                          {details.includes(index) ? 'Ocultar' : 'Opciones'}
                        </CButton>
                      </td>
                      )
                  },
                'details':
                    (item, index)=>{
                      return (
                      <CCollapse show={details.includes(index)}>
                        <CCardBody>
                          <h4>
                            {item.nombre}
                          </h4>
                          <p className="text-muted">{/*User since: {item.categoria}} */}</p>
                          <CButton size="sm" color="info">
                          <CIcon name="cil-pencil" className="mfe-2" /> 
                            Editar
                          </CButton>
                          <CButton size="sm" color="danger" className="ml-1">
                          <CIcon name="cil-trash" className="mfe-2" /> 
                            Eliminar
                          </CButton>
                        </CCardBody>
                      </CCollapse>
                    )
                  }
              }}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>     
    </>
  )
}

export default Nutriologos;