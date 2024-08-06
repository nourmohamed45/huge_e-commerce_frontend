import { Container } from "react-bootstrap"
import ChoosePayMethod from "../../Components/Checkout/ChoosePayMethod"
import { ToastContainer } from "react-toastify"


const ChoosePayMethodPage = () => {
  return (
    <Container style={{minHeight: "680px"}}>
      <ChoosePayMethod />
      {/* Notifications */}
      <ToastContainer autoClose={2000} />
    </Container>
  )
}

export default ChoosePayMethodPage