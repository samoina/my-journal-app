import { useState } from 'react';
import JournalEntry from './components/JournalEntry';
import JournalPosted from './components/JournalPosted';

function App() {
	//create two setter functions, one that sends the prop to the text area, and another that, when the button is clicked, sets the content in the div section for the journal entries
	const [journalContent, setJournalContent] = useState('');
	const [contentToPost, setContentToPost] = useState('');
	//create an array to store the journal entries which i will loop over in the entry section
	const [journalArray, setJournalArray] = useState([]);

	//When the button is clicked, set the content for the div, i wanted to do it asynchronously instead of setting the content from the textarea directly to the `JournalEntry` child component
	const handleClick = () => {
		setContentToPost(journalContent);
		console.log(journalContent);
		setJournalArray((prevArray) => [...prevArray, journalContent]);
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
			<h1>Journal Entry submitted</h1>
			{/* But doing it this way overwrites previous entries, so i might need an array that i can loop over */}
			{journalArray.map((journalToPost, index) => (
				<JournalPosted key={index} journalPosted={journalToPost} />
			))}
		</>
	);
}

export default App;
