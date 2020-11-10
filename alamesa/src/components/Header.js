import Logo from '../image/Logo.png'

function Header(){
	return (
		<header className = 'header'>
			<div className = 'header__home'>
				<figure className = 'header__home-logo'>
					<img 
						src = { Logo }
						alt = 'Logo'
					/>
				</figure>
				<h1 className = 'header__home-slogan'>
					# Alamesa
				</h1>
			</div>
			<nav className = 'navigation'>
				<ul className = 'navigation__menu'>
					<li className = 'navigation__menu-item restaurant' >
						<a href = './'>Restaurantes</a>
					</li>
					<li className = 'navigation__menu-item sign-in' >
						<a href = './'>Iniciar Sesion</a>
					</li>
					<li className = 'navigation__menu-item sign-up' >
						<a href = './'>Crear Cuenta</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header

