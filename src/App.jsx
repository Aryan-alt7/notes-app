import { Routes, Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { Home } from '../src/components/Home'
import { Notes } from '../src/components/Notes'
import { useEffect, useState } from 'react';

function App() {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");

    return savedNotes ? JSON.parse(savedNotes) : [];
  });


  useEffect(() => {
    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );
  },[notes])



  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home notes={notes} setNotes={setNotes} />} />
        <Route path='/notes' element={<Notes notes={notes} setNotes={setNotes} />} />
      </ Routes>
    </>

  );

}

export default App
