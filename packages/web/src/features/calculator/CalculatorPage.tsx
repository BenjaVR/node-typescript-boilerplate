import { Divider } from "@mui/material";
import CenterLayout from "../../components/layout/CenterLayout";
import RouterButton from "../../components/RouterButton";
import RouterLink from "../../components/RouterLink";
import usePageTitle from "../../hooks/usePageTitle";
import { calculatorRoute, homeRoute } from "../../routes";
import { ReactComponent } from "../../types";

export default function CalculatorPage(): ReactComponent {
  usePageTitle("Calculator");
  return (
    <CenterLayout>
      <RouterLink to={homeRoute.buildPath()}>Back to home</RouterLink>
      <h1>Calculator</h1>
      <p>TODO: calculator form comes here</p>
      <Divider orientation="horizontal" />
      <RouterButton to={calculatorRoute.buildPath()}>
        Consult history
      </RouterButton>
    </CenterLayout>
  );
}
