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
