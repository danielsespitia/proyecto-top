import { v4 as uuidv4 } from 'uuid'
import RestaurantLogo from './image/RestaurantLogo.png'

export const data = [
  {
    id: uuidv4(),
    name: 'Mister Wok',
    logo: RestaurantLogo,
    deposit: '$48.000',
  },
  {
    id: uuidv4(),
    name: 'Tacos & Bar',
    logo: RestaurantLogo,
    deposit: '$60.000',
  },
  {
    id: uuidv4(),
    name: 'Sandwich Cubano',
    logo: RestaurantLogo,
    deposit: '$45.000',
  },
  {
    id: uuidv4(),
    name: 'Buffalo Wings',
    logo: RestaurantLogo,
    deposit: '$30.000',
  },
  {
    id: uuidv4(),
    name: 'Archies',
    logo: RestaurantLogo,
    deposit: '$65.000',
  },
]


