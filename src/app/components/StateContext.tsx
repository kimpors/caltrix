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

}

const StateContext = createContext<ContextProps>({
	number: 0,
	setNumber: (): number => 0,
	isNumber: false,
	setIsNumber: (): boolean => false,
	results: [],
	setResults: (): string[] => [],
});


export default function StateProvider({ children }:Props) {
	const [number, setNumber] = useState(0);
	const [isNumber, setIsNumber] = useState(false);
	const [results, setResults] = useState([] as string[]);

	return (
		<StateContext.Provider value={{ number, setNumber, isNumber, setIsNumber, results, setResults }}>
			{ children }
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext); 
