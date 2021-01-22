import MenuView from '../components/MenuRestaurant/MenuView';
import { getData } from '../store/actions/Menu.action';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PageLoading from '../components/PageLoading';

function MenuRestaurant() {

  const dispatch = useDispatch();
  
  const { dishesList, loading } = useSelector(({ menuReducer: { dishesList, loading}}) => ({ dishesList, loading }))

  useEffect(() => {
    dispatch(getData())
  }, [dishesList.length])
  
  if(loading) return <PageLoading/>

  return (
    <MenuView/>
  )
}

export default MenuRestaurant