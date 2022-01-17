import { ComponentProps } from "react";
import { Link as LinkFromRouter } from "react-router-dom";
import { Link } from "@mui/material";
import { ReactComponent } from "../types";

type Props = ComponentProps<typeof LinkFromRouter> &
  ComponentProps<typeof Link>;

export default function RouterLink(props: Props): ReactComponent {
  return <Link component={LinkFromRouter} {...props} />;
}
