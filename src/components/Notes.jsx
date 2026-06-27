
import { useState } from 'react'
import './Notes.css'


export function Notes({ notes, setNotes }) {

    const [editId, setEditId] = useState(null);
    const [editedNote, setEditedNote] = useState({
        title: "",
        body: "",
    })

    const editNote = (id) => {
        const note = notes.find((n) => n.id === id);
        setEditId(id);
        setEditedNote({
            title: note.title,
            body: note.body,
        })
    }

    const saveNote = () => {
        setNotes(
            notes.map((note) => note.id === editId ?
                { ...note, ...editedNote }
                : note
            )
        );

        setEditId(null);
    }

    const deleteNote = (id) => {
        setNotes(
            notes.filter((note) => note.id != id)
        );
    }


    return (
        <div className="notes-container">
            {notes.map((note) => (
                <div className="note-card" key={note.id} >
                    {editId === note.id ? (
                        <>
                            <input value={editedNote.title}
                                onChange={(e) => setEditedNote({
                                    ...editedNote,
                                    title: e.target.value
                                })
                                }
                            />

                            <textarea value={editedNote.body}
                                onChange={(e) => setEditedNote({
                                    ...editedNote,
                                    body: e.target.value
                                })
                                }
                            />

                            <button className="save"
                                onClick={saveNote}> Save </button>
                        </>
                    ) : (
                        <>
                            <h2>{note.title}</h2>
                            <p>
                                {note.body}
                            </p>

                            <div className="note-actions">
                                <button onClick={() => editNote(note.id)}>Edit</button>
                                <button onClick={() => deleteNote(note.id)} >Delete</button>
                            </div>
                        </>
                    )}

                </div>
            ))}

        </div>
    )
}