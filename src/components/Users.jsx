import React, { useEffect, useState } from "react";
import api from "../api/api";
import Table from "./Table";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await api.get("/Users");
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Table title="Users" type="users" data={users} refresh={getUsers} />
  );
};
export default Users;