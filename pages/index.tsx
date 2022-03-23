import Styled from "styled-components";

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
      <h1>Harvey Waz 'ere</h1>;
    </Root>
  );
}
