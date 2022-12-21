import styled from "styled-components";

export const MenageContent = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: center;
    margin-top: 30px;
`
export const ContentDiv = styled.div`
  margin: 10px;
  text-align: center;
  justify-content: center;
`;
export const CardWork = styled.div`
  background: #4a7f8b;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border-radius: 15px; 
  height: 200px;
  box-shadow: 2px 2px 2px 1px #0000007d;
`;
export const CardName = styled.h1`
  color: #4a7f8b; 
  background: white;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 5px;
`;
export const CardTime = styled.h2`
  color: white; 
  padding-top: 30px;
  font-size: 30px;
`;
export const CardButton = styled.button`
  margin-top: 30px;
  border: none;
  width: 140px;
  height: 30px;
  border-radius: 30px;
  font-size: 18px;
  color: #4a7f8b;
`;
