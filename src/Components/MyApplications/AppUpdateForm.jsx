import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import UpdateForm from "./UpdateForm";

const AppUpdateForm = ({ application, handleUpdate }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Load applicants
  const { data: applicant, isPending } = useQuery({
    queryKey: ["applicant"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/applicants/${application._id}`);
      return res.data;
    },
  });

  if (isPending) {
    return <Loader></Loader>;
  }

  return (
    <div className="pt-25">
      <div className="max-w-[1500px] mx-auto px-4">
        <h1 className="mb-8">Fill Up the Application Form</h1>
        <UpdateForm handleUpdate={handleUpdate}></UpdateForm>
      </div>
    </div>
  );
};

export default AppUpdateForm;
