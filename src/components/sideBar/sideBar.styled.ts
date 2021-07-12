import styled from 'styled-components'

export const FilterBarContainer=styled.div`
  width: 232px;
  box-shadow: 0 0 3px black;
  height:265px;
  background-color: white;
  border-radius: 5px;
  &{
    h4{
      font-weight:bold ;
      padding-left: 20px;
    
    }
  }
`
export const FilterItems=styled.div`
  display: block;
  background: white;
  padding: 10px 20px;
  &:hover{
    background: #F1FCFF;
    cursor: pointer;
  }
  &{
    span{
      padding-left:5px ;
      color:#4A4A4A;
      font-family:'Open Sans';
      
    }
  }
`