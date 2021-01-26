import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext, useMemo, useEffect } from "react";
import styled from 'styled-components';
import {
  HeaderHomeLogo,
  NavigationMenuItem,
  Anchor,
  AnchorSignIn,
  AnchorSignUp,
  ContainerActions,
  AnchorProfile,
  AnchorLogout,
  ContainerSearch,
  InputSearch,
  ContainerInputSearch,
  SearchBar,
  ContainerMiniSearch,
} from './HeaderStyles';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../store/AuthContext';
import { Link } from 'react-router-dom';
import { ModalProfile } from '../Modals/ModalProfile';
import MiniSearchRestaurant from '../MiniSearchRestaurant';
import { getListRestaurants } from '../../store/actions/Reservation.actions';
import { setSearch } from '../../store/actions/Restaurant.actions';

const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 35px;
`;

const ButtonMenu = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ContainerModalMenu = styled.div`
  background: #d7d2d2;
  position: absolute;
  top: 77px;
  right: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const ItemsModal = styled.div`
  margin: 15px auto;
`;

const LogoutItem = styled(AnchorLogout)`
  margin-right: 0;
`;

const SearchItem = styled(ContainerSearch)`
  margin-right: 0;
`;

const SmallScreensNavbar = () => {

  const [modalMenu, setModalMenu] = useState(false)
  const { isToken, logout, } = useContext(AuthContext);
  
  const dispatch = useDispatch();

  const [modalProfile, setModalProfile] = useState(false);

  const handleClick = () => setModalProfile(true);

  const onMouseEnter = () => {
    if (window.innerWidth) {
      setModalProfile(false);
    } else {
      setModalProfile(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth) {
      setModalProfile(false);
    } else {
      setModalProfile(false);
    }
  };

  useEffect(() => {
    dispatch(getListRestaurants())
  }, [dispatch]);

  const data = useSelector(
    ({reservationReducer: {
      ...state
    }}) => {
      return { ...state }
  });

  const { search } = useSelector(({ restaurantReducer: { search }}) => ({ search }))

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value))
  };

  const filteredRestaurants = useMemo(() => 
    data.restaurantList.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(search.toLowerCase());
    }),
      [data, search]
  );

  const onOpenMenu = () => {
    setModalMenu(!modalMenu)
  }

  return (
    <ContainerMenu>
      {isToken ? (
      <>
        <ContainerActions>
          <NavigationMenuItem
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleClick}
            >
            <AnchorProfile
              as="a"
            >
                Profile
              <HeaderHomeLogo className="header__home-logo">
                <FontAwesomeIcon icon="user-circle" />
              </HeaderHomeLogo>
            </AnchorProfile>
            {modalProfile && <ModalProfile/>}
          </NavigationMenuItem>
        </ContainerActions>
      </>
    ) : (
        <>
          <ContainerActions>
            <AnchorSignIn as={Link} to="/sign-in">Iniciar sesión</AnchorSignIn>
            <AnchorSignUp as={Link} to="/sign-up">Crear cuenta</AnchorSignUp>
          </ContainerActions>
        </>
      )}
      <ButtonMenu 
        onClick={onOpenMenu}
        className="Header_Small">
        <FontAwesomeIcon icon={"bars"} size="2x"/>
      </ButtonMenu>
      {modalMenu ? (
        <ContainerModalMenu>
          <ItemsModal>
            <Anchor to="/restaurants">Restaurantes</Anchor>
          </ItemsModal>
          <ItemsModal>
            <LogoutItem as={Link} to="/" onClick={logout}>Cerrar sesión</LogoutItem>
          </ItemsModal>
          <ItemsModal>
            <SearchItem>
              <ContainerInputSearch>
                <InputSearch
                  type="text"
                  className="header__search"
                  placeholder="Buscar un restaurante"
                  value={search}
                  onChange={handleSearch}
                />
                <SearchBar icon="search"/>
              </ContainerInputSearch>
              <ContainerMiniSearch>
                {search.length > 0 ? filteredRestaurants.map(({ _id, name, deposit, menu }) => {
                  return (
                    <MiniSearchRestaurant
                      key={_id}
                      id={_id}
                      name={name}
                      deposit={deposit}
                      menu={menu}
                    />
                  )
                }) : (null)}
              </ContainerMiniSearch>
            </SearchItem>
          </ItemsModal>
        </ContainerModalMenu>
      ) : (null)}
    </ContainerMenu>
  )
}

export default SmallScreensNavbar