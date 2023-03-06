import React from 'react';
import { getInitialData } from '../utils/index';
import Navbar from './Navbar/Navbar';
import NoteInput from './NoteInput';
import NoteListActive from './NoteListActive';
import NoteListArchived from './NoteListArchived';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      isSearch: false,
      searchNotes: []
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchKey = this.onSearchKey.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const noteArchieve = this.state.notes.find(note => note.id === id);
    if (noteArchieve.archived) {
      noteArchieve.archived = false;
    } else {
      noteArchieve.archived = true;
    }
    this.setState({ noteArchieve });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false
          },
        ]
      }
    });
  }

  onSearchKey(keyword) {
    const searchNotes= this.state.notes.filter(
      (note) => note.title.toLowerCase().includes(keyword.toLowerCase()) 
    );
    this.setState({
      isSearch: keyword === "" ? false : true,
      searchNotes: searchNotes
    });
  }

  render() {
    return (
      <div className='body'>
        <Navbar onSearchKey={this.onSearchKey}/>
        <div className='note-app__body'>
          <NoteInput addNote={this.onAddNoteHandler}/>
          <NoteListActive 
            notes={this.state.notes.filter((note) => note.archived === false)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            searchNotes={this.state.searchNotes.filter((note) => note.archived === false)}
            isSearch={this.state.isSearch}
          />
          <NoteListArchived 
            notes={this.state.notes.filter((note) => note.archived === true)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            searchNotes={this.state.searchNotes.filter((note) => note.archived === true)}
            isSearch={this.state.isSearch}
          />
        </div>
      </div>
    )
  }
}

export default NotesApp;
