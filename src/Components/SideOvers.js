import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    date: "12/12/21",
    unique_plays: 4000,
    total_plays: 2400,
  },
  {
    date: "12/13/21",
    unique_plays: 3000,
    total_plays: 1398,
  },
  {
    date: "12/14/21",
    unique_plays: 2000,
    total_plays: 9800,
  },
  {
    date: "12/15/21",
    unique_plays: 2780,
    total_plays: 3908,
  },
  {
    date: "12/16/21",
    unique_plays: 1890,
    total_plays: 4800,
  },
  {
    date: "12/17/21",
    unique_plays: 2390,
    total_plays: 3800,
  },
  {
    date: "12/18/21",
    unique_plays: 3490,
    total_plays: 4300,
  },
];

const SideOvers = ({ open, setOpen, music }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-800 bg-opacity-20 backdrop-blur-lg transition-opacity" />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-gray-900 bg-opacity-30 backdrop-blur-lg py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-300"> Statistics </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md text-gray-100 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div className="bg-white rounded-lg shadow w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                          <p className="mt-1 text-gray-500 text-sm truncate">Music Name</p>
                          <h3 className="text-gray-900 text-xl font-medium flex-1 truncate">{music?.title}</h3>
                        </div>
                        <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={music?.image} alt="" />
                      </div>
                      <div className="w-full mt-10">
                        <ResponsiveContainer width="100%" aspect={1 / 1}>
                          <BarChart width="100%" data={data} margin={{ top: 0, right: 30, left: -10, bottom: 30 }}>
                            <XAxis dataKey="date" angle={-45} textAnchor="end" interval={0} tick={{ fontSize: 12 }} stroke="white" />
                            <YAxis stroke="white" />
                            <Tooltip cursor={{ fill: "transparent" }} />
                            <Legend
                              wrapperStyle={{
                                position: "relative",
                                marginTop: "10px",
                                color: "white",
                                stroke: "white",
                              }}
                            />
                            {/* <defs>
                              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="10%" stopColor="#147eb7" />
                                <stop offset="90%" stopColor="#5b4aff" />
                              </linearGradient>
                              <linearGradient id="colorPv" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="5%" stopColor="#04daff" />
                                <stop offset="95%" stopColor="#090b72" />
                              </linearGradient>
                            </defs> */}
                            <Bar dataKey="unique_plays" fill="#9492f0" />
                            <Bar dataKey="total_plays" fill="#5e74f4" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SideOvers;
