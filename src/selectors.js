// src/selectors.js
// Селекторы для получения данных из store

// Простые селекторы
export const getField = (state) => state.field;
export const getCurrentPlayer = (state) => state.currentPlayer;
export const getIsGameEnded = (state) => state.isGameEnded;
export const getIsDraw = (state) => state.isDraw;

// Составной селектор для статуса игры
export const getGameStatus = (state) => {
	const { isDraw, isGameEnded, currentPlayer } = state;

	if (isDraw) {
		return 'Ничья';
	} else if (isGameEnded) {
		return `Победа: ${currentPlayer}`;
	} else {
		return `Ходит: ${currentPlayer}`;
	}
};
