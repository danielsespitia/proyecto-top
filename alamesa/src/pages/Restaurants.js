import React, { Component } from 'react'
import Restaurant  from '../components/Restaurant'
import styled from 'styled-components'
import { data } from '../Data'
import ContainerContent from '../components/styled/ContainerContent'  

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-grap: 20px;
`;
const ContainerList = styled(ContainerContent)`
  grid-column: 2/5;
  width: auto;
  height: 100%;
  margin: 20px;
`;
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 10px;
`;

class Restaurants extends Component {
	
	state = {
		restaurants: data
	}

	render () {
		const { restaurants } = this.state
		return (
			<Container>
				<ContainerList>
					<Section>
						{!!restaurants && restaurants.length > 0 && restaurants.map(({id, name, logo}) => {
							return (
								<Restaurant 
									key={id}
									name={name}
									logo={logo}
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
