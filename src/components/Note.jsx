//takes note object data and displays that as a Note component
function Note(props){
      return (
        <div id="note">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
      );
}

//argument "noteEntry" is implicitly given by the Array.map function as an individual Note object from the array
function createNote(noteEntry)
{
  return (
    <Note
      key={noteEntry.id}
      title={noteEntry.title}
      content={noteEntry.content}
    />
  );
}

//Array of all the individual notes. 
const notes = [
  {
      key: 1,
      id: 1,
      title: "Note 1",
      content: "This is the very interesting and complicted information to be displayed about Note 1"
  },
  {
      key: 2,
      id: 2,
      title: "Note 2",
      content: "This is a long note. Notice how it is a different size. The solution could be to make every note the same size and if there is text run off then the user could have the option to open up a model."
  },
  {
      key: 3,
      id: 3,
      title: "Note 2",
      content: "This is the very interesting and complicted information to be displayed about Note 2"
  },
  {
      key: 4,
      id: 4,
      title: "Note 2",
      content: "This is the very interesting and complicted information to be displayed about Note 2"
  }
]

//To be used in <App />
export {Note, createNote, notes};