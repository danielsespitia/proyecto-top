import Modal from '../components/Modals/Modal'
import SanitaryRegisterForm from '../components/SanitaryRegister/SanitaryRegisterForm';

function SanitaryRegisterCompanion() {

  return (
    <Modal>
      <SanitaryRegisterForm
        isUser = {false}
      >
      </SanitaryRegisterForm>
    </Modal>
  )
}

export default SanitaryRegisterCompanion