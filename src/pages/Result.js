import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { ResultData } from '../assets/data/ResultData';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Content>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            src={resultData.image}
            width={350}
            height={350}
            className='rounded-circle'
          ></img>
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다.</Desc>
        <Button>테스트 다시하기</Button>
      </Content>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  height: 100vh
  width: 100%
`;
const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'IM_Bold';
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'IM_HyeMin';
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin: 20px 0px;
`;
