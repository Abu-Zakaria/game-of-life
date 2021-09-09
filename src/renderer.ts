import Game from "./game";
import Row from "./row";
import $ from 'cash-dom';

class Renderer
{
	game: Game;

	constructor()
	{
		console.log('booting renderer...');
	}

	setGame(game: Game): void
	{
		this.game = game;
	}

	render(): void
	{
		if(this.game == null)
		{
			console.log("No game data found. Failed to render!");
			return;
		}

		let data: Row[] = this.game.getData();
		console.log('>>>', data);

		let container = $('.container');
		for(let i = 0; i < data.length; i++)
		{
			let row_div = document.createElement("div")
			$(row_div).addClass("row")

			for(let j = 0; j < data[i].getCells().length; j++)
			{
				let cell = data[i].getCells()[j];
				let cell_div = document.createElement("div")
				$(cell_div).addClass("cell")

				if(cell.active)
				{
					$(cell_div).addClass('active');
				}

				row_div.append(cell_div);
			}

			container.append(row_div)
		}
	}
}

export default Renderer;