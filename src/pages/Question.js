import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { QuestionData } from '../assets/data/QuestionData';

function Question() {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: 'EI', score: 0 },
    { id: 'SN', score: 0 },
    { id: 'TF', score: 0 },
    { id: 'JP', score: 0 },
  ]);

  const navigate = useNavigate();

  console.log(totalScore);

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      navigate('/result');
    }
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant='danger'
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: '20px' }}
      />
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <Button
          onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          style={{ width: '40%', minHeight: '200px', fontSize: '15pt' }}
        >
          {QuestionData[questionNo].answerA}
        </Button>
        <Button
          onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          style={{
            width: '40%',
            minHeight: '200px',
            fontSize: '15pt',
            marginLeft: '20px',
          }}
        >
          {QuestionData[questionNo].answerB}
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
