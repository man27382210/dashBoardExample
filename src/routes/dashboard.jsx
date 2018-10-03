// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/registerList",
    sidebarName: "預約清單",
    navbarName: "預約清單",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/registerListHistory",
    sidebarName: "預約紀錄",
    navbarName: "預約紀錄",
    icon: "content_paste",
    component: TableList
  },
  { redirect: true, path: "/", to: "/registerList", navbarName: "Redirect" }
];

export default dashboardRoutes;
