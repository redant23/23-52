import React, { useState } from 'react';
import hamburger           from '../../../lib/icons/hamburger';
import close               from '../../../lib/icons/close';
import kakao               from '../../../lib/icons/kakaoplus';
import S                   from './styles';


const Header = (props) => {

	const [menuOn, toggleMenu] = useState(false);

	return (
		<S.HeaderWrapper>
			<S.Hamburger onClick={() => toggleMenu(!menuOn)}>
				<img style={{ display: `${menuOn ? 'none' : 'block'}` }} src={hamburger} />
				<img style={{ display: `${menuOn ? 'block' : 'none'}` }} src={close} />
			</S.Hamburger>
			<S.Menu show={menuOn}>
				<ul>
					<li>
						<h3>힌트 요청</h3>
						<a href="http://pf.kakao.com/_Frkxjxb/chat" ><img src={kakao} /></a>
					</li>
				</ul>
			</S.Menu>
		</S.HeaderWrapper>
	);

};

export default Header;