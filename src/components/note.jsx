function Note(props){
      return (
        <div id="note">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
      );
}

export default Note;