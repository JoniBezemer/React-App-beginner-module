import { useState } from 'react';
import { TextInput } from './ui/TextInput';


export const DrinkSearch = () => {
	const [searchField] = useState('test drink');

	return (
		<div>
			<label>Search for drinks:</label>
			<TextInput />
			<p>{searchField}</p>
		</div>
	);
};
