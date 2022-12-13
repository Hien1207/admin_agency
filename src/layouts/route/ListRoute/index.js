import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/route/data/authorsTableData";
import Item from "layouts/route/itemRoute";
import { PropTypes } from "prop-types";

function ListRoute({ listRoute, listStation, setIsSave, setNotification }) {
  const { columns, rows } = authorsTableData();

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          List Route
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <Item
          stt="STT"
          dep="Departure"
          des="Destination"
          quantity="Quantity"
          station="Station"
          time="Time"
          hide
        />
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <DataTable
            table={{ columns, rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
          <MDBox mt="-40px">
            {listRoute?.map((item, index) => (
              <Item
                stt={index + 1}
                dep={item.route.departure?.nameStation}
                des={item.route.arrival?.nameStation}
                quantity={item.routeStationList.length - 1}
                station={item.routeStationList
                  .slice(0, item.routeStationList.length - 1)
                  .map((itemRouteStation, indexIn) => {
                    if (
                      indexIn ===
                      item.routeStationList.slice(0, item.routeStationList.length - 1).length - 1
                    ) {
                      return `${itemRouteStation.stationS?.nameStation}`;
                    }
                    return `${itemRouteStation.stationS?.nameStation}, `;
                  })}
                // time={item.routeStationList.map((itemRouteStation, indexIn) => {
                //   if (
                //     indexIn ===
                //     item.routeStationList.slice(0, item.routeStationList.length - 1).length - 1
                //   ) {
                //     return `${itemRouteStation.stationS.nameStation}`;
                //   }
                //   return `${itemRouteStation.stationS.nameStation}, `;
                // })}
                time="04:00"
                idRoute={item.route.id}
                hide={false}
                listStation={listStation}
                setIsSave={setIsSave}
                setNotification={setNotification}
              />
            ))}
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}
ListRoute.propTypes = {
  listRoute: PropTypes.arrayOf.isRequired,
  listStation: PropTypes.arrayOf.isRequired,
  setIsSave: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};
export default ListRoute;
