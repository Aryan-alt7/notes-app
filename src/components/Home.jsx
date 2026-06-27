import { useState } from 'react'
import './Home.css'

export function Home({notes, setNotes}) {

    const [note, setNote] = useState({
        title: "",
        body: "",
    })

    const handleSave = () => {
        if (note.title.trim() === "" ||
            note.body.trim() === "") {
            alert("Please fill both fields")
            return;
        }
        else {
            const newNote = {
                id: Date.now(),
                title: note.title,
                body: note.body,
            };

            setNotes([...notes, newNote]);

            setNote({
                title: "",
                body: "",
            });
            console.log(note);
        }
    }

    return (
        <>
            <div className="note-container">
                <div className="note-title">
                    <h2>Write your Note title here :</h2>
                    <input type="text"
                        placeholder="Title"
                        value={note.title}
                        onChange={(e) => setNote({ ...note, title: e.target.value })} />
                </div>
                <div className="note-content">
                    <h2>Write Note description/body here :</h2>
                    <textarea placeholder="Write your note here..."
                        value={note.body}
                        onChange={(e) => setNote({ ...note, body: e.target.value })} />
                </div>
                <button className='save-btn'
                    onClick={handleSave}> Save Note</button>
            </div>
        </>
    )
}