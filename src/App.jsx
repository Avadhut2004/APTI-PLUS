import { useEffect, useState } from 'react'
import './App.css'
import { Auth } from './components/auth';
import { db } from './config/firebase';
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [count, setCount] = useState(0);
  const [quelist, setquelist] = useState([]);

  const docRef = collection(db, "questions");

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const list = await getDocs(docRef);
        const FilteredData = list.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setquelist(FilteredData);
      }
      catch (err) { console.error(err) }
    }
    getQuestions();
  }, []);

  return (
    <>
      <Auth />
      <div>
        <h3>Question List:</h3>
        {quelist.map((q, index) => (
          <div key={q.id || index}>
            <p>{q.question}</p> {/* Use appropriate field name */}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
