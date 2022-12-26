import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/ggompang.jpeg';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Content>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img
            src={PangImage}
            width={350}
            height={350}
            className='rounded-circle'
          ></img>
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기</Desc>
        <Button>테스트 시작하기</Button>
      </Content>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  height: 100vh
  width: 100%
`;
const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
