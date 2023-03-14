import './Home.css';
import logo_CPL from '../logos/CPL.gif';
import logo_HackMD from '../logos/HackMD.svg';

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
        <div className='flex items-center pt-5 gap-5 flex-wrap'>
          <a className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 m-0 p-0 w-1/5" href="https://sites.google.com/gs.ncku.edu.tw/yungscpl" target="_blank"><img src={logo_CPL} title="國立成功大學燃燒與推進實驗室" /></a>
          
          <a className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 m-0 p-0 w-1/5" href="https://hackmd.io/" target="_blank"><img src={logo_HackMD} title="HackMD" /></a>
        </div>
      </div>
    </>
  );
}

export default Home;

