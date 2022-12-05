/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import * as React from "react";

function ItemRoute({ stt, dep, des, quantity, station, time, hide }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDBox pl={3} display="flex" height="3.5rem" pt={2} borderBottom="0.2px solid #f0f2f5">
      <MDTypography variant="caption" color="text" fontWeight="medium" marginLeft="5px" width="5%">
        {stt}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" ml={8} width="13%">
        {dep}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" ml={0} width="13%">
        {des}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" ml={0} width="13%">
        {quantity}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" ml={0} width="13%">
        {station}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" ml={0} width="13%">
        {time}
      </MDTypography>
      {hide ? (
        <MDBox display="flex" alignItems="center" mt={-2} width="30%">
          {null}
        </MDBox>
      ) : (
        <MDBox display="flex" alignItems="center" mt={-2} width="30%">
          <MDBox mr={2} ml={2}>
            <MDButton variant="text" color="error">
              <Icon>delete</Icon>&nbsp;delete
            </MDButton>
          </MDBox>
          <MDButton variant="text" color={darkMode ? "white" : "dark"}>
            <Icon>edit</Icon>&nbsp;edit
          </MDButton>
        </MDBox>
      )}
    </MDBox>
  );
}

ItemRoute.propTypes = {
  stt: PropTypes.string.isRequired,
  dep: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  station: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
};

export default ItemRoute;
