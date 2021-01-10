import MenuView from '../components/MenuRestaurant/MenuView';
import { getData } from '../store/actions/Menu.action';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function MenuRestaurant() {

  const dispatch = useDispatch();

  const { menuId } = useSelector(({ restaurantReducer: { menuId }}) => ({ menuId }))
 
  useEffect(() => {
    dispatch(getData(menuId))
  }, [])

  return (
    <>
      <MenuView/>
    </>
  )
}

export default MenuRestaurant