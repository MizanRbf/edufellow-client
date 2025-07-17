import { FaUsers, FaUniversity, FaWpforms } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import CountUp from "react-countup";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Stats = ({ allApplications, allReviews, users, allScholarships }) => {
  const totalApplications = allApplications.length || 0;
  const totalReviews = allReviews.length || 0;
  const totalUsers = users.length || 0;
  const totalScholarships = allScholarships.length || 0;

  const stats = [
    {
      title: "Total Scholarships",
      value: totalScholarships,
      icon: <FaUniversity size={28} />,
      bg: "bg-pink-600",
      percent: Math.min((totalScholarships / 200) * 100, 100), // Assuming 200 is max
    },
    {
      title: "Total Users",
      value: totalUsers,
      icon: <FaUsers size={28} />,
      bg: "bg-cyan-500",
      percent: Math.min((totalUsers / 1000) * 100, 100), // Assuming 1000 is max
    },
    {
      title: "Total Applications",
      value: totalApplications,
      icon: <FaWpforms size={28} />,
      bg: "bg-green-500",
      percent:
        totalScholarships > 0
          ? Math.min((totalApplications / totalScholarships) * 100, 100)
          : 0,
    },
    {
      title: "Total Reviews",
      value: totalReviews,
      icon: <MdRateReview size={28} />,
      bg: "bg-orange-400",
      percent:
        totalApplications > 0
          ? Math.min((totalReviews / totalApplications) * 100, 100)
          : 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col justify-between text-white p-4 rounded-md shadow-md ${item.bg}`}
        >
          {/* Top: Title */}
          <div className="mb-4">
            <span className="uppercase text-sm font-semibold">
              {item.title}
            </span>
          </div>

          {/* Bottom: Icon + Count and Circle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {item.icon}
              <span className="text-3xl font-bold">
                <CountUp end={item.value} duration={2} />+
              </span>
            </div>

            <div className="w-10 h-10">
              <CircularProgressbar
                value={item.percent}
                text={`${Math.round(item.percent)}`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "rgba(255,255,255,0.3)",
                  textSize: "28px",
                })}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
