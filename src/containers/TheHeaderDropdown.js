import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from "react-router-dom";

const TheHeaderDropdown = () => {

  let history = useHistory();

  const cerrarSesion= ()=> {
    history.push("/login");
  }

  const irAPerfil=()=>{
    history.push("/perfil");
  }

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Cuenta</strong>
        </CDropdownItem>

        <CDropdownItem>
        <CButton onClick={irAPerfil}>
        <CIcon name="cil-user" className="mfe-2" />Perfil
          </CButton>{' '}
        </CDropdownItem>
        <CDropdownItem>
        <CButton onClick={cerrarSesion}>
        <CIcon name="cil-lock-locked" className="mfe-2" /> 
          Cerrar Sesión
        </CButton>{' '}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
