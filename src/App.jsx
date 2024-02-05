import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import JournalEntry from './components/JournalEntry';
import JournalPosted from './components/JournalPosted';

function App() {
	const [journalContent, setJournalContent] = useState('');

	//create an array to store the journal entries which i will loop over in the entry section
	const [journalArray, setJournalArray] = useState([]);

	//When the button is clicked, create a new object, that contains the journal content and adds the uuid, then set it to the new array and clear the text input area
	const handleClick = () => {
		const newJournalEntry = { journalContent, uuid: uuidv4() };
		setJournalArray((prevArray) => [...prevArray, newJournalEntry]);
		setJournalContent('');
	};

	//this is to be passed as a prop to the journal entry
	const addContent = (ev) => {
		console.log(ev.target.value);
		setJournalContent(ev.target.value);
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
			{/* {journalArray.map((journalArr) => {
				return (
					<JournalPosted
						journalPosted={journalArr.journalContent}
						key={journalArr.uuid}
					/>
				);
			})} */}
			{journalArray.map(({ journalContent, uuid }) => {
				return <JournalPosted journalPosted={journalContent} key={uuid} />;
			})}
		</>
	);
}

export default App;
