import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EngineeringIcon from '@mui/icons-material/Engineering';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BoltIcon from '@mui/icons-material/Bolt';
import PowerInputIcon from '@mui/icons-material/PowerInput';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import PowerOffIcon from '@mui/icons-material/PowerOff';
import DoNotDisturbOutlinedIcon from '@mui/icons-material/DoNotDisturbOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >

      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>

  );
};


const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");



  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[900]} !important`,
        },

        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },

        "& .pro-inner-item": {
          padding: "5px 5px 5px 20px !important",
        },

        "& .pro-inner-item:hover": {
          color: "#6788ff !important",
        },

        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}

    >

      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">

          {/* LOGO AND MENU ICON */}

          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 10px 0",
             color: colors.grey[100],
            }}  >

            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="10px"
             >

                <Typography variant="h3" color={colors.grey[100]}>
                  HVPNL
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>


        {!isCollapsed && (
            <Box mb="30px">
              <Box display="flex" justifyContent="center" alignItems="center" mb='20px'>
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/HVPNL.jpg`}
                style={{ cursor: "pointer", borderRadius: "10" }}
                  selected={selected}
                  setSelected={setSelected}
                  to='/'
                />

              </Box>
              <Box textAlign="center" >
                <Item
                title="Haryana Vidyut Prasaran Nigam Limited"
                to="/"
                selected={selected}
                setSelected={setSelected}>
                </Item>


              </Box>
            </Box>
          )}



        <Box paddingLeft={isCollapsed ? undefined : "10%"} sx>
            <SubMenu title="Dashboard"
              variant="h6"
              to="/mainDash"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
                color: colors.grey[100],
              }}>
           

                <Item
              title="Maintenance"
              to="/mainDash"
              icon={<EngineeringIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Substation"
              to="/substationDash"
              icon={<BoltIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
             title="TransmissionLine"
              to="/transmissionlineDash"
              icon={<PowerInputIcon  />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Equipment"
              to="/equipmentDash"
              icon={<HandymanOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            </SubMenu>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >

              Transaction Screen

            </Typography>
            <Item
              title="Transactions"
              to="/transactionScreen"
              icon={<ReceiptLongIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Monitoring Dashboard

            </Typography>



            <SubMenu title="Damaged Transformer"
              to="/damagedTransformer"
              icon={<DangerousOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               color: colors.grey[200],
              }}>

             

                <Item title="Damaged Transformer Data"
                  to="/damagedTransformer"
                  selected={selected}
                  setSelected={setSelected}/>
                <Item title="Damage Analytics"
                  to="/damagetransanalysis"
                  selected={selected}
                  setSelected={setSelected}/>



            </SubMenu>
            <SubMenu title="Tripping Breakdown"
              to="/trippingBreakdown"
              icon={<PowerOffIcon />}
              selected={selected}
              setSelected={setSelected}
             style={{
                color: colors.grey[100],

              }}>

             

                <Item title="Tripping Breakdown Data"
                  to="/trippingBreakdown"
                  selected={selected}
                  setSelected={setSelected}/>
                <Item title="Trip Analytics"
                  to="/tripanalytics"
                  selected={selected}
                  setSelected={setSelected}/>

            </SubMenu>



            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >

              Parameter Violation
            </Typography>
            <Item
              title="Parameter Violation"
              to="/parameterViolation"
            icon={<DoNotDisturbOutlinedIcon/>}
             selected={selected}
             setSelected={setSelected}     

            />

          </Box>
        </Menu>
      </ProSidebar>
    </Box>

  );

};



export default Sidebar;