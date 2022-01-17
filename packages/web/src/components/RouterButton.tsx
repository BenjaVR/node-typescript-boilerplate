import { ComponentProps } from "react";
import { Link as LinkFromRouter } from "react-router-dom";
import { Button } from "@mui/material";
import { ReactComponent } from "../types";

type Props = ComponentProps<typeof LinkFromRouter> &
  ComponentProps<typeof Button>;

export default function RouterButton(props: Props): ReactComponent {
  return <Button component={LinkFromRouter} {...props} />;
}
