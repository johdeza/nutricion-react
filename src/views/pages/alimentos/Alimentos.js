import React,{useState, useEffect} from 'react';
import {
  CSelect,
  CLabel,
  CCard,
  CDataTable,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,  
  CCollapse,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormGroup,
  CInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import alertas from '../utils/Alertas';

const Alimentos  =()=> {
  
  const [alimentos, setAlimentos] = useState([]);
  const [modal, setModal] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [consulta, setConsulta] = useState(true);

  useEffect(() => {
    const obtenerCategoria = async () => {
      try {
        const resultado = await axios.get('http://3.90.64.114/api/v1/web/aliments-categories');
        setCategorias(resultado.data);
        setConsulta(false);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCategoria();
  }, [consulta]);

  useEffect(() => {
    const obtenerAlimentos = async () => {
      try {
        const resultado = await axios.get('http://3.90.64.114/api/v1/web/aliments');
        const alimentoCategoria = resultado.data.aliments.map(item=>{
            return{
              ...item,
            categoria: item.aliments_category.name
          }
        })
        setAlimentos(alimentoCategoria);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerAlimentos();
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
    { key: 'name', label:'Alimento', _style: { width: '40%'} },
    { key: 'cantidad', label: 'Cantidad' },
    { key: 'categoria', label: 'Categoría' },
    {
      key: 'Opciones',
      label: 'Opciones',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  const agregar=()=>
  {
    setAlimento({
      id:'',
      name: '',
      cantidad:'',
      categoria:''
    });
    setModal(!modal);
  }

  const [alimento, setAlimento] = useState({
    id:'',
    name: '',
    cantidad:'',
    categoria:''
  })

  const editar=()=>{  
    setModal(!modal)
  }

   const handleChange= e =>{
    const {name, value} = e.target;
    setAlimento(prevState=>({
      ...prevState,
      [name]: value,
    }))
  }

  const editarAlimento=(consola, caso)=>{
    console.log(consola);
    setAlimento(consola);
    editar();
  }

  const grabar=async()=>{
    
    try {
        await axios.post('http://3.90.64.114/api/v1/web/aliments', alimento);
        setConsulta(true);
        alertas.AlertaMensajeExito("Alimento ingresado correctamente");
        setModal(!modal)
    } catch (error) {
      console.log(alertas.AlertaFormulario(error.response.data));
    }
  };
    
   const eliminar = async(id)=>{
    Swal.fire({
      title: '¿Eliminar Alimento?',
      text: "Está seguro de eliminar este Alimento!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar!',
      showCancelButton: true,
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarAlimento(id);
        Swal.fire(
          'Eliminado!',
          'Alimento eliminado correctamente',
          'success'
        )
      }
    })
  }

  const eliminarAlimento = async (id) => {
    try {
      // await axios.put(`http://3.90.64.114/api/v1/web/activities/${id}`);
      // setConsulta(true);
      console.log(alimento);
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
              Alimentos
              <CIcon name="cilplus" className="mfe-2" /> 
              <CButton size="sm" color="primary" onClick={agregar}>
                Nuevo  
              </CButton>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={alimentos}
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
                          <p className="text-muted">Categoria: {item.categoria}</p>
                          <p className="text-muted">Id: {item.id}</p>
                          <CButton key={item.id} size="sm" color="info"
                           onClick={()=>editarAlimento(item, 'Editar')}>
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
                <CModalTitle>Alimento</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CFormGroup>
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabled-input">Alimento:</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput name="name" onChange={handleChange} value={alimento.name} placeholder="Alimento" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="disabled-input">Cantidad:</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <CInput name="cantidad" onChange={handleChange} value={alimento.cantidad} placeholder="Cantidad" />
                    {/* <CInput id="cantidad" value={consolaSeleccionada.nombre} type="number" onChange={handleChange} name="cantidad" placeholder="Cantidad" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Categoría:</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="categoria" value={alimento.categoria} id="select" onChange={handleChange}>
                      <option value="0">--Seleccione una Categoría--</option>
                      {categorias.map(i=>(
                        <option key={i.id} value={i.categoria}>{i.name}</option>
                      ))}
                    </CSelect>                    
                  </CCol>
                </CFormGroup>
                </CFormGroup>
              </CModalBody>
              <CModalFooter>                
                <CButton 
                  color="danger" 
                  onClick={() => setModal(false)}
                >Cancelar</CButton>
                <CButton color="primary" onClick={()=>grabar()}>Grabar</CButton>{' '}
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

export default Alimentos;