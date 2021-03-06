import { useContext, useState, useMemo, useEffect, } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../store/AuthContext';
import { Link } from 'react-router-dom';
import { ModalProfile } from '../Modals/ModalProfile';
import {
  ContainerHeader,
  HeaderHome,
  Img,
  HeaderHomeLogo,
  HeaderHomeSlogan,
  NavigationMenu,
  NavigationMenuItem,
  ContainerNavActions,
  Navigation,
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
import MiniSearchRestaurant from '../MiniSearchRestaurant';
import { getListRestaurants } from '../../store/actions/Reservation.actions';
import { setSearch } from '../../store/actions/Restaurant.actions';
import { useWindowWidthAndHeight } from '../../hooks/useWindowWidthAndHeight';
import SmallScreensNavbar from './SmallScreensNavBar';

function Header() {
  const { isToken, logout, } = useContext(AuthContext);
  
  const dispatch = useDispatch();

  const [modalProfile, setModalProfile] = useState(false);
  const [width] = useWindowWidthAndHeight();

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

  return (
    <ContainerHeader>
      <HeaderHome to="/">
        <HeaderHomeLogo className="header__home-logo">
          <Img 
          src="https://res.cloudinary.com/alamesa/image/upload/v1610557862/UI/logoalamesa_myz3ff.svg" 
          alt="Logo" 
          />
        </HeaderHomeLogo>
        <HeaderHomeSlogan className="header__home-slogan">
          # Alamesa
        </HeaderHomeSlogan>
      </HeaderHome>
      { width > 1000 ? 
      <>
      <ContainerNavActions>
        <Navigation className="navigation">
          <NavigationMenu>
            <NavigationMenuItem className="navigation__menu-item restaurant">
              <Anchor to="/restaurants">Restaurantes</Anchor>
            </NavigationMenuItem>
          </NavigationMenu>
        </Navigation>
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
              <NavigationMenuItem>
                <AnchorLogout as={Link} to="/" onClick={logout}>Cerrar sesión</AnchorLogout>
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
      </ContainerNavActions>
      <ContainerSearch>
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
      </ContainerSearch>
      </>
        : <SmallScreensNavbar/>
      }
    </ContainerHeader>
  );
}

export default Header;
