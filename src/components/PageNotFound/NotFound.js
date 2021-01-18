import { Link } from 'react-router-dom';
import { ContainerError, ContainerImage } from './NotFoundStyles';

function PageNotFound(props) {
  return (
    <>
      <ContainerError className="Error404___container">
        <div className="Error404___container-left">
          <div className="Error404___container-content">
            <h3>Ha ocurrido algo y no podemos acceder a tu solicitud</h3>
            <Link to="/" className="btn btn-primary">
              Regresa al home
            </Link>
          </div>
        </div>
        <ContainerImage>
          <img 
            src="https://res.cloudinary.com/alamesa/image/upload/c_scale,w_1000/v1610980517/UI/2668387_hj0hds.jpg"
            alt="Imagen render error"
          />
          <figcaption>
            <a href="https://www.freepik.com/vectors/business">Business vector created by pikisuperstar - www.freepik.com</a>
          </figcaption>
        </ContainerImage>
      </ContainerError>
    </>
  );
}

export default PageNotFound