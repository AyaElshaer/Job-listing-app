import React from 'react'

export default function JobFilter({ filter, removerFilterItem, clearAllFilter })

{
  return (
    <div className=" relative top-[-35px] w-[90%] lg:w-3/4 mx-auto h-auto py-4  px-6 lg:px-8 bg-white rounded flex justify-between items-center shadow-lg shadow-cyan-500/50">
      <div className="flex gap-4 lg:gap-6 items-center flex-wrap">
        {filter.map((filter) => {
          return (
            <div key={filter} className="flex">
              <div className="px-2 py-1 text-primary text-bold bg-grayishFilter rounded-l-sm">
                {filter}
              </div>
              <div
                className="px-3 py-1 text-white text-bold bg-primary rounded-r-sm hover:bg-black flex justify-center items-center"
                onClick={() => removerFilterItem(filter)}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <p
          className="text-primary text-lg text-medium underline hover:cursor-pointer "
          onClick={clearAllFilter}
        >
          Clear
        </p>
      </div>
    </div>
  );
}
