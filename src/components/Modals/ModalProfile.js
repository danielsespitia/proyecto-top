import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../MenuItems';
import {
  ModalProfileContainer,
  ButtonContainer,
  ButtonClose,
} from './ModalStyles'

export function ModalProfile(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ModalProfileContainer>
      <ul
        onClick={handleClick}
        className={click ? 'modalProfile-menu clicked' : 'modalProfie-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link 
                className={item.cName} 
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </ModalProfileContainer>
  )
}