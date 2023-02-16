import { useState } from "react";
import { Link } from "react-router-dom";
import { teams, projects_list } from "../pages_data";

function Projects() {
  const [filter, setFilter] = useState(null);

  return (
    <>
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-3xl decorative mb-5">Our Projects</p>
        <div className="flex gap-5 flex-wrap justify-center select-none">
          <button
            className={filter == null && 'font-semibold'}
            onClick={() => setFilter(() => null)}
          >
            All
          </button>
          {teams.map(t => <button className={filter == t && 'font-semibold italic'} onClick={() => setFilter(t)}>{t.name.en}</button>)}
        </div>

        <div className="mt-5">
          {
            projects_list.filter((p) => filter == p.teams).map((p, i) =>
              <>
                {
                  p.url != null && p.url.includes("http") ?
                    <a
                      href={p.url}
                      target="_blank"
                      className={`flex gap-10 items-center rounded-xl p-5 hover:outline outline-2 ${false && 'flex-row-reverse'}`}
                    >
                      <div>
                        <div className='text-left text-3xl font-semibold grow italic my-2'>
                          <i className="inline-block gg-play-button"></i>
                          {p.name}
                        </div>
                        <p className="text-left">{p.description}</p>
                      </div>
                    </a>
                    :
                    <Link
                      className={`flex gap-10 items-center rounded-xl p-5 outline-2 ${false && 'flex-row-reverse'}`}
                      to={p.url || ''}
                    >
                      {/* <img src={p.cover} className="h-20" alt="" /> */}
                      <div>
                        <div className='text-left text-3xl font-semibold grow italic my-2'>
                          <i className="inline-block gg-play-button"></i>
                          {p.name}
                        </div>
                        <p className="text-left">{p.description}</p>
                      </div>
                    </Link>
                }
                <br />
              </>
            )
          }
        </div>
      </div>
    </>
  );
}

export default Projects;
