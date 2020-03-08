import React from 'react';
import S     from './styles';

const Success = ({ data, completeTime }) => {

	if (!completeTime) return null;

	return (
		<S.Wrapper>
			<S.Title>{data.title}</S.Title>
			<S.ClearTime>{completeTime.minutes}'{completeTime.seconds}" 남기고 성공</S.ClearTime>
			<S.Description>{data.text}</S.Description>
			{
				data.buttons.map((button, i) => (
					<S.Button
						key={i}
					>
						<a href={button.url} target="_blank"><img src={button.image} /></a>
					</S.Button>
				))
			}
		</S.Wrapper>
	);

};

export default Success;