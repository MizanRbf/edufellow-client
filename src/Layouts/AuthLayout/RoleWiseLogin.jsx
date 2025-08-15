import React from "react";

const RoleWiseLogin = ({ setEmail, setPassword }) => {
  // HandleAdminLogin
  const handleAdminLogin = () => {
    setEmail("admin@gmail.com");
    setPassword("Admin@123");
  };

  // HandleModeratorLogin
  const handleModeratorLogin = () => {
    setEmail("moderator@gmail.com");
    setPassword("Moderator@123");
  };
  return (
    <div className="bg-white rounded-sm space-y-2 p-2 cursor-pointer">
      <p className="font-bold hover:bg-primary px-2 hover:text-white">
        <button onClick={handleAdminLogin}>Login as Admin</button>
      </p>
      <p className="font-bold hover:bg-primary px-2 hover:text-white">
        <button onClick={handleModeratorLogin}>Login as Moderator</button>
      </p>
    </div>
  );
};

export default RoleWiseLogin;
