/* eslint-disable react/prop-types */
const JournalPosted = ({ journalPosted, handleDelete }) => {
	return (
		<>
			<li onClick={handleDelete}>{journalPosted}</li>
		</>
	);
};
export default JournalPosted;
