// src/actions.js
// Генераторы действий (action creators)

import { MAKE_MOVE, RESTART_GAME } from './actionTypes.js';

// Генератор действия для хода
export const makeMove = (index, player) => ({
	type: MAKE_MOVE,
	payload: { index, player }
});

// Генератор действия для перезапуска
export const restartGame = () => ({
	type: RESTART_GAME
});
