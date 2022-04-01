import Styled from "styled-components";
import { Button } from "@mantine/core";

const Root = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export default function Home() {
  return (
    <Root>
      <Button>Ping Harvey</Button>
    </Root>
  );
}
