import React from 'react';
import styled from 'styled-components';

function Category({ category, cateState, setCateState}){
  return (
    <>
      <CateBtnWrapper>
        {
          category.map(el => {
            return (
              <CategoryButton 
                key={el.id} 
                active={el.id===cateState} 
                onClick={updateState(el.id, setCateState)}
              >
                {el.tag}
              </CategoryButton>
            )
          })
        }
      </CateBtnWrapper>  
    </>
  );
};

const updateState = (id, setCateState) => (event) => {
  setCateState(id);
}

const CateBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 30px;
`;

const CategoryButton = styled.button`
    border: 2px solid orange;
    background-color: ${props => props.active ? 'orange' : 'white'};
    color: ${props => props.active ? 'white' : 'orange'};
    width: 150px;
    height: 50px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
`;

export default Category;