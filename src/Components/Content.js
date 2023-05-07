import { useState } from "react";
import { ChartBarIcon, ChartPieIcon } from "@heroicons/react/solid";
import SideOvers from "./SideOvers";

const musics = [
  {
    id: "1",
    image: "https://source.unsplash.com/random/300x300?meditation-music-1",
    title: "Calm Reflections",
    unique_plays: 1200,
    total_plays: 2500,
    completion_rate: 85,
  },
  {
    id: "2",
    image: "https://source.unsplash.com/random/300x300?meditation-music-2",
    title: "Tranquil Serenity",
    unique_plays: 800,
    total_plays: 1500,
    completion_rate: 91,
  },
  {
    id: "3",
    image: "https://source.unsplash.com/random/300x300?meditation-music-3",
    title: "Meditative Melodies",
    unique_plays: 2500,
    total_plays: 3500,
    completion_rate: 78,
  },
  {
    id: "4",
    image: "https://source.unsplash.com/random/300x300?meditation-music-4",
    title: "Soothing Symphony",
    unique_plays: 1900,
    total_plays: 2900,
    completion_rate: 82,
  },
  {
    id: "5",
    image: "https://source.unsplash.com/random/300x300?meditation-music-5",
    title: "Peaceful Oasis",
    unique_plays: 3000,
    total_plays: 4500,
    completion_rate: 75,
  },
  {
    id: "6",
    image: "https://source.unsplash.com/random/300x300?meditation-music-6",
    title: "Spiritual Harmony",
    unique_plays: 1500,
    total_plays: 2000,
    completion_rate: 67,
  },
  {
    id: "7",
    image: "https://source.unsplash.com/random/300x300?meditation-music-7",
    title: "Zen Garden",
    unique_plays: 2800,
    total_plays: 3900,
    completion_rate: 55,
  },
  {
    id: "8",
    image: "https://source.unsplash.com/random/300x300?meditation-music-8",
    title: "Relaxing Waters",
    unique_plays: 2000,
    total_plays: 3200,
    completion_rate: 72,
  },
  {
    id: "9",
    image: "https://source.unsplash.com/random/300x300?meditation-music-9",
    title: "Mindful Moments",
    unique_plays: 1400,
    total_plays: 2100,
    completion_rate: 88,
  },
  {
    id: "10",
    image: "https://source.unsplash.com/random/300x300?meditation-music-10",
    title: "Serenity Now",
    unique_plays: 1700,
    total_plays: 2700,
    completion_rate: 79,
  },
];

const Content = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(musics);
  const [music, setMusic] = useState(null);
  return (
    <>
      {<SideOvers open={open} setOpen={setOpen} music={music} />}
      <div className="max-w-7xl mx-auto sm:px-6">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 my-8">
        <div className="shadow overflow-hidden sm:rounded-md bg-gray-900 bg-opacity-30 backdrop-blur-lg">
          <ul
            role="list"
            className="divide-y divide-gray-200 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-blue-600/50"
          >
            {data.map((music) => (
              <li key={music.id}>
                <div className="block hover:bg-gray-900 hover:bg-opacity-20 flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src={music.image} alt="" />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4">
                      <p className="text-xl font-medium text-white truncate flex items-center">{music.title}</p>
                      <div className="hidden md:flex items-center justify-around">
                        <div>
                          <p className="text-sm text-gray-300">Total Plays</p>
                          <p className="mt-2 flex items-center text-sm text-gray-200 font-semibold">
                            <ChartBarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-sky-400" aria-hidden="true" />
                            {music.total_plays}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-300">Unique Plays</p>
                          <p className="mt-2 flex items-center text-sm text-gray-200 font-semibold">
                            <ChartBarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-sky-400" aria-hidden="true" />
                            {music.unique_plays}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="flex justify-between mb-1">
                          <span className="text-base font-medium text-blue-700 dark:text-white">Completition Rate</span>
                          <span className="text-sm font-medium text-blue-700 dark:text-white">{music.completion_rate}%</span>
                        </div>
                        <div className="w-full bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded-lg h-4">
                          <div className="bg-[#5e74f4] h-4 rounded-lg" style={{ width: music.completion_rate + "%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChartPieIcon
                      className="h-5 w-5 text-indigo-500 cursor-pointer hover:text-indigo-300"
                      aria-hidden="true"
                      onClick={() => {
                        setOpen(!open);
                        setMusic(music);
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Content;
