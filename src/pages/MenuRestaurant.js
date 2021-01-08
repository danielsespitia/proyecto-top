import MenuView from '../components/MenuRestaurant/MenuView';
import { getData } from '../store/actions/Menu.action';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function MenuRestaurant() {

  const dispatch = useDispatch();

  const { menuId } = useSelector(({ restaurantReducer: { menuId }}) => ({ menuId }))
  const { dishesList } = useSelector(({ menuReducer: { dishesList}}) => ({ dishesList }))

  useEffect(() => {
    dispatch(getData(menuId))
  }, [])

  console.log('here is the dish from component', dishesList)
  return (
    <>
    {!!dishesList && dishesList.length > 0 && dishesList.map(({_id, nameDish, price, description, category, image}) => {
      return ( 
        <MenuView
          key={_id}
          nameDish={nameDish}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      )
    })}
    </>
  )
}

export default MenuRestaurant