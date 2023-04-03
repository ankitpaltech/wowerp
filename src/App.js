
import { Admin, Resource} from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { ThemeProvider } from "react-admin";
import { useTheme } from "react-admin";
// import makeStyles from React
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import theme from "./Theme";
import './App.css';
import { UserList } from "./Users";
import { Dashboard } from "./Dasboard";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import reportWebVitals from "./reportWebVitals";
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import React from "react";

function App() {
  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
  return (
    <><Admin  className="admin" dataProvider={dataProvider} dashboard = {Dashboard}   >
     
      <Resource name="users" options={{label:"Wow users"}} list={UserList} icon = {PersonOutlineRoundedIcon} />
      <Resource name="posts" options={{label:"Video Clips "}} list={UserList} icon={VideocamOutlinedIcon}  />
      <Resource name="comments" options={{label:"Reported Content"}} list={UserList} icon={ReportProblemOutlinedIcon}/>
      <Resource name="albums" options={{label:"Category"}} list={UserList} icon ={AssessmentOutlinedIcon} />
      <Resource name="todos" options={{label:"Info Page"}} list={UserList} icon = {ReportGmailerrorredOutlinedIcon}  />
      <Resource name="photos" options={{label:"FAQ"}} list={UserList} icon = {PlagiarismOutlinedIcon} />
      <Resource name="users5" options={{label:"Push Notification"}} list={UserList} icon= {NotificationsNoneOutlinedIcon} />
      <Resource name="users6" options={{label:"Internal User"}} list={UserList} icon = {PersonAddAltOutlinedIcon}  />
      <Resource name="users7" options={{label:"Explicit Content "}} list={UserList} icon = {PersonAddAltOutlinedIcon} />
      <Resource name="users8" options={{label:"Feedback Messages "}} list={UserList} icon = {PersonAddAltOutlinedIcon} />
      <Resource name="users9" options={{label:"KYC"}} list={UserList} icon = {PersonAddAltOutlinedIcon} />
      <Resource name="users10" options={{label:"Coin Widthdraw Request"}} list={UserList} icon = {PersonAddAltOutlinedIcon} />
      <Resource name="users11" options={{label:"Coin Transfer History"}} list={UserList} icon = {PersonAddAltOutlinedIcon} />
      <Resource name="users12" options={{label:"Coin Earning History"}} list={UserList} icon = {PersonAddAltOutlinedIcon} />
      <Resource name="users13" options={{label:"Free Coin Earning "}} list={UserList} icon = {PersonAddAltOutlinedIcon} />
      <Resource name="users14" options={{label:"Users Deleted "}} list={UserList} icon = {PersonAddAltOutlinedIcon} />
      <Resource name="users15" options={{label:"User feedbacks"}} list={UserList} icon = {PersonAddAltOutlinedIcon} />
      
     


     

      
      
      

      
      </Admin>
      </>
  );
}

export default App;
