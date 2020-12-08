import React,{useState, useEffect} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CCollapse,
  CButton,
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
import CIcon from '@coreui/icons-react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import alertas from '../utils/Alertas';

const Actividades = () => {
  const [actividades, setActividades] = useState([]);

  const [consulta, setConsulta] = useState(true);
  const [modal, setModal] = useState(false);
  const [actividad, setActividad] = useState({
    name:''
  });

  useEffect(() => {
    const obtenerActividad = async () => {
      try {
        const resultado = await axios.get('http://3.90.64.114/api/v1/web/activities');
        setActividades(resultado.data);
        setConsulta(false);  
        console.log(actividades);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerActividad();
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
    { key: 'name', label:'Actividad', _style: { width: '40%'} },
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
    setActividad({
      name:''
    });
    setModal(!modal);
  }

  const editar=()=>{  
    setModal(!modal)
  }

   const handleChange= e =>{
    const {name, value} = e.target;
    setActividad(prevState=>({
      ...prevState,
      [name]: value,
    }))
  }

  const editarActividad=(consola, caso)=>{
    console.log(consola);
    setActividad(consola);
    editar();
  }

  const grabar=async()=>{

    if (actividad.name.trim() ==='') {
      alertas.AlertaFormulario("Ingrese Actividad");
      return;
    }

    try {
      await axios.post('http://3.90.64.114/api/v1/web/activities', actividad);
      setConsulta(true);
      alertas.AlertaMensajeExito("Actividad ingresada correctamente");
      setModal(!modal)
    } catch (error) {
      console.log(error);
    }
  };
    
   const eliminar = async(id)=>{
    Swal.fire({
      title: '¿Eliminar Actividad?',
      text: "Está seguro de eliminar esta Actividad!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar!',
      showCancelButton: true,
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarActividad();
        Swal.fire(
          'Eliminado!',
          'Actividad eliminada correctamente',
          'success'
        )
      }
    })
  }

  const eliminarActividad = async () => {
    try {
      // const resultado = await axios.get('http://3.90.64.114/api/v1/web/activities');
      // setActividades(resultado.data);
      // setConsulta(true);
      console.log(actividades);
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
              Actividades              
              <CButton 
              onClick={() =>  agregar()} 
              className="mr-1"
              size="sm" 
              color="primary"
            >Nuevo</CButton>

            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={actividades}
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
                           onClick={()=>editarActividad(item, 'Editar')}>
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
                <CModalTitle>Actividad</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>Nombre:</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput name="id" onChange={handleChange} value={actividad.id} placeholder="" hidden />
                    <CInput name="name" onChange={handleChange} value={actividad.name} placeholder="Actividad" />
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

export default Actividades;