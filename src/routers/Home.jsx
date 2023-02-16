import './Home.css';

function Home() {
  return (
    <>
      <div>
        <video autoPlay muted loop>
          <source src="background.mp4" type="video/mp4" />
        </video>
        <div className='mx-auto max-w-5xl flex items-center' style={{ height: "70vh" }}>
          <div>
            <p className="text-7xl font-black py-5">
              <i className="gg-quote inline-block h-12" style={{ transform: "scale(2)" }}></i>
              GO ABOVE
              <br />
              AND BEYOND
              <i className="gg-quote inline-block" style={{ transform: "scale(2)" }}></i>
            </p>
            <p className="text-2xl font-bold">由成大學生組成的火箭開發團隊</p>
          </div>
        </div>
      </div>
      <div className='bg-zinc-100 mx-auto max-w-5xl rounded-xl p-10 my-10' style={{ color: "#383838" }}>
        <p className='text-2xl font-bold pb-3'>合作夥伴</p>
        <hr className="border-sky-400 w-10 border-b-2 rounded-sm" />
        <div className='flex items-center pt-5'>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Home;

