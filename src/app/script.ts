export function Sum(a: number[][], b: number[][]): number[][] {
	const res = [...a];

	for (let y = 0; y < a.length; y++) {
		for (let x = 0; x < a.length; x++) {
			res[y][x] += b[y][x];
		}
	}

	return res;
}

export function Sub(a: number[][], b: number[][]): number[][] {
	return Sum(a, MulValue(b, -1));
}

export function Mul(a: number[][], b: number | number[][]): number[][] {
	if (typeof b === "number") {
		return MulValue(a, b);
	} else {
		return MulMatrix(a, b);
	}
}

function MulValue(a: number[][], b: number): number[][] {
	const res = [...a];

	for (let y = 0; y < a.length; y++) {
		for (let x = 0; x < a.length; x++) {
			res[y][x] *= b;
		}
	}

	return res;
}

function MulMatrix(a: number[][], b: number[][]): number[][] {
	const res = Array.from(Array(a.length), () => new Array(a.length).fill(0));

	for (let y = 0; y < a.length; y++) {
		for (let x = 0; x < a.length; x++) {
			for (let n = 0; n < a.length; n++) {
				res[y][x] += a[y][n] * b[n][x];
			}
		}
	}

	return res;
}

export function Determinant(a: number[][]): number {
	const size = a.length;

	if (size < 2) {
		return 1;
	} else if (size == 2) {
		return a[0][0] * a[1][1] - a[1][0] * a[0][1];
	}

	let det = 0;
	for (let i = 0; i < size; i++) {
		det += (i % 2 == 0 ? 1 : -1) * a[0][i] * Determinant(Cofactor(a, 0, i));
	}

	return det;
}

export function Inverse(a: number[][]): number[][] {
	const det = Determinant(a);

	if (det === 0) {
		return [];
	}

	const size = a.length;
	const m = [...a];
	const temp = Cofactor(m, size - 1, size - 1);

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			for (let y = 0, suby = 0; y < size; y++) {
				if (y == i) {
					continue;
				}

				for (let x = 0, subx = 0; x < size; x++) {
					if (x == j) {
						continue;
					}

					temp[suby][subx] = a[y][x];
					subx++;
				}

				suby++;
			}

			m[i][j] = ((i + j) % 2 == 0 ? 1 : -1) * Determinant(temp);
		}
	}

	return Mul(m, 1 / det);
}

export function Cofactor(a: number[][], row: number, col: number): number[][] {
	return [...a].filter((_, i) => i !== row)
				.map(cols => cols.filter((_, i) => i !== col))
}
