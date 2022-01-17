import { Box, Container } from "@mui/material";
import { PropsWithChildren, ReactComponent } from "../../types";

export default function CenterLayout({
  children,
}: PropsWithChildren): ReactComponent {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {children}
      </Box>
    </Container>
  );
}
