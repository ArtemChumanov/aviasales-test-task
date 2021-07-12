import styled from "styled-components";

export const CartTicket = styled.div`
  width: 100%;
  border: 1px solid silver;
  box-shadow: 0 0 2px black;
  margin: 20px 0;
  background: white;
  border-radius: 5px;
`;
export const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 28px 15px 28px;
  & {
    span {
      color: #2196f3;
      font-size: 25px;
      font-weight: 600;
      font-family: "Open Sans", serif;
    }
  }
`;
export const Segments = styled.div`
  margin: 0 20% 0 10px;
`;
export const Segment = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 18px 20px;
`;
export const SegmentInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  & {
    span {
      font-family: "Open Sans", serif;
      font-size: 14px;
      padding-top: 5px;
    }
  }
  &:last-child {
    width: 120px;
  }
`;
export const HeadInfo = styled.span`
  text-transform: uppercase;
  color: #979797;
  font-size: 14px;
  font-family: "Open Sans", serif;
`;
