import React from 'react';
import styled from 'styled-components';
import Category from './Category';

function MyWish(){
  return (
    <>
        <MyWishContainer>
            <MyTitle>
                # 내가 원하는 제주 여행은?
            </MyTitle>
            
        </MyWishContainer>
    </>
  );
};

const MyWishContainer = styled.div`
    background-color: #FEF2C6;
`;

const MyTitle = styled.h2`
    margin: 0;
    padding: 20px 0;
    text-align: center;
`;

export default MyWish;