import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import * as React from "react";

function AddRoute() {
  return (
    <Card sx={{ height: "500px", mb: 4 }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={4}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Add Route
        </MDTypography>
      </MDBox>
      <MDBox mt={3} pb={2} px={4}>
        <MDBox mb={2} display="flex">
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize" width="70px">
            Route
          </MDTypography>
          <MDBox ml={4} mt={1} width="15rem" display="block">
            <MDBox mb={2} display="flex">
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px">
                dep
              </MDTypography>
              <MDBox ml={4} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={10}>
                description
              </MDTypography>
              <MDBox ml={4} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
            </MDBox>
            <MDBox mb={2} mt={1} display="flex">
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px">
                des
              </MDTypography>
              <MDBox ml={4} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={10}>
                description
              </MDTypography>
              <MDBox ml={4} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox mb={2} mt={4} ml={5} display="flex">
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize" width="100px">
            Roustation
          </MDTypography>
          <MDTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            width="100px"
            mt={0}
            ml={0.5}
          >
            Quantity station (up to 2 stations)
          </MDTypography>
          <MDBox ml={3.8} width="15rem">
            <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
          </MDBox>
        </MDBox>
        <MDBox mb={2} ml={18} mt={4} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold" width="55px">
            station 1
          </MDTypography>
          <MDBox ml={2} width="15rem">
            <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
          </MDBox>
          <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={8}>
            description
          </MDTypography>
          <MDBox ml={2} width="15rem">
            <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
          </MDBox>
          <MDTypography variant="caption" color="text" fontWeight="bold" width="50px" ml={8}>
            time
          </MDTypography>
          <MDBox ml={0} width="15rem">
            <TextField
              id="time"
              label="Select Time"
              type="time"
              defaultValue="03:30"
              sx={{ width: 250, mt: -1 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MDBox>
        </MDBox>
        <MDBox mb={2} ml={18} mt={4} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold" width="55px">
            station 2
          </MDTypography>
          <MDBox ml={2} width="15rem">
            <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
          </MDBox>
          <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={8}>
            description
          </MDTypography>
          <MDBox ml={2} width="15rem">
            <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
          </MDBox>
          <MDTypography variant="caption" color="text" fontWeight="bold" width="50px" ml={8}>
            time
          </MDTypography>
          <MDBox ml={0} width="15rem">
            <TextField
              id="time"
              label="Select Time"
              type="time"
              defaultValue="03:30"
              sx={{ width: 250, mt: -1 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MDBox>
        </MDBox>
        <MDBox mt={4} mb={2} ml="88%" width="50px">
          <MDButton component="" to="/admin/dashboard" variant="gradient" fullWidth color="info">
            Save
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default AddRoute;
