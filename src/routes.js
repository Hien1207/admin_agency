// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Subjects from "layouts/subjects";
import Class from "layouts/classed";
import Teacher from "layouts/teacher";
import Student from "layouts/student";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Vehicle from "layouts/vehicle";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "admin/dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/admin/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Manage vehicles",
    key: "admin/vehicle",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/vehicle",
    component: <Vehicle />,
  },
  {
    type: "collapse",
    name: "Manage routes",
    key: "admin/route",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/route",
    component: <Class />,
  },
  {
    type: "collapse",
    name: "Manage tríp",
    key: "admin/trip",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/trip",
    component: <Subjects />,
  },
  {
    type: "collapse",
    name: "History booking",
    key: "admin/history",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/history",
    component: <Teacher />,
  },
  {
    type: "collapse",
    name: "Revenue",
    key: "admin/revenue",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/revenue",
    component: <Student />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "admin/profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/admin/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Logout",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Logout",
    key: "sign-up",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
