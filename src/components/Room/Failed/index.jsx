import React from 'react';
import S     from './styles';

const Failed = ({ data }) => {

	return (
		<S.Wrapper>
			<S.Title>{data.title}</S.Title>
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

export default Failed;