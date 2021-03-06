import React, { useState } from 'react';
import hamburger           from '../../../lib/icons/hamburger';
import close               from '../../../lib/icons/close';
import kakao               from '../../../lib/icons/kakaoplus';
import instagram           from '../../../lib/icons/instagram';
import S                   from './styles';


const Header = (props) => {

	const [menuOn, toggleMenu] = useState(false);

	return (
		<S.HeaderWrapper noneHeader={props.noneHeader}>
			<S.Hamburger onClick={() => toggleMenu(!menuOn)}>
				<img style={{ display: `${menuOn ? 'none' : 'block'}` }} src={hamburger} />
				<img style={{ display: `${menuOn ? 'block' : 'none'}` }} src={close} />
			</S.Hamburger>
			<S.Menu show={menuOn}>
				<ul>
					<li>
						<h3>문의하기</h3>
						<S.Kakao src={kakao} />
						<S.Text>
							카카오톡 친구추가 -
						</S.Text>
						<S.Text>
							23시52분
						</S.Text>

						<a href="https://www.instagram.com/23h52_/" target="_blank">
							<S.Instagram>
								<img src={instagram} />
								<span>
									23h52m_
								</span>
							</S.Instagram>
						</a>
					</li>
				</ul>
			</S.Menu>
		</S.HeaderWrapper>
	);

};

export default Header;