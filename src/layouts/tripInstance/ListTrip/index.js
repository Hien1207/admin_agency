import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import tabledatatrip from "layouts/tripInstance/data/tabledatatrip";
import Item from "layouts/tripInstance/itemTrip";

function ListTrip() {
  const { columns, rows } = tabledatatrip();

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          List TripInstance
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
            <Item stt="1" route="Đà Nẵng" date="22-11-2022" time="07:00:00" />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ListTrip;
