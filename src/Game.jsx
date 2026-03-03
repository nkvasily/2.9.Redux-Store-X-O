// src/Game.jsx
import { useDispatch } from 'react-redux';
import { ConnectedInformation } from './components/information/ConnectedInformation.jsx';
import { ConnectedField } from './components/field/ConnectedField.jsx';
import { GameLayout } from './components/game/gameLayout.jsx';
import { restartGame } from './actions.js';

export const Game = () => {
	const dispatch = useDispatch();

	const handleRestart = () => {
		dispatch(restartGame()); // Синхронный перезапуск
	};

	return (
		<GameLayout
			information={<ConnectedInformation />}
			field={<ConnectedField />}
			onRestart={handleRestart}
		/>
	);
};
