import React from 'react';
import styled from 'styled-components';

function LocationInfoContent({content}){
  return (
    <>
      <LocContentContainer>
        {
          content.id % 2 === 1 ? (
            <>
              <ImgWrapper noLeftMargin>
                <ContentImg src={content.img_url}/>
              </ImgWrapper>
              <ContentWrapper>
                <div>
                  <ContentId>{ content.id < 10 ? "0"+content.id : content.id}.</ContentId>
                  <h2 style={{display: "inline"}}>{content.title}</h2>
                </div>
                <div>
                  <ContentData>{content.desc}</ContentData>
                  <Sight>추천명소: {content.sights}</Sight>
                </div>  
              </ContentWrapper>
            </>
          ) : (
            <>
              <ContentWrapper>
                <div>
                  <ContentId>{ content.id < 10 ? "0"+content.id : content.id}.</ContentId>
                  <h2 style={{display: "inline"}}>{content.title}</h2>
                </div>
                <div>
                  <ContentData>{content.desc}</ContentData>
                  <Sight>추천명소: {content.sights}</Sight>
                </div>  
              </ContentWrapper>
              <ImgWrapper>
                <ContentImg src={content.img_url}/>
              </ImgWrapper>
            </>
          )
        }
        </LocContentContainer>
    </>
  );
};

const LocContentContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  display: inline;
  margin: ${(props) => (props.noLeftMargin ? '0 20px 0 0' : '0 0 0 20px')};
`;

const ContentImg = styled.img`
  width: 100px;
  height: 100px;
  border: 2px solid #B8D563;
  border-radius: 50%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const ContentId = styled.h2`
  color: orange;
  display: inline;
`;


const ContentData = styled.h6`
  margin: 0;
  display: inline-block; 
  width: 250px; 
  
  white-space: normal; 
  // line-height: 1.2;
  // height: 3.6em;
`;

const Sight = styled.h6`
  margin: 0;
  color: #9BB65D;
`;

export default LocationInfoContent;