import { useQuery } from "@tanstack/react-query";
import Banner from "./banner/Banner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Cards from "./card/Cards";
import { useState } from "react";
import Pagination from "../../components/custom/Pagination";

const Home = () => {
  // page state 
  const [currentPage,setCurrentPage]=useState(0)
  const [brand , setBrand]=useState('')
  const [category , setCategory]=useState('')
  const [price , setPrice]=useState('1,10000')
  const [search , setSearch] = useState('')
  const [sort , setSort] = useState('')

  console.log(search);

const handleSearch =(e)=>{
  e.preventDefault()
  setSearch(e.target?.search?.value)
}

// get axios secure 
const axiosHook =useAxiosSecure()

  const {data:products=[],isFetching}=useQuery({
    queryKey:['products ',currentPage,category,brand,price,search,sort],
    queryFn:async()=>{
      const res = await axiosHook.get(`/products?page=${currentPage}&size=${9}&category=${category}&brand=${brand}&minPrice=${price?.split(',')[0]}&maxPrice=${price?.split(',')[1]}&search=${search}&sort=${sort}`)
      // console.log( res.data);
      return res.data
    }  })
  const {data:count=0}=useQuery({
    queryKey:['products count '],
    queryFn:async()=>{
      const res = await axiosHook.get('/products-count')
      // console.log( res.data);
      return res.data?.count
    }  })

    // console.log(products);
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      {/* functionality section  */}
      <section className=" bg-primary bg-opacity-10 py-1">
        <section className="  w-[90%] flex flex-col lg:flex-row gap-5  lg:gap-10 justify-between lg:w-[85%] mx-auto my-5">
          {/* filter sect  */}
          <section className=" grid grid-cols-2 lg:grid-cols-3 lg:flex-row  flex-col gap-5">
            {/* filter 1 brand name  */}
            <select
              name="brand"
              onChange={(e)=>setBrand(e.target?.value)}
              className="select select-bordered font-bold border-purple-600 shadow-md join-item"
            >
              <option disabled selected>
                Brand Name
              </option>
              <option value={'Apple'}>Apple</option>
              <option value={'Sony'}>Sony </option>
              <option value={'Samsung'}>Samsung</option>
              <option value={'HP'}>HP</option>
              <option value={'Bose'}>Bose</option>
              <option value={'GoPro'}>GoPro</option>
              <option value={'Philips'}>Philips</option>
              <option value={'Dell'}>Dell</option>
              <option value={'Nike'}>Nike </option>
              <option value={''}>Clear all </option>
            </select>

            {/* filter 2 category name  */}
            <select name="category" onChange={(e)=>setCategory(e.target?.value)} className="select select-bordered border-purple-600 font-bold shadow-md join-item">
              <option disabled selected>
                Category
              </option>
              <option value={'Electronics'}> Electronics</option>
              <option value={'Gaming'}> Gaming</option>
              <option value={'Wearables'}> Wearables</option>
              <option value={'Fashion'}>Fashion</option>
              <option value={'Cameras'}>Cameras</option>
              <option value={'Home  Appliances'}> Home Appliances</option>
              <option value={'Health'}> Health </option>
              <option value={''}>Clear all </option>

            </select>
            {/* filter 3 price range  */}
            <select name="price" onChange={(e)=>setPrice(e.target?.value)} className="select font-bold select-bordered border-purple-600 shadow-md join-item">
              <option disabled selected>
                Price Range
              </option>
              <option value={[1,100]} >1-100 $</option>
              <option value={[100,200]}>100-200 $</option>
              <option value={[200,500]}>200-500 $</option>
              <option value={[500,5000]}>500-5000 $</option>
              <option value={''}>Clear all </option>

            </select>

            <select  onChange={(e)=>setSort(e.target.value)} className="select font-bold lg:hidden block border-purple-500 shadow-md select-bordered join-item">
            <option className=" font-bold" disabled selected>
              <span className=" font-bold">Sort</span>
            </option>
            <option value={'low'}>Low To High</option>
            <option value={'high'}>High to Low </option>
            <option value={'new'}>Newest</option>
          </select>
          </section>
          {/* search inp  */}
          <div className="flex-1 mx-5 ">
            <form onSubmit={handleSearch}>
              <div className=" relative">
                <input
                name="search"
                  className="input w-full border-purple-400 shadow-lg input-bordered "
                  placeholder="Search"
                />
                <button type="submit" className="btn bg-purple-700 text-white hover:text-black border-purple-400 border-l-0 top-0 right-0 absolute  join-item">
                  Search
                </button>
              </div>
            </form>
          </div>
          {/* sort section  */}
          <select  onChange={(e)=>setSort(e.target.value)} className="select font-bold hidden lg:block border-purple-500 shadow-md select-bordered join-item">
            <option className=" font-bold" disabled selected>
              <span className=" font-bold">Sort</span>
            </option>
            <option value={'low'}>Low To High</option>
            <option value={'high'}>High to Low </option>
            <option value={'new'}>Newest</option>
          </select>
        </section>
      </section>
      {/* cards section  */}
      <section className="w-[93%]  my-10 lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map(data=><Cards key={data?._id} data={data}></Cards>)}    
        
      </section>
      {isFetching&&<div className=" flex justify-center items-center w-[calc(100dvh-200px)]"> <span className=" loading-spinner "></span></div>}
      {category&&brand&&products?.length<1&&<div><h1 className="text-xl font-bold text-center">No Data Found</h1></div>}
      {/* pagination section  */}
      <section className="w-[93%]  my-10 lg:w-[85%] mx-auto ">
        {category&&brand&&products?.length<1||<Pagination count={count} itemsCount={9} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
      </section>

    </div>
  );
};

export default Home;
