import Row from './row';
class Game
{
	private data: Row[] = [];

	init(): void
	{
		console.log("starting the game...");
		this.addStartingData();
	}

	addStartingData()
	{
		for(let i = 1; i <= 5; i++)
		{
			this.addRow(i)
		}
	}

	private addRow(id: number): void
	{
		this.data.push(new Row(id));
	}

	getData(): Row[]
	{
		return this.data;
	}
}

export default Game;