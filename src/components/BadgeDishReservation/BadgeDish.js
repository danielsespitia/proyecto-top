import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

function BadgeDish() {

  const data = useSelector((
    { menuReducer: {
      ...state
    }}) => {
      return { ...state }
    })

    const { nameDish, description, price, category, file, message } = data
  return(
    <article>
      <div>
        <input 
          type="checkbox"
        />
      </div>
      <figure>
        <img 
          src={file || "https://res.cloudinary.com/alamesa/image/upload/v1610557814/UI/The_Munchies_Desserts_lhtlwx.svg"}
          alt="Imagen de previsualización del plato"
        />
      </figure>
      <div>
        <p>Brownie</p>
        <p>$8000</p>
      </div>
      <div>
        <button>
          <FontAwesomeIcon icon={"arrow-circle-up"}/>
        </button>
        <button>
          <FontAwesomeIcon icon={"arrow-circle-down"}/>
        </button>
      </div>
      <div>
        <p>Cantidad</p>
        <p>0</p>
      </div>
      <FontAwesomeIcon icon={"utensils"}/>
    </article>
  )
}

export default BadgeDish