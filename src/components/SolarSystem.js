import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Style from './Components.modules.css';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className='planetsContainer'>
        <Title headline="Planetas" />
        <div className='planetsContainerCards'>
          {planets.map((planet, index) => (<PlanetCard
            key={ index }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}

        </div>
      </div>
    );
  }
}

export default SolarSystem;
