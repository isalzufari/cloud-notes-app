import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      counter: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const maxCharacter = 50;
    if (event.target.value.length <= maxCharacter) {
      this.setState((prevState) => {
        return {
          ...prevState,
          title: event.target.value,
          counter: maxCharacter - event.target.value.length,
        }
      })
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    this.setState((prevState) => {
      return {
        ...prevState,
        title: '',
        body: '',
        counter: 50
      }
    })
  }

  render() {
    return (
      <div className='note-input'>
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className='note-input__title__char-limit'>Sisa Karakter: {(this.state.counter === 0 ? 'Maksimal karakter!' : this.state.counter)}</p>
          <input className='note-input__title' type='text' placeholder='Judul' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className='note-input__body' placeholder='Tuliskan catatanmu di sini' value={this.state.body} onChange={this.onBodyChangeEventHandler} />
          <button type='submit'>Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteInput;