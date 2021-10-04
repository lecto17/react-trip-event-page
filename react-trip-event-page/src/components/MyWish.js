import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import CategoryContent from './CategoryContent';

function MyWish({ category, cateState }){
  return (
    <>
        <MyWishContainer>
            <MyTitle>
                # 내가 원하는 제주 여행은?
            </MyTitle>
            <Category category={category} />
            <CategoryContent cateState={cateState} category={category} />
            <MoreButton>제주 상품 더 보기</MoreButton>
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

const MoreButton = styled.button `
    width: 250px;
    height: 40px;
    color: white;
    font-weight: bold;
    background-color: red;
    border: none;
    border-radius: 30px;
    font-size: 16px;
`

export default MyWish;