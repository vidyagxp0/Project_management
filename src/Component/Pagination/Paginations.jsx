import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginations = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  

  const handlePageChange = (event, newPage) => {
    onPageChange(newPage);
  };

  return (
  <div className="flex justify-end mt-4">
      <Stack spacing={2} direction="row" justifyContent="center">
     
     <Pagination
       count={10}
       page={currentPage}
       onChange={handlePageChange}
       variant="outlined"
       shape="rounded"
     />
   </Stack>
  </div>
  );
};

export default Paginations;
