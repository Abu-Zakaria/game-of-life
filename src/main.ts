import "./scss/main.scss";
import Game from './game';
import Renderer from './renderer';

const game: Game = new Game();
game.init();

const renderer : Renderer = new Renderer();
renderer.setGame(game);
renderer.render();