import { Layout } from "antd";
import styled from "styled-components";

const { Header, Content, Sider } = Layout;

export const AppContent = styled.div`
  width: 100%;
`

export const AntLayout = styled(Layout)`
  background: #84AAB2 ;
`;
export const AntContent = styled(Content)`
  height: 90vh;
`;
export const AntHeader = styled(Header)`
  background: white !important;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  color: white !important;
  height : 80px !important;
`;

export const AntSider = styled(Sider)`
  background: white !important;
`
