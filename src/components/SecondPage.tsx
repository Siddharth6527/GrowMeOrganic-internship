import UserTable from "./UserTable";
import DepartmentCheckbox from "./DepartmentCheckbox";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";

const SecondPage = () => {
  return (
    <div>
      <UserTable />
      <Box sx={{ height: 200 }} />
      <Divider />
      <Box sx={{ height: 100 }} />
      <DepartmentCheckbox />
    </div>
  );
};

export default SecondPage;
