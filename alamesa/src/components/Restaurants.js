import  Restaurant  from '../pages/Restaurant'

const data = [
	{
		name: 'Pollito Bogota D.C',
	},
	{
		name: 'Pollito Rico',
	},
	{
		name: 'Pollito y algo mas',
	},
]


export function Restaurants () {
		//console.log(name)
		return (
			<div>
					{data.map(({ name }) => {
						return (
						<Restaurant 
							name = { name }
						/>
						)
					})}
			</div>
		)
	}
export default Restaurants
