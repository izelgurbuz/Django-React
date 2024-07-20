import { useEffect, useState } from "react"
import usePost from "../../hooks/usePost"
import useGet from '../../hooks/useGet'
import useDelete from '../../hooks/useDelete'
import Note from "../Note"
import '../../styles/Home.css'

const Home = () => {

const [title,setTitle] = useState('')
const [content,setContent] = useState('')
const [postData, setPostData] = useState(null)
const [deleteID, setDeleteID] = useState(null)


const { data: postedData } = usePost('/api/notes/', postData)
const {  data: deleteData } = useDelete(`/api/notes/delete/${deleteID}/`, deleteID)

const {data: notes, setShouldFetch } = useGet('/api/notes/')

const createNote = (e) => {
    e.preventDefault()
    setPostData({title,content})
}
useEffect(()=>{
    setShouldFetch(true)
},[])

useEffect(()=>{
    setShouldFetch(true)
    setContent('')
    setTitle('')
},[deleteData,postedData])

const deleteNote= (id)=>{
    setDeleteID(id)
    setShouldFetch()

}
    return <div>
      <div>
        <h2>Notes</h2>
        {notes?.map((note) => (
            <Note note={note}  key={note.id} onDelete={deleteNote} />
        ))}
      </div>
      <form onSubmit={createNote}>
        <label id='title' htmlFor="title">Title:</label>
        <br/>
        <input  name='title' id="title" type="text" required onChange={e=> setTitle(e.target.value)} value={title} />
        <label id="content" htmlFor="content">Content:</label>
        <br/>
        <textarea  name='content' id='content' required value={content} onChange={e=> setContent(e.target.value)}  />
        <button type="submit">Submit</button>
      </form>
    </div>
}

export default Home