import React, { useEffect, useState } from 'react';
import { Formik }                     from 'formik';
import S                              from './styles';
import Success                        from './Success';
import Failed                         from './Failed';
import Stopwatch                      from '../../lib/Stopwatch';

const Room = ({ data }) => {

  const [currentStep, setCurrentStep] = useState(0);
  const [onSuccess, setOnSuccess]     = useState(false);
  const [onFailed, setOnFailed]       = useState(false);
  const [leftTime, setLeftTime]       = useState(null);

  const log = JSON.parse(localStorage.getItem(data._id));
  const steps = data.steps;
  const step = steps[currentStep];

  const next = () => {
    const questionTotal = steps.filter(step => step.answer).length;

    if (questionTotal === currentStep) {
      setOnSuccess(true);
      setTimeout(() => {
        localStorage.removeItem(data._id);
      }, 2000);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const timeOver = () => {
    setOnFailed(true);
  };

  const confirmAnswer = (answer, resetForm) => {

    if (answer.toUpperCase() === step.answer) {
      next();
      resetForm();
    } else {
      alert('틀렸습니다. 다시 풀어보세요');
      resetForm();
    }
  }

  const writeLog = () => {
    if (leftTime) {
      localStorage.setItem(data._id, JSON.stringify({
        leftTime: {
          raw: leftTime.raw
        },
        stage: {
          current: currentStep
        },
      }));
    }
  };

  useEffect(() => {

    if (leftTime && !leftTime.minutes && !leftTime.seconds) {
      timeOver();
      setTimeout(() => {
        localStorage.removeItem(data._id);
      }, 2000);
    }

    writeLog();

  }, [leftTime]);

  useEffect(() => {

    if (log) {
      setCurrentStep(log.stage.current);
    }

  }, []);

  if (!data) return null;

  return (
    <S.Wrapper coverUrl={step.image}>
      {
        onSuccess &&
        <Success
          data         = {data.successView}
          completeTime = {leftTime}
        />
      }
      {
        onFailed &&
        <Failed
          data={data.failView}
        />
      }
      <S.Count>
        {
          (!onSuccess && !onFailed) &&
          <Stopwatch
            currentTime = {(time, rawTime) => setLeftTime({...time, raw: rawTime})}
            time        = {log ? Number(log.leftTime.raw) : data.limit * 60}
          />
        }
      </S.Count>
      <S.Item>
        <S.Question>
          <img src={step.question}/>
        </S.Question>
        <S.TextBox>
          <S.Text>{step.text}</S.Text>
          <S.NextActions>
            {
              !!step.input.length &&
                <Formik
                  initialValues={{ answer: '' }}
                  onSubmit={(values, { resetForm, ...actions }) => {

                    setTimeout(() => {
                      confirmAnswer(values.answer, resetForm);
                      actions.setSubmitting(false);
                    }, 1000);
                  }}
                >
                  { ({resetForm, ...props}) =>(
                    <S.Form onSubmit={props.handleSubmit}>
                      { step.input.map((inputInfo, i) => (
                        <input
                          key      = {i}
                          type     = {inputInfo.type}
                          onChange = {props.handleChange}
                          onBlur   = {props.handleBlur}
                          value    = {props.values.answer}
                          name     = "answer"
                        />
                      ))}
                      {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                      <button type="submit">입력</button>
                    </S.Form>
                  )
                }
                </Formik>
            }
            {
              !step.input.length &&
              <S.Button onClick={next}>다음</S.Button>
            }
          </S.NextActions>
        </S.TextBox>

      </S.Item>

    </S.Wrapper>
  );
};

export default Room;