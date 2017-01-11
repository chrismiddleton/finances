class FinancesApp {

	/**
	 * @param {HTMLElement!} root
	**/
	constructor (root) {
		this.root = root;
	}
	
	/**
	 * @private
	 * @return {HTMLTableSectionElement!}
	**/
	buildThead () {
		var thead = document.createElement("thead");
		var cols = ["", "Date", "Category", "Desc", "From", "To", "Amount"];
		var tr = thead.appendChild(document.createElement("tr"));
		for (var col of FinancesApp.COLS) {
			var th = document.createElement("th");
			th.appendChild(document.createTextNode(col));
			tr.appendChild(th);
		}
		return thead;
	}
	
	/**
	 * @private
	 * @return {HTMLTableRow!}
	**/
	buildAddNewTransactionRow () {
		var tr = document.createElement("tr");
		var td = tr.appendChild(document.createElement("td"));
		td.colSpan = FinancesApp.COLS.length;
		td.appendChild(document.createTextNode("Add new transaction"));
		return tr;
	}
	
	/**
	 * @private
	 * @return {HTMLTableSectionElement!}
	**/
	buildTbody () {
		var tbody = document.createElement("tbody");
		tbody.appendChild(this.buildAddNewTransactionRow());
		return tbody;
	}
	
	init () {
		var table = document.createElement("table");
		table.appendChild(this.buildThead());
		table.appendChild(this.buildTbody());
		this.root.appendChild(table);
	}

}

/**
 * @private
 * @type {Array<string>!}
**/
FinancesApp.COLS = ["", "Date", "Category", "Desc", "From", "To", "Amount"];