export function formatterNumber(number) {
	var si = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'k' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e9, symbol: 'B' },
		{ value: 1e12, symbol: 'T' },
		{ value: 1e15, symbol: 'AA' },
		{ value: 1e18, symbol: 'AB' },
	]
	var rx = /\B(?=(\d{3})+(?!\d))/g
	var i
	for (i = si.length - 1; i > 0; i--) {
		if (number >= si[i].value) {
			break
		}
	}
	return (number / si[i].value).toFixed(1).replace(rx, ',') + si[i].symbol
}
