import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

function OneBookCard({item}) {
  return (
    <div
    className="border-2 Oborder-gray-5ee rounded-lg px-4 py-2 m-4 relative hover: shadow-xl"
  >
    <h2 className=" absolute top-1 right-2 px-4 py-l bg-red-300 rounded-Ig">
      {item.publishYear}
    </h2>
    <h4 className="my-2 text-gray-500 ">{item._id}</h4>
    <div className="flex justify-start items-center gap-x-2">
      <PiBookOpenTextLight className="text-2xl text-red-300" />
      <h2 className="my-1">{item.title}</h2>
    </div>
    <div className="flex justify-start items-center gap-x-2">
      <BiUserCircle className="text-2xl text-red-300" />
      <h2 className="my-1">{item.author}</h2>
    </div>
    <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
      <Link to={`/books/details/${item._id}`}>
        <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
      </Link>

      <Link to={`/books/edit/${item._id}`}>
        <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
      </Link>

      <Link to={`/books/delete/${item._id}`}>
        <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
      </Link>
    </div>
  </div>
  )
}

export default OneBookCard