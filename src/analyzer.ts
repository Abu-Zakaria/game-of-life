import Row from './row'
import Cell from './cell'
class Analyzer
{
	private data : Row[];

	constructor()
	{
		console.log("booting up analyzer...");
	}

	setData(data: Row[]): void
	{
		this.data = data
	}

	analyze(): void
	{
		for(let i = 0; i < this.data.length; i++)
		{
			let row: Row = this.data[i];
			let cells: Cell[] = row.getCells();
			for(let j = 0; j < cells.length; j++)
			{
				let cell : Cell = cells[j];

				// analyze neighborhood
				let active_neighbors = 0;
				if(i > 0)
				{
					let prev_row: Row = this.data[i - 1];
					if(j > 0)
					{
						let prev_col = j - 1;

						if(prev_row.getCells()[prev_col].active == true)
						{
							active_neighbors++;
						}
					}
					if(prev_row.getCells()[j].active == true)
					{
						active_neighbors++;
					}
					if(prev_row.getCells()[j+1] != null)
					{
						prev_row.getCells()[j+1].active == true && active_neighbors++;
					}
				}
				if(j > 0)
				{
					cells[j - 1].active && active_neighbors++;
				}
				if(cells[j + 1] != null)
				{
					cells[j + 1].active && active_neighbors++;
				}

				let next_row = this.data[i+1]
				if(next_row != null)
				{
					if(j > 0)
					{
						next_row.getCells()[j - 1].active && active_neighbors++;
					}
					next_row.getCells()[j].active && active_neighbors++;
					if(next_row.getCells()[j + 1] != null)
					{
						next_row.getCells()[j + 1].active && active_neighbors++;
					}
				}

				console.log("analyzed active neighbors:", active_neighbors, cell.id);
			}
		}
	}
}

export default Analyzer;