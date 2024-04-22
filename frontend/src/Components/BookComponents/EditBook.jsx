/* eslint-disable react-hooks/exhaustive-deps */

import { useState,useEffect } from "react"
import BackButton from "../SmallIconComponents/BackButton"
import Spinner from "../SmallIconComponents/Spinner"
import axios from "axios"
import { useNavigate ,useParams } from "react-router-dom"


function EditBook() {
  const [title,setTitle] = useState("");
  const [author,setAuthor]= useState("");
  const [publishYear,setPublishYear] = useState("");
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
      setLoading(true);
      axios.get(`http://localhost:5555/books/${id}`)
      .then((res)=>{
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((err)=>{
        setLoading(false)
        alert('An error Happened, please check Console')
        console.log(err);
      })
  },[]);

  const handleEditBook = ()=>{
    const newBook = {
      title,
      author,
      publishYear
    }
    setLoading(true);
    axios.put(`http://localhost:5555/books/${id}`,newBook)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((err)=>{
      console.log(err);
      alert('An error Happened, please check Console')
      setLoading(false)
    })
  }


    


  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4"> Edit Book</h1>

      {loading?(<Spinner/>):""}

      <div className="border-2 flex flex-col border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 ">Title</label>
          <input           
          type="text" 
          value={title} 
          onChange={(e)=>setTitle(e.target.value)} 
          className="border-2 border-gray-500 px-4 py-2 w-full">
          </input>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 ">Author</label>
          <input           
          type="text" 
          value={author} 
          onChange={(e)=>setAuthor(e.target.value)} 
          className="border-2 border-gray-500 px-4 py-2 w-full">
          </input>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 ">Publish Year</label>
          <input           
          type="text" 
          value={publishYear} 
          onChange={(e)=>setPublishYear(e.target.value)} 
          className="border-2 border-gray-500 px-4 py-2 w-full">
          </input>
        </div>

        <button className="p-2 bg-sky-300 m-8 " onClick={handleEditBook}>Save</button>


      </div>


    </div>
  )
}



export default EditBook