import React, { Component } from 'react'
import  Restaurant  from '../components/Restaurant'
import styled from 'styled-components'
import { data } from '../Data'

const Section = styled.section`
	display: grid;
	grid-template-columns: repeat(3,1fr);
	grid-gap: 10px;
	margin: 40px;
`
class Restaurants extends Component {
	
	state = {
		name: data
	}

	render () {
		const { name } = this.state
		return (
			<Section>
				{!!name && name.length > 0 && name.map(({ name }) => {
					return (
						<Restaurant 
							name = { name }
						/>
					)
				})}
			</Section>
		)
	}
}

export default Restaurants
