import Cell from './cell';

class Row
{
	id: number;
	private cells : Cell[] = [];

	constructor(id: number)
	{
		this.id = id;
		this.init();
	}

	init(): void
	{
		console.log("Row initialized", "id: " + this.id);

		for(let i = 1; i <= 10; i++)
		{
			this.addCell(i);
		}
	}

	addCell(id: number): void
	{
		this.cells.push(new Cell(id));
	}

	getCells(): Cell[]
	{
		return this.cells;
	}
}

export default Row;