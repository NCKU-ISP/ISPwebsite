import { missions, mission_classifications } from "../pages_data";
import CountUp from 'react-countup';

function Missions() {
  return (
    <>
      <div className="container mx-auto max-w-3xl">
        <p className="text-3xl decorative mb-5 text-center">Missions</p>
        <div className="flex flex-wrap decorative gap-24 justify-center m-10" >
          {
            mission_classifications.map(classification =>
              <div className="text-center">
                <p className="font-black text-9xl">
                  <CountUp duration={0.8} end={missions.filter(x => x.classification == classification).length} />
                </p>
                <p className=" text-xl">{classification.name.en}</p>
              </div>
            )
          }
        </div>
        {
          missions.sort(function (a, b) {
            return b.date - a.date;
          }).map(item => {
            return (
              <div className='bg-zinc-100 rounded-xl p-10 my-10 text-lg leading-loose' style={{ color: "#383838" }}>
                <p className="font-bold text-2xl">{item.title} {item.classification.name.zh}</p>
                <p className="font-medium items-center flex gap-2"><i class="gg-time inline-block" style={{ transform: "scale(0.7)" }} /> {new Date(item.date).toLocaleDateString()}</p>
                <p className="font-medium">Missions:</p>
                <ul className="list-disc px-5">
                  {
                    item.missions.map(m => <li>{m}</li>)
                  }
                </ul>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Missions;
