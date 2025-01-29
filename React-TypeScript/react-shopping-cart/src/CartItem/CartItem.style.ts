import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: arial;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 20px;
  // border: 1px solid black;
  align-item: center;
  
  div{
    flex: 1;
  }
  .information, .btns{
    display: flex;
    justify-content: space-between;
  }
  .btns{
    align-self: end;
    // border: 1px solid black;
    position: initial;
    height: 30px;
    width: 100%;
  }

  img{
    max-width: 80px;
    max-height: 80px;
    object-fit: cover;
    object-position: center;
    margin-left: 20px;
    align-self: center;
    padding-right: 20px;
  }
`;