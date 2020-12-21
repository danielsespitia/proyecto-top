import ModalCompanion from '../components/Modals/ModalCompanion'
import SanitaryRegisterForm from '../components/SanitaryRegister/SanitaryRegisterForm';

function SanitaryRegisterCompanion() {

  return (
    <ModalCompanion>
      <SanitaryRegisterForm
        isUser = {false}
      >
      </SanitaryRegisterForm>
    </ModalCompanion>
  )
}

export default SanitaryRegisterCompanion