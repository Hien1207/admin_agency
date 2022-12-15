import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import * as React from "react";

function AddTrip() {
  return (
    <Card sx={{ height: "480px", mb: 4 }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={4}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Thêm chuyến
        </MDTypography>
      </MDBox>
      <MDBox mt={3} pb={2} px={4}>
        <MDBox mb={2} display="flex">
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize" width="100px">
            TripInstance
          </MDTypography>
          <MDBox ml={4} mt={1} width="15rem" display="block">
            <MDBox mb={2} display="flex">
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px">
                departure
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={10}>
                destination
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={10}>
                price
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
            </MDBox>
            <MDBox mb={2} display="flex">
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px">
                departure
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={10}>
                destination
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={10}>
                price
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox mb={2} display="flex">
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize" width="100px">
            Vehicle
          </MDTypography>
          <MDBox ml={4} mt={1} width="15rem" display="block">
            <MDBox mb={2} display="flex">
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px">
                departure
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={10}>
                destination
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={10}>
                price
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
            </MDBox>
            <MDBox mb={2} display="flex">
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px">
                departure
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={10}>
                destination
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
              <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={10}>
                price
              </MDTypography>
              <MDBox ml={2} width="15rem">
                <TextField variant="outlined" sx={{ mt: -1, width: "24ch" }} />
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox mt={4} mb={2} ml="90%" width="50px">
          <MDButton component="" to="/admin/dashboard" variant="gradient" fullWidth color="info">
            Save
          </MDButton>
        </MDBox>
        <MDTypography variant="caption" color="text" fontWeight="bold" width="70px" ml={10}>
          chọn instance nó sẽ view ra các trạm cho mình điền giá, phải bắt buộc chọn xe, có thể chọn
          nhiều xe
        </MDTypography>
      </MDBox>
    </Card>
  );
}

export default AddTrip;
