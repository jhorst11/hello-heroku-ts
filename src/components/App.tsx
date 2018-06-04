import * as React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100%;
  background: ${props => props.theme.colorBackground};
  color: ${props => props.theme.colorTextDefault};
`;

const App = () => (
  <AppContainer>
    <div>Howdy</div>
  </AppContainer>
);
export default App;
