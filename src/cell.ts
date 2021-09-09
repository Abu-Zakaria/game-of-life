class Cell
{
	id: number;
	active: boolean = false;

	constructor(id: number)
	{
		this.id = id;
		this.init();
	}

	init()
	{
		console.log("Cell has been initialized", "id: " + this.id);
	}
}


export default Cell;