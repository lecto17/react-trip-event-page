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
                    return (
                        <LocationInfoContent content={el} key={el.id}/>
                    )
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

const Title = styled.h3`
    margin: 0;
    padding-top: 20px;
    text-align: center;
    text-shadow: 2px 2px 4px gray;
`;

const Bold = styled.h3`
    color: green;
    display: inline;
`;
const Text = styled.h3`
    display: inline;
`;

export default LocationInfo;