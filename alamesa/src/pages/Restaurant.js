import styled from 'styled-components'
import RestaurantLogo from '../image/RestaurantImage.png'
import { Restaurants } from '../components/Restaurants'

const Img = styled.img`
	width: 170px
`
const Button = styled.button`
	background-color: #2F80ED
	color: #F8F8F8
	border-radius: 10px
`
const RestaurantName = styled.div`
	padding: 17px 30px
	margin: 0px 80px
`

const RestaurantStyle = styled.div`
	display: flex
`

function Restaurant ( { name }){
		return (
			<div>
				<RestaurantStyle>
					<Img 
						src = {RestaurantLogo}
						alt = 'Restaurant Logo'
					/>
					<RestaurantName>
						<h1>{ name }</h1>
						<button 
							type = 'button'
						>Reservar Ahora
						</button>
					</RestaurantName>
				</RestaurantStyle>
			</div>
		)
	}
export default Restaurant
