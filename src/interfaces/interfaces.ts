export interface IListTickets {
  searchId: string;
  sort: string;
  count: number;
}

export interface INavbar {
  setSort: any;
}

export interface ISideBar {
  setFilterTickets: any;
  filterTicket: IFilterTicket;
}

interface IFilterTicket {
  all: boolean;
  oneStop: boolean;
  twoStops: boolean;
  threeStops: boolean;
  noneStops: boolean;
}

export interface ITicketItem {
  ticket: Ticket;
}
interface Ticket {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    }
  ];
}
