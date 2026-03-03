// src/components/field/ConnectedField.jsx
import { useDispatch, useSelector } from 'react-redux';
import { FieldLayout } from './fieldLayout.jsx';
import { makeMove } from '../../actions.js';
import { getField, getIsGameEnded, getIsDraw, getCurrentPlayer } from '../../selectors.js';

export const ConnectedField = () => {
	const dispatch = useDispatch();

	// Получаем все необходимые данные из store через селекторы
	const field = useSelector(getField);
	const isGameEnded = useSelector(getIsGameEnded);
	const isDraw = useSelector(getIsDraw);
	const currentPlayer = useSelector(getCurrentPlayer);

	// Обработчик клика по ячейке
	const handleCellClick = (index) => {
		// Проверяем возможность хода
		if (isGameEnded || isDraw || field[index] !== '') {
			return; // Игнорируем клик если ход невозможен
		}

		// Отправляем действие (синхронно)
		dispatch(makeMove(index, currentPlayer));
	};

	return (
		<FieldLayout
			field={field}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			onCellClick={handleCellClick}
		/>
	);
};
