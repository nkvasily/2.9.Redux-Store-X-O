// src/reducers/gameReducer.js
// Редьюсер для игровой логики

import { MAKE_MOVE, RESTART_GAME } from '../actionTypes.js';

// Массив выигрышных комбинаций
const WIN_PATTERNS = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтальные
	[0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикальные
	[0, 4, 8], [2, 4, 6]             // Диагональные
];

// Чистая функция для проверки победителя
const checkWinner = (field) => {
	for (let i = 0; i < WIN_PATTERNS.length; i++) {
		const [a, b, c] = WIN_PATTERNS[i];
		if (field[a] !== '' && field[a] === field[b] && field[a] === field[c]) {
			return true;
		}
	}
	return false;
};

// Чистая функция для проверки ничьей
const checkDraw = (field) => {
	return field.every(cell => cell !== '') && !checkWinner(field);
};

// Начальное состояние игры
export const initialState = {
	currentPlayer: 'X',     // Текущий игрок (X или O)
	isGameEnded: false,     // Флаг окончания игры
	isDraw: false,          // Флаг ничьей
	field: Array(9).fill('') // Игровое поле (9 пустых ячеек)
};

// Редьюсер для игры
export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case MAKE_MOVE: {
			const { index, player } = action.payload;

			// Валидация хода (чистая логика)
			if (state.isGameEnded || state.isDraw || state.field[index] !== '') {
				return state; // Не меняем состояние если ход невозможен
			}

			// Создаем новое поле (иммутабельно)
			const newField = [...state.field];
			newField[index] = player;

			// Проверяем состояние игры после хода
			const hasWinner = checkWinner(newField);
			const isDrawGame = checkDraw(newField);

			// Возвращаем новое состояние
			return {
				...state,
				field: newField,
				isGameEnded: hasWinner,
				isDraw: isDrawGame,
				// Меняем игрока только если игра продолжается
				currentPlayer: (hasWinner || isDrawGame)
					? state.currentPlayer
					: (player === 'X' ? 'O' : 'X')
			};
		}

		case RESTART_GAME:
			// Сбрасываем игру в начальное состояние
			return initialState;

		default:
			return state;
	}
};
