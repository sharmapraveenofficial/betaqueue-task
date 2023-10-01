// import BookingDetail from "../features/bookings/BookingDetail";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Participants from "../features/participants/Participants";
import MeetingTime from "../features/meeting-time/MeetingTime";
import Intro from "../features/introduction/Introduction";
import Questions from "../features/questions/Question";
import Outro from "../features/outro/Outro";
import { Provider } from "react-redux";
import store from "../store/Store";

function Dashboard() {
  return (
    <Provider store={store}>
      <Container>
        <Box sx={{ bgcolor: "#fafafa" }}>
          <Participants />
          <MeetingTime />
          <Intro />
          <Questions />
          <Outro />
        </Box>
      </Container>
    </Provider>
  );
}

export default Dashboard;
