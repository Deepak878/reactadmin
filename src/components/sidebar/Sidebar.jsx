import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              {" "}
              <Person2OutlinedIcon />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              {" "}
              <Inventory2Icon />
              <span>Products</span>
            </li>
          </Link>

          <li>
            {" "}
            <LocalGroceryStoreIcon />
            <span>Orders</span>
          </li>
          <li>
            {" "}
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            {" "}
            <QueryStatsIcon />
            <span>Stats</span>
          </li>
          <li>
            {" "}
            <NotificationsIcon />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            {" "}
            <SettingsSystemDaydreamIcon />
            <span>System Health</span>
          </li>
          <li>
            {" "}
            <PsychologyAltIcon />
            <span>Logs</span>
          </li>
          <li>
            {" "}
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            {" "}
            <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
            {" "}
            <LogoutOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
