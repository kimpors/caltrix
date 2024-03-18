'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface Props {
	children: ReactNode
}

interface ContextProps {
	number: number,
	setNumber: Dispatch<SetStateAction<number>>,
	isNumber: boolean,
	setIsNumber: Dispatch<SetStateAction<boolean>>,
	results: string[],
	setResults: Dispatch<SetStateAction<string[]>>,
	left: number[][],
	setLeft: Dispatch<SetStateAction<number[][]>>,
	right: number[][],
	setRight: Dispatch<SetStateAction<number[][]>>,
}

const StateContext = createContext<ContextProps>({
	number: 0,
	setNumber: (): number => 0,
	isNumber: false,
	setIsNumber: (): boolean => false,
	results: [],
	setResults: (): string[] => [],
	left: [],
	setLeft: (): number[][] => [],
	right: [],
	setRight: (): number[][] => [],
});


export default function StateProvider({ children }:Props) {
	const [number, setNumber] = useState(0);
	const [isNumber, setIsNumber] = useState(false);
	const [results, setResults] = useState([] as string[]);
	const [left, setLeft] = useState([] as number[][]);
	const [right, setRight] = useState([] as number[][]);

	return (
		<StateContext.Provider value={{ number, setNumber, isNumber, setIsNumber, results, setResults, left, setLeft, right, setRight }}>
			{ children }
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext); 
