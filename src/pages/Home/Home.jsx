import Banner from "./banner/Banner";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      {/* functionality section  */}
    <section className=" bg">
    <section className="  w-[93%] flex justify-between lg:w-[85%] mx-auto my-5">
        {/* filter sect  */}
        <section>
          {/* filter 1 brand name  */}
          <select className="select select-bordered join-item">
            <option disabled selected>
              Filter
            </option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>

          {/* filter 2 category name  */}
          <select className="select select-bordered join-item">
            <option disabled selected>
              Filter
            </option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          {/* filter 3 price range  */}
          <select className="select select-bordered join-item">
            <option disabled selected>
              Filter
            </option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
        </section>
        {/* search inp  */}
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="indicator">
            <span className="indicator-item badge badge-secondary">new</span>
            <button className="btn join-item">Search</button>
          </div>
        </div>
        {/* sort section  */}
        {/* filter 3 price range  */}
        <select className="select select-bordered join-item">
          <option disabled selected>
            Filter
          </option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
      </section>
    </section>
    </div>
  );
};

export default Home;
