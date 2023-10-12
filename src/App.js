import { useEffect, useState } from "react"
import JobsList from "./component/JobsList"
import JobFilter from "./component/JobFilter"

function App() {
  const [jobs, setJobs] = useState([])
  const [filteredCategories, setFilterCategories] = useState([])
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const getJobsData = async () => {
    const getJobsRes = await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    if (getJobsRes.ok) {
      const jobsList = await getJobsRes.json();
      setJobs(jobsList);
    }
  }

  useEffect(() => {
    getJobsData()
  }, [])

  const addToFilterCategories = (category) => {
    if (!filteredCategories.includes(category)) {
      setFilterCategories([...filteredCategories, category])
    }
  }

  const removerFilterItem = (item) => {
    const updatedFilter = filteredCategories.filter(
      (category) => category !== item
    )
    setFilterCategories(updatedFilter);
  }

  const clearAllFilter = () => {
    setFilterCategories([])
  }

  useEffect(() => {
    const filteredJobs = []
    jobs.filter(
      (job) => {
        const jobCategories = [...job.languages, ...job.tools, job.level, job.role]
        if (filteredCategories.every((v) => jobCategories.includes(v))) {
        filteredJobs.push(job)
      }
      return filteredJobs
    })
    setFilteredJobs(filteredJobs)
  }, [filteredCategories, jobs])

  return (
    <div className="relative ">
      <div className="w-full h-[20vh] lg:h-[25vh] bg-primary ">
        <div
          className="flex lg:hidden w-full h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("./images/bg-header-mobile.svg")' }}
        />
        <div
          className="hidden lg:flex w-full h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("./images/bg-header-desktop.svg")' }}
        />
      </div>
      <div className=" bg-grayishBackground min-h-[80vh] lg:min-h-[75vh]">
        {filteredCategories.length !== 0 && (
          <JobFilter
            filter={filteredCategories}
            removerFilterItem={removerFilterItem}
            clearAllFilter={clearAllFilter}
          />
        )}

        <JobsList
          addToFilterCategories={addToFilterCategories}
          filteredCategories={filteredCategories}
          jobs={filteredJobs}
        />
      </div>
    </div>
  );
}

export default App;
