import Card from "@mui/material/Card";
import { getVehicle } from "Apis/vehicle.api";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/vehicle/data/authorsTableData";
import Item from "layouts/vehicle/itemVehicle";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

function ListVehicle(props) {
  const { clickSave, setClickSave } = props;
  const { columns, rows } = authorsTableData();
  const [Vehicles, setVehicles] = useState([]);
  useEffect(() => {
    getVehicle(setVehicles);
  }, []);
  useEffect(() => {
    getVehicle(setVehicles);
    setClickSave(false);
  }, [clickSave]);
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          List vehicle
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
            {Vehicles.map((item) => (
              <Item
                stt={item.id.toString()}
                name={item.name}
                licensePlate={item.name}
                seatQuantity="46"
                status="true"
                key={item.id}
              />
            ))}
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

ListVehicle.propTypes = {
  clickSave: PropTypes.bool.isRequired,
  setClickSave: PropTypes.func.isRequired,
};

export default ListVehicle;
