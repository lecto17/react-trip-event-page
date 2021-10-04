import React from 'react';
import styled from 'styled-components';


function CategoryContent({ category, cateState }){
    const comma = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  return (
    <>
        <CateContentWrapper>
        {
            category.map(el => {
                return el.id === cateState ?
                (
                    el.contents.map(e => {
                        return (
                            <ContentWrapper>
                                <div>
                                    <ContentImg src={e.img_url} />
                                </div>
                                <div>
                                    <TicketType>{e.ticket_type}</TicketType>
                                    <DiscountRate>{e.discount_rate}</DiscountRate>
                                </div>
                                <div>
                                    <ContentLocation>[{e.location}]</ContentLocation>
                                    {e.place}
                                </div>
                                <div>
                                    <OriginCost>{comma(e.origin_cost)}원</OriginCost>
                                    <b> {comma(e.discount_cost)}원~</b>
                                </div>

                            </ContentWrapper>   
                        )
                    })
                ) : (<></>) 
            })
        }
        </CateContentWrapper>
    </>
  );
};

const CateContentWrapper = styled.div`
    margin: 30px;
    padding: 20px 15px;
    border-radius: 10px;
    background-color: white;
`;

const ContentImg = styled.img`
  width: 150px;
  height: 120px;
  border-radius: 15px;
`;

const TicketType = styled.h5`
    margin: 0;
    display: inline;
`;

const DiscountRate = styled.div`
    display: inline;
    padding: 2px;
    color: white;
    background-color: orange;
    border-radius: 25%;
    font-weight: bold;
`;

const ContentLocation = styled.h5`
    margin: 0;
`;

const ContentWrapper = styled.div`
    display: inline-block;
    width: 45%;
`;

const OriginCost = styled.span `
    text-decoration: line-through
`;

export default CategoryContent;