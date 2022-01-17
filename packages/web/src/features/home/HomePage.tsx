import { Divider } from "@mui/material";
import CenterLayout from "../../components/layout/CenterLayout";
import RouterButton from "../../components/RouterButton";
import usePageTitle from "../../hooks/usePageTitle";
import { calculatorRoute } from "../../routes";
import { ReactComponent } from "../../types";

export default function HomePage(): ReactComponent {
  usePageTitle("Home");

  return (
    <CenterLayout>
      <h1>Welcome to My App!</h1>
      <Divider orientation="horizontal" />
      <RouterButton to={calculatorRoute.buildPath()}>
        Go to calculator
      </RouterButton>
    </CenterLayout>
  );
}
