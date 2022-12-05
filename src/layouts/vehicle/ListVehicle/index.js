import Card from "@mui/material/Card";
import { getAllVehicle } from "Apis/vehicle.api";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/vehicle/data/authorsTableData";
import Item from "layouts/vehicle/itemVehicle";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

function ListVehicle(props) {
  const { clickSave, setClickSave, vehicles } = props;
  const { columns, rows } = authorsTableData();
  const [Vehicles, setVehicles] = useState([]);
  useEffect(() => {
    getAllVehicle(setVehicles);
  }, []);
  useEffect(() => {
    getAllVehicle(setVehicles);
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
            {false
              ? Vehicles.map((item, index) => (
                  <Item
                    stt={index + 1}
                    name={item.nameVehicle}
                    licensePlate={item.licensePlate}
                    seatQuantity={item.seatQuantity.quantity}
                    status={item.status ? "true" : "false"}
                    key={item.id}
                  />
                ))
              : vehicles.map((item, index) => (
                  <Item
                    stt={index + 1}
                    name={item.nameVehicle}
                    licensePlate={item.licensePlate}
                    seatQuantity={item.seatQuantity.quantity}
                    status={item.status ? "true" : "false"}
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
  vehicles: PropTypes.arrayOf.isRequired,
};

export default ListVehicle;
