import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import Style from './Components.modules.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className='missionsContainer'>
        <Title headline="Missões espaciais" />
        <div className='missionsContainerCard'>
          {missions.map((mission, index) => (<MissionCard
            key={ index }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />))}

        </div>
      </div>
    );
  }
}

export default Missions;
