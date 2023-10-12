import React from 'react'
import Button from "./Button.js"
import RoundedButton from "./RoundedButton.js";
export default function JobCard({ job, addToFilterCategories }) {
  const categories = [...job.languages, ...job.tools, job.level, job.role];
  return (
    <div
      className={`relative w-full pt-12 md:pt-6 lg:pt-8 px-6 lg:px-8 py-6 bg-white rounded shadow-lg shadow-cyan-500/50  
      flex flex-col gap-4 md:flex-row md:justify-between items-center 
      ${
        job.featured &&
        ` before:content-[''] before:absolute before:h-full before:w-[6px] before:top-0 before:left-0 before:rounded-l-lg before:bg-primary`
      }
    `}
    >
      <div className=" w-full md:2/5 lg:w-2/5 flex gap-6 items-center ">
        <div className=" w-16 lg:w-32 absolute top-[-30px] md:relative md:top-0 ">
          <img src={job.logo} alt="logo" className="w-full " />
        </div>

        <div className=" w-full flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <p className="text-primary font-bold text-lg pr-4 ">{job.company}</p>
            {job.new && <RoundedButton>NEW!</RoundedButton>}
            {job.featured && (
              <RoundedButton featured={job.featured}>FEATURED</RoundedButton>
            )}
          </div>
          <div>
            <p className=" text-[22px] text-veryDarkGrayishCyan hover:text-primary font-bold">
              {job.position}
            </p>
          </div>
          <div className="w-5/6 md:w-7/12 lg:w-5/6 flex items-center justify-between text-darkGrayishCyan">
            <p>{job.postedAt}</p>
            <p>.</p>
            <p>{job.contract}</p>
            <p>.</p>
            <p>{job.location}</p>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full h-[1px] bg-darkGrayishCyan" />

      <div className=" w-full md:w-3/5 lg:w-auto flex gap-4 flex-wrap lg:flex-nowrap pt-[5px] lg:pt-[0px]">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => addToFilterCategories(category)}
          >
            {" "}
            {category}{" "}
          </Button>
        ))}
      </div>
    </div>
  );
}
