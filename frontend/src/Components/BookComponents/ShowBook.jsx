/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import BackButton from "../SmallIconComponents/BackButton"
import Spinner from "../SmallIconComponents/Spinner"


function ShowBook() {
  const [book,setBook] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res)=>{
      setBook(res.data);
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false)
    })
  },[]);

  return (
    <div>
      <BackButton/>
      <h1 className="text-3xl my-4 ">Show Book</h1>
      {
        loading?(
          <Spinner/>
        ):(
         <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 ">
          <div className="my-4">
            <span className="text-=xl mr-4  text-black ">Id</span>
            <span className="text-=xl mr-4  text-black ">{book._id}</span>

          </div>
          <div className="my-4">
            <span className="text-=xl mr-4  text-black ">Title</span>
            <span className="text-=xl mr-4  text-black ">{book.title}</span>

          </div>
          <div className="my-4">
            <span className="text-=xl mr-4  text-black ">Author</span>
            <span className="text-=xl mr-4  text-black ">{book.author}</span>

          </div>
          <div className="my-4">
            <span className="text-=xl mr-4  text-black ">Publish Year</span>
            <span className="text-=xl mr-4  text-black ">{book.publishYear}</span>

          </div>
          <div className="my-4">
            <span className="text-=xl mr-4  text-black ">Create Time</span>
            <span className="text-=xl mr-4  text-black ">{new Date(book.createdAt).toString()}</span>

          </div>
          <div className="my-4">
            <span className="text-=xl mr-4  text-black ">Update Time</span>
            <span className="text-=xl mr-4  text-black ">{new Date(book.updatedAt).toString()}</span>

          </div>
        
         </div>
        )
      }
    </div>
  )
}

export default ShowBook