import "./scss/main.scss";
import Game from './game';
import Renderer from './renderer';
import Analyzer from './analyzer';

const game: Game = new Game();
game.init();

const renderer : Renderer = new Renderer();
renderer.setGame(game);
renderer.render();

const analyzer = new Analyzer();
analyzer.setData(game.getData());
analyzer.analyze();