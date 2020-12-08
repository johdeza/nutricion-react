import CIcon from '@coreui/icons-react'
import React,{useState, useEffect} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CButton,
  CCollapse,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormGroup,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInput,
} from '@coreui/react'
import axios from 'axios';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import alertas from '../utils/Alertas';

const Categorias = () => {

  const [consulta, setConsulta] = useState(true);
  const [modal, setModal] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState({
    id:'',
    name:''
  });

  useEffect(() => {
    const obtenerCategoria = async () => {
      try {
        const resultado = await axios.get('http://3.90.64.114/api/v1/web/aliments-categories');
        setCategorias(resultado.data);
        setConsulta(false);
        console.log(categorias);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCategoria();
  }, [consulta]);

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
    { key: 'name', label:'Categoría', _style: { width: '40%'} },
    {
      key: 'Opciones',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  const agregar=()=>
  {
    setCategoria({
      id:'',
      name:''
    });
    setModal(!modal);
  }

  const editar=()=>{  
    setModal(!modal)
  }

   const handleChange= e =>{
    const {name, value} = e.target;
    setCategoria(prevState=>({
      ...prevState,
      [name]: value,
    }))
  }

  const editarCategoria=(consola, caso)=>{
    console.log(consola);
    setCategoria(consola);
    editar();
  }

  const grabar=async()=>{
    try {
        await axios.post('http://3.90.64.114/api/v1/web/aliments-categories', categoria);
        setConsulta(true);
        alertas.AlertaMensajeExito("Categoria-Alimento ingresado correctamente");
        setModal(!modal)
    } catch (error) {
      
      alertas.AlertaFormulario(error.response.data);
    }
  };
    
   const eliminar = async(id)=>{
    Swal.fire({
      title: '¿Eliminar Categoría?',
      text: "Está seguro de eliminar esta Categoria!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar!',
      showCancelButton: true,
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarCategoria();
        Swal.fire(
          'Eliminado!',
          'Categoria eliminada correctamente',
          'success'
        )
      }
    })
  }

  const eliminarCategoria = async () => {
    try {
      // const resultado = await axios.get('http://3.90.64.114/api/v1/web/activities');
      // setActividades(resultado.data);
      // setConsulta(true);
      console.log(categoria);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
    <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Categorías
              <CIcon name="cil-plus" className="mfe-2" /> 
              <CButton 
              onClick={() =>  agregar()} 
              className="mr-1"
              size="sm" 
              color="primary"
            >Nuevo</CButton>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={categorias}
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
                            {item.name}
                          </h4>
                          <p className="text-muted">{/*User since: {item.categoria}} */}</p>
                          <CButton key={item.id} size="sm" color="info"
                           onClick={()=>editarCategoria(item, 'Editar')}>
                          <CIcon name="cil-pencil" className="mfe-2" /> 
                            Editar
                          </CButton>
                          <CButton onClick={()=>eliminar(item.id)}
                          size="sm" color="danger" className="ml-1">
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

      {/* Modal agregar */}
     <CRow>
      <CCol>
        <CCard>
          <CCardBody>
            <CModal 
              show={modal} 
              onClose={setModal}
            >
              <CModalHeader closeButton>
                <CModalTitle>Categoría</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>Nombre:</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput name="id" onChange={handleChange} value={categoria.id} placeholder="id" hidden />
                    <CInput name="name" onChange={handleChange} value={categoria.name} placeholder="Nombre" />
                  </CInputGroup>
                </CFormGroup>
                
              </CModalBody>
              <CModalFooter>                
                <CButton 
                  color="danger" 
                  onClick={() => setModal(false)}
                >
                  <CIcon name="cil-x-circle" className="md" />
                  {' '}Cancelar
                  </CButton>
                <CButton color="primary" onClick={()=>grabar()}>
                <CIcon name="cil-save" className="mfe-2" />
                 Grabar
                 </CButton>{' '}
              </CModalFooter>
            </CModal>
            <hr />

           </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default Categorias;