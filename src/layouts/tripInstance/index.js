import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ListStation from "layouts/tripInstance/ListStation";
import AddTrip from "layouts/tripInstance/AddTrip";
import ListTrip from "layouts/tripInstance/ListTrip";
import { useEffect, useState } from "react";
import { getTripInstance } from "Apis/tripinstance.api";

function Trip() {
  const [tripInstances, setTripInstances] = useState([]);
  useEffect(() => {
    getTripInstance(setTripInstances);
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MDBox
              mt={-3}
              py={3}
              px={2}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
              marginBottom="2rem"
            >
              <MDTypography variant="h6" color="white">
                Manage TripInstance
              </MDTypography>
            </MDBox>
            <MDBox mb={3} display="block">
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <AddTrip />
                </Grid>
                <Grid item xs={12} md={7}>
                  <ListStation />
                </Grid>
              </Grid>
              <ListTrip tripInstances={tripInstances} />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Trip;
