import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: role = "user", isLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/role/${user?.email}`);
      return res.data.role;
    },
    enabled: !!user?.email,
  });

  return { role, isLoading };
};

export default useUserRole;
