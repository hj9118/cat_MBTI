import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { ResultData } from '../assets/data/ResultData';
import { useNavigate, useSearchParams } from 'react-router-dom';
import KakaoShareButton from '../component/KakaoShareButton';

const Result = () => {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate('/');
  };

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
            alt='고양이 사진'
            src={resultData.image}
            width={350}
            height={350}
            className='rounded-circle'
          ></img>
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다.</Desc>
        <ButtonGroup>
          <Button style={{ fontfamliy: 'IM_HyeMin', width: 170 }} onClick={handleClickBtn}>테스트 다시하기</Button>
          <KakaoShareButton />
        </ButtonGroup>
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
  font-family: 'IM_HyeMin';
  font-weight: bold;
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

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
`;
