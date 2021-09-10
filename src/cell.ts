class Cell
{
	id: number;
	active: boolean = false;
	next_active: boolean = false;

	constructor(id: number)
	{
		this.id = id;
		this.active = Math.random() > 0.69
		this.init();
	}

	init()
	{
		console.log("Cell has been initialized", "id: " + this.id);
	}
}


export default Cell;