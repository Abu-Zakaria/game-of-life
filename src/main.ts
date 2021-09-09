import "./scss/main.scss";
import Game from './game';
import Renderer from './renderer';
import Analyzer from './analyzer';
import Row from './row';
import $ from 'cash-dom';

const game: Game = new Game();
game.init();

$('#start_btn').on('click', () => {
	if(!game.running)
		game.startCycle();
})

$('#stop_btn').on('click', () => {
	game.stopCycle();
})