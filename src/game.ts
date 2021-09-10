import Row from './row';
import Renderer from './renderer';
import Analyzer from './analyzer';

class Game
{
	private data: Row[] = [];
	private renderer: Renderer;
	private analyzer: Analyzer;
	private cyclingLoop;
	running: boolean = false;
	delay: number = 100;

	init(): void
	{
		console.log("starting the game...");
		this.addStartingData();
	}

	addStartingData()
	{
		for(let i = 1; i <= 50; i++)
		{
			this.addRow(i)
		}
	}

	private addRow(id: number): void
	{
		let row = new Row(id);
		this.data.push(row);
	}

	getData(): Row[]
	{
		return this.data;
	}

	reset(): void
	{
		this.renderer.reset();
		this.data = [];
		this.addStartingData();
	}

	render(): void
	{
		this.renderer = new Renderer();
		this.renderer.setGame(this);
		this.renderer.render();
	}

	analyzeData()
	{
		this.analyzer = new Analyzer();
		this.analyzer.setData(this.getData());
		this.analyzer.analyze();

		let result: Row[] = this.analyzer.getResult()
		for(let i = 0; i < result.length; i++)
		{
			for(let j = 0; j < result[i].getCells().length; j++)
			{
				result[i].getCells()[j].active = result[i].getCells()[j].next_active;
			}
		}
		this.data = result;
	}

	startCycle(): void
	{
		this.running = true;
		let _this = this;

		this.cyclingLoop = setInterval(() => {
			_this.processCycle();
		}, this.delay);
	}

	stopCycle()
	{
		this.running = false;
		clearInterval(this.cyclingLoop);
	}

	private processCycle(): void
	{
		this.render();
		this.analyzeData();
	}
}

export default Game;