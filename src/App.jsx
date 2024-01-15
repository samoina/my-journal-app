import JournalEntry from './components/JournalEntry';
import EntryPost from './components/EntryPost';

function App() {
	return (
		<>
			<JournalEntry />;
			<button className="ring-2 p-1 rounded ring-indigo-300 bg-sky-500 text-white">
				Post Entry
			</button>
			<EntryPost />
		</>
	);
}

export default App;
