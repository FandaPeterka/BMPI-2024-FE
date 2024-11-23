import { createVisualComponent } from "uu5g05";
import DashboardContent from "../components/dashboard/DashboardContent";
import DashboardProvider from "../context/DashboardContext";
import RequestStatusProvider from "../context/RequestStatusContext";
import StatusIndicator from "../components/StatusIndicator"; 
import { withRoute } from "uu_plus4u5g02-app";
import "../styles/globalDashboard.css";
import "../styles/themes.css";

const DashboardComponent = createVisualComponent({
  uu5Tag: "MyApp.Dashboard",

  render() {
    return (
      <RequestStatusProvider>
        <StatusIndicator />
        <DashboardProvider>
          <DashboardContent />
        </DashboardProvider>
      </RequestStatusProvider>
    );
  },
});

const Dashboard = withRoute(DashboardComponent, { authenticated: true });

export { Dashboard };
export default Dashboard;