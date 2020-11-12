import React, { Component } from 'react'
import  Restaurant  from '../components/Restaurant'
import styled from 'styled-components'
import { data } from '../Data'
import ContainerContent from '../components/styled/ContainerContent'  

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4,1fr);
	grid-grap: 20px;
`
const ContainerList = styled(ContainerContent)`
	grid-column: 2/5;
	width: auto;
	margin: 20px;
`

const Section = styled.section`
	display: grid;
	grid-template-columns: repeat(3,1fr);
	grid-gap: 10px;
`
class Restaurants extends Component {
	
	state = {
		name: data
	}

	render () {
		const { name } = this.state
		return (
			<Container>
				<ContainerList>
					<Section>
						{!!name && name.length > 0 && name.map(({name}) => {
							return (
								<Restaurant 
									name={name}
								/>
							)
						})}
					</Section>
				</ContainerList>
			</Container>
		)
	}
}

export default Restaurants
