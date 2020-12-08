import Swal from 'sweetalert2';

const Alertas = (props) => {
    Swal.fire({
        title: '¿Eliminar Actividad?',
        text: "Está seguro de eliminar esta Actividad!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Eliminado!',
            'Actividad eliminada correctamente',
            'success'
            )
        }
        })
}

const AlertaFormulario=(mensaje)=>{
    Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: mensaje,
      })
}

const AlertaMensajeExito = (mensaje)=>{
    Swal.fire({
        icon: 'success',
        title: 'Exito...',
        text: mensaje,
      })
}
export default {Alertas, AlertaFormulario, AlertaMensajeExito};