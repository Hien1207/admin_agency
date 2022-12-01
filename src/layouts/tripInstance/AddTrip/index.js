import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import * as React from "react";

function AddTrip() {
  return (
    <Card sx={{ height: "370px", mb: 4 }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={4}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Add TripInstance
        </MDTypography>
      </MDBox>
      <MDBox mt={3} pb={2} px={4}>
        <MDBox mb={2} display="flex">
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize" width="70px">
            Trip station
          </MDTypography>
          <MDBox ml={0} mt={1} width="22rem" display="block">
            <MDBox mb={2} display="flex">
              <MDTypography variant="caption" color="text" fontWeight="bold" width="150px">
                route
              </MDTypography>
              <MDBox ml={0} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
            </MDBox>
            <MDBox mb={2} mt={4} display="flex">
              <MDTypography variant="caption" color="text" fontWeight="bold" width="150px">
                date
              </MDTypography>
              <MDBox ml={0} width="15rem">
                <TextField
                  id="date"
                  label="Select Date"
                  type="date"
                  defaultValue="2022-12-02"
                  sx={{ width: "24ch", mt: -1 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </MDBox>
            </MDBox>
            <MDBox mb={2} mt={4} display="flex">
              <MDTypography variant="caption" color="text" fontWeight="bold" width="150px">
                time start
              </MDTypography>
              <MDBox ml={0} width="15rem">
                <TextField
                  id="time"
                  label="Select Time"
                  type="time"
                  defaultValue="03:30"
                  sx={{ width: "24ch", mt: -1 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox mt={4} mb={2} ml="79%" width="50px">
          <MDButton component="" to="/admin/dashboard" variant="gradient" fullWidth color="info">
            Save
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default AddTrip;
