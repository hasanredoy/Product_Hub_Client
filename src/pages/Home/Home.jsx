import { useQuery } from "@tanstack/react-query";
import Banner from "./banner/Banner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Cards from "./card/Cards";

const Home = () => {
// get axios secure 
const axiosHook =useAxiosSecure()

  const {data:products=[]}=useQuery({
    queryKey:['products '],
    queryFn:async()=>{
      const res = await axiosHook.get('/products')
      console.log( res.data);
      return res.data
    }  })

    console.log(products);
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      {/* functionality section  */}
      <section className=" bg-primary bg-opacity-10 py-1">
        <section className="  w-[93%] flex lg:gap-10 justify-between lg:w-[85%] mx-auto my-5">
          {/* filter sect  */}
          <section className=" flex gap-5">
            {/* filter 1 brand name  */}
            <select
              name="brand"
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
            </select>

            {/* filter 2 category name  */}
            <select name="category" className="select select-bordered border-purple-600 font-bold shadow-md join-item">
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
            </select>
            {/* filter 3 price range  */}
            <select name="price" className="select font-bold select-bordered border-purple-600 shadow-md join-item">
              <option disabled selected>
                Price Range
              </option>
              <option value={'100'} >1-100 $</option>
              <option value={'200'}>100-200 $</option>
              <option value={'500'}>200-500 $</option>
              <option value={'5000'}>500-5000 $</option>
            </select>
          </section>
          {/* search inp  */}
          <div className="flex-1 mx-5 ">
            <div>
              <div className=" relative">
                <input
                  className="input w-full border-purple-400 shadow-lg input-bordered "
                  placeholder="Search"
                />
                <button className="btn bg-purple-700 text-white hover:text-black border-purple-400 border-l-0 top-0 right-0 absolute  join-item">
                  Search
                </button>
              </div>
            </div>
          </div>
          {/* sort section  */}
          {/* filter 3 price range  */}
          <select  className="select font-bold border-purple-500 shadow-md select-bordered join-item">
            <option className=" font-bold" disabled selected>
              <span className=" font-bold">Sort</span>
            </option>
            <option>Low To High</option>
            <option>High to Low </option>
            <option>Newest</option>
          </select>
        </section>
      </section>
      {/* cards section  */}
      <section className="w-[93%]  my-10 lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.map(data=><Cards key={data?._id} data={data}></Cards>)}    
      </section>
    </div>
  );
};

export default Home;
