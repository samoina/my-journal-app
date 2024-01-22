// eslint-disable-next-line react/prop-types
const JournalEntry = ({ content, handleChange }) => {
	return (
		<>
			{' '}
			<textarea
				name=""
				id=""
				cols="30"
				rows="10"
				placeholder="Jot down your pun-tastic musings here! 📝😄"
				className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2"
				value={content}
				onChange={handleChange}
			></textarea>
		</>
	);
};
export default JournalEntry;
