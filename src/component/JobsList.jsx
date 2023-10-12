import React from 'react'
import JobCard from './JobCard'

export default function JobsList({ jobs, addToFilterCategories, filteredCategories }) {
  return (
    <div

      className={`
      ${filteredCategories.length === 0 ? "pt-[48px]" : "pt-6 lg:pt-0"}
      w-[90%] md:w-[90%] lg:w-3/4 mx-auto 
      pb-10 flex flex-col gap-[50px] md:gap-4`}
    >
      {jobs.map((job) => (
        <JobCard
          addToFilterCategories={addToFilterCategories}
          key={job.id}
          job={job}
        />
      ))}
    </div>
  );
}
