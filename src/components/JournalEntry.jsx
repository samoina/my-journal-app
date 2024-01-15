const JournalEntry = () => {
	return (
		<>
			{' '}
			<textarea
				name=""
				id=""
				cols="30"
				rows="10"
				placeholder="Type your journal entry here"
				className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2"
			></textarea>
		</>
	);
};
export default JournalEntry;
