import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/route/data/authorsTableData";
import Item from "layouts/route/itemRoute";

function ListRoute() {
  const { columns, rows } = authorsTableData();

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          List Route
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <DataTable
            table={{ columns, rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
          <MDBox mt="-40px">
            <Item
              stt="1"
              dep="Đà Nẵng"
              des="Hồ Chí Minh"
              quantity="1"
              station="Quy Nhơn"
              time="01:20:00"
            />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ListRoute;
