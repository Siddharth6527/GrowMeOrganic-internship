import UserTable from "../components/UserTable";
import Departments from "../components/Departments";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";

const Home = () => {
  return (
    <div>
      <UserTable />
      <Box sx={{ height: 200 }} />
      <Divider />
      <Box sx={{ height: 100 }} />
      <Departments />
    </div>
  );
};

export default Home;
