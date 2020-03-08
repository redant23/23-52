import React    from 'react';
import { Link } from 'react-router-dom';
import S        from './styles';

const Rooms = ({ datas }) => {

  if (!datas.length) return null;

  const getEscapeRatio = ({ escape, joined }) => {
    return joined !== 0 ? escape/joined * 100 : 0;
  };

  return (
    <S.Wrapper>

      {
        datas.map(({ _id, thumbnail, limit, joined, escape }) => (
          <S.Room key={_id} url={thumbnail}>
            <S.Link to={`room/${_id}`}>
                <S.TextBox>
                    <S.TimeLimit>{limit}</S.TimeLimit>
                    <S.Line />
                    <S.EscapeRatio>탈출비율 {getEscapeRatio({ escape, joined })}%</S.EscapeRatio>
                </S.TextBox>
            </S.Link>
          </S.Room>
        ))
      }

    </S.Wrapper>
  );
};

export default Rooms;