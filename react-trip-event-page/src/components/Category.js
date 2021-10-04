import React from 'react';
import styled from 'styled-components';

function Category({category}){
  return (
    <>
      
      <CateBtnWrapper>
        {
          category.map(el => {
            return (
              <CategoryButton key={el.id}>
                {el.tag}
              </CategoryButton>
            )
          })
        }
      </CateBtnWrapper>
      
    </>
  );
};

const CateBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const CategoryButton = styled.button`
    border: 2px solid orange;
    background-color: white;
    color: orange;
    width: 150px;
    height: 50px;
`;

export default Category;