// src/components/information/ConnectedInformation.jsx
import { useSelector } from 'react-redux';
import { InformationLayout } from './informationLayout.jsx';
import { getGameStatus } from '../../selectors.js';

export const ConnectedInformation = () => {
	// Используем селектор для получения статуса
	const status = useSelector(getGameStatus);

	return <InformationLayout status={status} />;
};
