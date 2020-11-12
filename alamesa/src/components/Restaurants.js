import  Restaurant  from '../pages/Restaurant'
import styled from 'styled-components'


const ListRestaurantSection = styled.section`
	display: grid;
	grid-template-columns: repeat(3,1fr);
	grid-gap: 10px;
	margin: 40px;
`

const data = [
	{
		name: 'Mister Wok',
	},
	{
		name: 'Tacos & Bar',
	},
	{
		name: 'Sandwich Cubano',
	},
	{
		name: 'Buffalo Wings',
	},
	{
		name: 'Archies',
	},
]


export function Restaurants () {
		//console.log(name)
		return (
			<ListRestaurantSection>
					{data.map(({ name }) => {
						return (
						<Restaurant 
							name = { name }
						/>
						)
					})}
			</ListRestaurantSection>
		)
	}
export default Restaurants
