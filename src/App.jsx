import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import JournalEntry from './components/JournalEntry';
import JournalPosted from './components/JournalPosted';

function App() {
	const [journalContent, setJournalContent] = useState('');
	//create an array to store the journal entries
	const [journalArray, setJournalArray] = useState([]);

	//first render, get from LS
	useEffect(() => {
		const json = localStorage.getItem('journalEntries');
		const savedJournals = JSON.parse(json);

		if (savedJournals) {
			setJournalArray(savedJournals);
		}
	}, []);

	//watch if there are any changes and rerender
	useEffect(() => {}, [journalArray]);

	//When the button is clicked, create a new object, withjournal content, adds the uuid, set to the new array and clear text input area
	const handleClick = () => {
		if (journalContent === '') {
			alert('Try and type something in the text area to post a  journal 😄');
		} else {
			const newJournalEntry = { journalContent, uuid: uuidv4() };

			const newAddedArray = [...journalArray, newJournalEntry];
			setJournalArray(newAddedArray);

			//set to LS
			const json = JSON.stringify(newAddedArray);
			localStorage.setItem('journalEntries', json);
			setJournalContent('');
		}
	};

	//this is to be passed as a prop to the journal entry
	const addContent = (ev) => {
		console.log(ev.target.value);
		setJournalContent(ev.target.value);
	};

	//to delete a journal entry
	const deleteContent = (idToDelete) => {
		const newDeletedArray = journalArray.filter((journal) => {
			return journal.uuid !== idToDelete;
		});
		setJournalArray(newDeletedArray);

		//delete from LS
		const json = JSON.stringify(newDeletedArray);
		localStorage.setItem('journalEntries', json);
	};

	return (
		<>
			<JournalEntry content={journalContent} handleChange={addContent} />;
			<button
				className="ring-2 p-1 rounded ring-indigo-300 bg-sky-500 text-white"
				// Also remember to include the enter button as an option to click
				onClick={handleClick}
			>
				Post Entry
			</button>
			<h1>Here is your journal entry</h1>
			{journalArray.map(({ journalContent, uuid }) => {
				return (
					<JournalPosted
						journalPosted={journalContent}
						key={uuid}
						handleDelete={() => deleteContent(uuid)}
					/>
				);
			})}
		</>
	);
}

export default App;
