/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Cards = ({data}) => {
  return (
    <div
      className="card   shadow-lg px-2 bg-base-100  hover:scale-100 lg:hover:scale-105 border   hover:border-0 lg:hover:border  hover:border-purple-600"
    >
      <h2 className="font-bold text-center text-xl mt-2">
        {data?.name}
      
      </h2>
      <div className="divider"></div>
      <figure className=" bg-white px-2 w-full">
        <img className=" h-[100px]" src={data?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className=" font-bold">{data?.brand}</p>
        <p className="my-3">Category: <span className=" font-bold">{data?.category}</span></p>
        <p className=" text-sm">
          {data?.description}
        </p>
        <div className=" w-full border "></div>
        <h4 className=" flex  items-center ">
          Price : <span className=" font-bold">{data?.price} $</span>{" "}
        </h4>
        <div className="card-actions justify-between mt-2">
   
          <Link to={`/item/${data?._id || ""}`}>
            <button className=" btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;