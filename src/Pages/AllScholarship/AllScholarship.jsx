import ScholarCard from "../../Components/AllScholarship/scholarCard";
import Loader from "../../Shared/Loader";

import useScholarships from "../../Hooks/useScholarships";

const AllScholarship = () => {
  // Get
  const {
    scholarships: allScholarships,
    isPending,
    isError,
    error,
  } = useScholarships();

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="pt-25 pb-20">
      <div className="max-w-[1500px] mx-auto px-4">
        <h1 className="mb-8">All Scholarship</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allScholarships?.map((scholarship) => (
            <ScholarCard
              key={scholarship._id}
              scholarship={scholarship}
            ></ScholarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllScholarship;
