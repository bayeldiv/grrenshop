import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useShop } from "../../context/ProductContext";

const Paginations = () => {
  const { setPage, count } = useShop();
  const handlePage = (n) => setPage(n);

  return (
    <Stack spacing={1}>
      <Pagination
        onChange={handlePage}
        style={{ paddingBlock: "60px", paddingInline: "270px" }}
        count={count}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};
export default Paginations;
