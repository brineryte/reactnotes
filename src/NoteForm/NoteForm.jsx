import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value, //value of text input
        });
    }

    handleKeyUp(e){
        if(e.key === 'Enter'){
            this.writeNote();
        }
    }

    writeNote(){
        //call a method that sets the notecontent for a note to
        // the value of the input
        this.props.addNote(this.state.newNoteContent);

        // set input back to empty string
        this.setState({
            newNoteContent: '',
        });
    }

    render() {
        return (
            <div className="formWrapper" >
                <input className="noteInput"
                placeholder="Write a new note..." 
                value={this.state.newNoteContent}
                onChange={this.handleUserInput}
                onKeyUp={this.handleKeyUp}/>
                <button className="noteButton"
                onClick={this.writeNote}>Add Note</button>
            </div>
        );
    }
}

export default NoteForm;