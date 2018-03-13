import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';
import validator from 'validator';

class Note extends Component{
    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }
    //TODO: render urls as links (use split() and validator.isUrl())
    render(props){
        var urls = [];
        var contentWords = this.noteContent.split(" ");
        for (var i = 0; i < contentWords.length; i++){
            if(validator.isURL(contentWords[i])){
                urls.push(contentWords[i]);
            }
        }
        
        return (
            <div className="note fade-in">
                <span className="closebtn" onClick={() => this.handleRemoveNote(this.noteId)}>&times;</span>
                <span className="editBtn"><i className="material-icons">edit</i></span>
                <p className="noteContent">
                    { 
                        this.noteContent
                    }
                </p>
                {   
                    urls.map((url) => {
                       return (
                        <a className="url" target="blank" href={url}>{url}</a>
                       )                          
                    })
                }
            </div>
        );
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note