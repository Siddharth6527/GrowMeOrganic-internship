import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TableData from "../models/TableData";
import { useState, useEffect } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    editable: true,
  },
  {
    field: "userId",
    headerName: "User ID",
    width: 150,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    width: 300,
    editable: true,
  },
];

const url = "https://jsonplaceholder.typicode.com/posts";

export default function UserTable() {
  const [rows, setRows] = useState<TableData[] | []>([]);

  const sendingRequest = async () => {
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        json.map((item: TableData) => {
          console.log(item);
          console.log(item.id);
          let data: TableData = {
            id: item.id,
            userId: item.userId,
            title: item.title,
            body: item.body,
          };

          setRows((prev) => {
            return [...prev, data];
          });
        })
      )

      .catch((err) => console.log(err));
  };

  useEffect(() => {
    sendingRequest();
  }, []);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{ padding: 1 }}
        rows={rows || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}