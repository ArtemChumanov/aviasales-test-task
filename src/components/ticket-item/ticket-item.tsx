import React from "react";
import {
  CartTicket,
  PriceInfo,
  Segment,
  Segments,
  SegmentInfo,
  HeadInfo,
} from "./ticket-item.styled";
import {
  convertDate,
  convertDuration,
  formatToStop,
  formatToStopHeader,
} from "../../helpers/helpers";
import S7 from "../../assets/icons/S7.png";
import { ITicketItem } from "../../interfaces/interfaces";

const TicketItem: React.FC<ITicketItem> = ({ ticket }) => {
  const { price, segments } = ticket;
  return (
    <CartTicket>
      <PriceInfo>
        <span>{price} P</span>
        <img src={S7} />
      </PriceInfo>
      <Segments>
        {segments?.map((item, index) => {
          return (
            <Segment key={index}>
              <SegmentInfo>
                <HeadInfo>MOW-HKT</HeadInfo>
                <span>{convertDate(item.date, item.duration)}</span>
              </SegmentInfo>
              <SegmentInfo>
                <HeadInfo>В ПУТИ</HeadInfo>
                <span>{convertDuration(item.duration)}</span>
              </SegmentInfo>
              <SegmentInfo>
                <HeadInfo>{formatToStopHeader(item.stops.length)}</HeadInfo>
                <span>{formatToStop(item.stops)}</span>
              </SegmentInfo>
            </Segment>
          );
        })}
      </Segments>
    </CartTicket>
  );
};
export default TicketItem;
