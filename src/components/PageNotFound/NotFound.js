import { ContainerError, Image, ContainerText, RedirectText } from './NotFoundStyles';

function PageNotFound(props) {
  return (
    <>
      <ContainerError className="Error404___container">
        <div className="Error404___container-left">
          <ContainerText className="Error404___container-content">
            <h3>Ha ocurrido algo y no podemos acceder a tu solicitud</h3>
            <RedirectText to="/" className="btn btn-primary">
              Regresa al home
            </RedirectText>
          </ContainerText>
        </div>
        <figure>
          <Image 
            src="https://res.cloudinary.com/alamesa/image/upload/c_scale,w_1000/v1610980517/UI/2668387_hj0hds.jpg"
            alt="Imagen render error"
          />
          <figcaption>
            <a href="https://www.freepik.com/vectors/business">Business vector created by pikisuperstar - www.freepik.com</a>
          </figcaption>
        </figure>
      </ContainerError>
    </>
  );
}

export default PageNotFound