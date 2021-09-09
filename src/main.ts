import "./scss/main.scss";
import Game from './game';
import Renderer from './renderer';
import Analyzer from './analyzer';
import Row from './row';

const game: Game = new Game();
game.init();

game.startCycle();