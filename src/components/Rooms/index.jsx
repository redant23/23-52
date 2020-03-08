import React    from 'react';
import { Link } from 'react-router-dom';
import S        from './styles';

const Rooms = ({ datas }) => {

  if (!datas.length) return null;

  const getEscapeRatio = ({ escape, joined }) => {
    return joined !== 0 ? Math.floor(escape/joined * 100) : 0;
  };

  return (
    <S.Wrapper>

      {
        datas.map(({ state, _id, thumbnail, limit, joined, escape }) => (
          <S.Item key={_id}>
            {
              state === 'activated' &&
              <S.Link to={`room/${_id}`}>
                <S.Room url={thumbnail}>
                    <S.TextBox>
                        <S.TimeLimit>{limit}</S.TimeLimit>
                        <S.Line />
                        <S.EscapeRatio>탈출비율 {getEscapeRatio({ escape, joined })}%</S.EscapeRatio>
                    </S.TextBox>
                </S.Room>
              </S.Link>
            }
            {
              state === 'deactivated' &&
              <S.Room url={thumbnail}>
                  <S.Layer>준비중</S.Layer>
                  <S.TextBox>
                      <S.TimeLimit>{limit}</S.TimeLimit>
                      <S.Line />
                      <S.EscapeRatio>탈출비율 {getEscapeRatio({ escape, joined })}%</S.EscapeRatio>
                  </S.TextBox>
              </S.Room>
            }
          </S.Item>
        ))
      }

    </S.Wrapper>
  );
};

export default Rooms;