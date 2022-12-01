import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/tripInstance/data/authorsTableData";
import Item from "layouts/tripInstance/itemStation";

function ListStation() {
  const { columns, rows } = authorsTableData();

  return (
    <Card id="delete-account" sx={{ height: "370px", mb: 4 }}>
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          List Station
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
            <Item stt="1" dep="Đà Nẵng" des="Nha Trang" time="01:20:00" />
            <MDTypography variant="h6" fontWeight="medium" ml={5} fullWidth>
              view các trạm ra ứng với mỗi route được chọn
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ListStation;
