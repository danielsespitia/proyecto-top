import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export function ListShoppingCart () {
  return(
    <section>
      <span>
        <h1>Mi carrito</h1>
        <FontAwesomeIcon icon={faShoppingCart}/>
        <hr></hr>
      </span>
      <table>
        <tr>
          <td>Pago minimo</td>
          <td>$48.000</td>
        </tr>
      </table>
    </section>

  )
}
