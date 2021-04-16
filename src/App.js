import React from 'react';
import ReactSwipe from 'react-swipe';
import SwypeLeft from './components/SwypeLeft';
import SwypeRight from './components/SwypeRight';
import { PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import { Icon28SettingsOutline } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

const App = () => {
	let reactSwipeEl;
	return (
		<>
			<PanelHeader
				className="Head_desk"
				right={
					<PanelHeaderButton>
						<Icon28SettingsOutline />
					</PanelHeaderButton>
				}
			>
				Swipe
			</PanelHeader>
			<div className="btn">
				<button className="btn-style" onClick={() => reactSwipeEl.prev()}>
					back
				</button>
				<button className="btn-style" onClick={() => reactSwipeEl.next()}>
					next
				</button>
			</div>
			<div>
				<ReactSwipe className="carousel" swipeOptions={{ continuous: false }} ref={(el) => (reactSwipeEl = el)}>
					<div className="state">
						<SwypeLeft />
					</div>
					<div className="state">
						<SwypeRight />
					</div>
				</ReactSwipe>
			</div>
		</>
	);
};
export default App;
