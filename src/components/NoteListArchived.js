import React from 'react'
import NoteItem from './NoteItem/NoteItem'

const NoteListArchived = ({ notes, onDelete, onArchive, searchNotes, isSearch }) => {
  const notesFilter = isSearch ? searchNotes : notes;

  return (
    <>
      <h2>Arsip</h2>
      {notesFilter.length > 0 ? (
          <div className='notes-list'>
            {
              notesFilter.map((note) => (
                <NoteItem 
                  key={note.id}
                  id={note.id}
                  onDelete={onDelete}
                  onArchive={onArchive}
                  {...note}
                />
              ))
            }
          </div>
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
    </>
  )
}

export default NoteListArchived
