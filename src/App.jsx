import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState(false);
  const NavItem = ({ text, url }) => <Link to={url} className="font-bold mx-3 inline">{text}</Link>;
  const NavItemData = [
    {
      text: 'About Us',
      url: '/about'
    },
    {
      text: 'Team',
      url: '/team'
    },
    {
      text: 'Missions',
      url: '/missions'
    },
    {
      text: 'Projects',
      url: '/projects'
    },
  ];

  return (
    <>
      <div className="mx-auto pt-2 select-none">
        <div className='mx-auto max-w-5xl flex items-center font-semibold uppercase'>
          <Link to="/" onClick={() => setMenu(false)} className="text-2xl decorative">
            <img src="/logo.svg" className="h-20 p-4 inline right" />
            NCKU ISP
          </Link>
          <div className='mr-0 ml-auto hidden lg:block xl:block 2xl:block'>
            {NavItemData.map(item => <NavItem text={item.text} url={item.url} />)}
            <a href="https://archive.nckuisp.space" className="font-bold mx-3 inline">Old Website</a>
            <a
              className="mx-3 p-2 rounded-md inline bg-sky-500 hover:bg-sky-600 shadow-md hover:shadow-slate-800"
              href="https://donate2.ncku.edu.tw/index.php?c=donate&m=step1&usename=%E5%A4%AA%E7%A9%BA%E6%8E%A8%E9%80%B2%E7%A0%94%E7%A9%B6%E7%A4%BE&usetype=ut9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Us
            </a>
          </div>
          <div className='mr-0 ml-auto block lg:hidden xl:hidden 2xl:hidden'>
            <button className="mx-3 p-2 rounded-md inline" onClick={() => setMenu(m => !m)}>
              {
                menu ? <i className="gg-close"></i> : <i className="gg-menu-right"></i>
              }
            </button>
          </div>
        </div>
        {
          menu ? (
            <div className="container text-center" >
              {NavItemData.map(item => (
                <Link className="block mx-auto py-2 font-medium" onClick={() => setMenu(false)} to={item.url}>
                  {item.text}
                </Link>
              ))}
              <a href="https://archive.nckuisp.space" className="block mx-auto py-2 font-medium">Old Website</a>
              <a
                className="p-2 rounded-md block font-black"
                href="https://donate2.ncku.edu.tw/index.php?c=donate&m=step1&usename=%E5%A4%AA%E7%A9%BA%E6%8E%A8%E9%80%B2%E7%A0%94%E7%A9%B6%E7%A4%BE&usetype=ut9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support Us
              </a>
            </div>
          ) : null
        }
      </div>
      <div className='p-5'>
        <Outlet />
        <i class="gg-chevron-double-down mx-auto my-10"></i>
        <div className='bg-zinc-100 mx-auto max-w-5xl rounded-xl px-5 py-10 text-center' style={{ color: "#383838" }}>
          <p className='text-xl font-bold text-center pb-5'>聯絡我們</p>
          <p className='py-1'>國立成功大學 太空推進研究社</p>
          <p className='py-1 font-medium'>Institute of Space Propulsion, NCKU</p>
          <div className='flex items-center mx-auto justify-center gap-10 py-5'>
            <a href="https://www.facebook.com/ispncku" target="_blank"><i className="gg-facebook"></i></a>
            <a href="https://www.instagram.com/ispncku/" target="_blank"><i className="gg-instagram"></i></a>
            <a href="https://github.com/NCKU-ISP" target="_blank"><i className="gg-code-slash"></i></a>
            <a href="mailto:aerogroup2020@gmail.com" target="_blank"><i className="gg-mail"></i></a>
          </div>
          <p className='py-1'>701401 臺南市東區大學路一號</p>
          <p className='py-1'>國立成功大學 光復校區 學生活動中心 4 樓</p>
          <div className='mx-auto flex gap-5 justify-center items-center text-sm text-gray-600 pt-8'>
            <a href="https://opensource.org/licenses/BSD-3-Clause" target="_blank">Open Source License</a>
            <a href="https://archive.nckuisp.space" target="_blank">Old Website</a>
          </div>
          <div className='mx-auto flex gap-5 justify-center items-center text-sm text-gray-600 pt-8'>
            <a href="#" target="_blank">&copy; {new Date().getFullYear()} NCKU ISP</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
