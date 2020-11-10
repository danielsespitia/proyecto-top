import Logo from '../image/Logo.png'
import styled from 'styled-components'

const ContainerHeader = styled.header`
	display: grid;
	box-shadow: 0px 0px 4px 4px #707070;
	background-color: #f8f8f8;
	grid-template-columns: 30% 70%;
	grid-template-rows: 60px;
`
const HeaderHome = styled.div`
	display: flex;
	width: 40vw;
`
const Img = styled.img`
	width: 50px;
`
const NavigationMenu = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-between;
`


function Header(){

	return (
		<ContainerHeader>
			<HeaderHome>
				<figure className = 'header__home-logo'>
					<Img 
						src = { Logo }
						alt = 'Logo'
					/>
				</figure>
				<h1 className = 'header__home-slogan'>
					# Alamesa
				</h1>
			</HeaderHome>
			<nav className = 'navigation'>
				<NavigationMenu>
					<li className = 'navigation__menu-item restaurant' >
						<a href = './'>Restaurantes</a>
					</li>
					<li className = 'navigation__menu-item sign-in' >
						<a href = './'>Iniciar Sesion</a>
					</li>
					<li className = 'navigation__menu-item sign-up' >
						<a href = './'>Crear Cuenta</a>
					</li>
				</NavigationMenu>
			</nav>
		</ContainerHeader>
	)
}

export default Header

