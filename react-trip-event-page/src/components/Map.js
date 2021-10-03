import React from 'react';
import styled from 'styled-components';
import map from '../img/map.png'

function Map(){
  return (
    <>
      <MapContainer>
        <IMG src={map}/>
      </MapContainer>
    </>
  );
};

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IMG = styled.img`
  max-width: 80%;
`;

export default Map;