import React from 'react';
import styled from 'styled-components';
import { Button, ProgressBar } from 'react-bootstrap';
import { QuestionData } from '../assets/data/QuestionData';

function Question() {
  return (
    <Wrapper>
      <ProgressBar
        striped
        variant='danger'
        now={80}
        style={{ marginTop: '20px' }}
      />
      <Title>{QuestionData[0].title}</Title>
      <ButtonGroup>
        <Button style={{ width: '40%', minHeight: '200px', fontSize: '15pt' }}>
          {QuestionData[0].answerA}
        </Button>
        <Button
          style={{
            width: '40%',
            minHeight: '200px',
            fontSize: '15pt',
            marginLeft: '20px',
          }}
        >
          {QuestionData[0].answerB}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
}

export default Question;

const Wrapper = styled.div`
  height: 100vh
  width: 100%
`;

const Title = styled.div`
  font-size: 30pt;
  text-align: center;
  margin-top: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;
