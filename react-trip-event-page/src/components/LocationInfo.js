import React from 'react';
import Map from './Map';
import LocationInfoContent from './LocationInfoContent';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const LocationInfo = ({location}) => {
  return (
    <>
        <LocContainer>
            <Title><Bold>제주 쉬기좋은</Bold><Text> 지역별 안내</Text></Title>
            <h6>""</h6>
            <Map/>
        
            {   
                location.map((el) => {
                    <LocationInfoContent content={el}/>
                })
            }
        </LocContainer>
    </>
  );
};

// LocationInfo.defaultProps = {
//     location: {
//         data : {
            
//         }
//     }
// }

// LocationInfo.propTypes = {
//     location: Proptypes.object,
//     data: Proptypes.object
// }
const LocContainer = styled.div`
    background-color: #FEF2C6;
    padding: 30px 0 40px;
`;

const Title = styled.h2`
    margin: 0;
    padding-top: 20px;
    text-align: center;
`;

const Bold = styled.h2`
    color: green;
    display: inline;
`;
const Text = styled.h2`
    display: inline;
`;

export default LocationInfo;