export const convertDuration = (duration: number) => {
  const hours = Math.round(duration / 60);
  const minutes = Math.round(duration - hours * 60);
  if (minutes < 0 || minutes === 0) {
    return `${hours}ч`;
  }
  return `${hours}ч ${minutes}м`;
};

export const convertDate = (date: string, duration: number) => {
  const currentDate = new Date(date);
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const timestamp = currentDate.setMinutes(currentDate.getMinutes() + duration);
  const endHours = new Date(timestamp).getHours();
  const endMinutes = new Date(timestamp).getMinutes();
  return `${hours}:${minutes} - ${endHours}:${endMinutes}`;
};

export const formatToStopHeader = (count: number) => {
  if (count === 1) {
    return "1 Пересадка";
  } else if (count > 1) {
    return `${count} Пересадки`;
  }
  return "Без пересадок";
};

export const formatToStop = (stops: any[]) => {
  if (stops.length === 0) {
    return "-";
  }
  return stops.join(" ,");
};

export const sortTickets = (
  tickets: any[],
  filterTickets: any[],
  filt: string,
  isFilter: boolean
) => {
  let currentTicket = isFilter ? filterTickets : tickets;
  const sum = (mass: any[]) => {
    return mass.reduce((prev: any, curr: any) => {
      return prev.duration + curr.duration;
    });
  };
  switch (filt) {
    case "The fastest": {
      return currentTicket.sort((a, b) => {
        return sum(a.segments) - sum(b.segments);
      });
    }
    case "The cheapest": {
      return currentTicket.sort((a, b) => (a.price > b.price ? 1 : -1));
    }
    case "Optimal":
      return tickets;

    default:
      return currentTicket;
  }
};

export const filterTickets = (
  state: any[],
  filterState: any[],
  filter: any
) => {
  if (
    filter.oneStop === true &&
    filter.twoStops === false &&
    filter.threeStops === false &&
    filter.noneStops === false &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        el.segments[0].stops.length === 1 && el.segments[1].stops.length === 1
      );
    });
  } else if (
    filter.oneStop === false &&
    filter.twoStops === true &&
    filter.threeStops === false &&
    filter.noneStops === false &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        el.segments[0].stops.length === 2 && el.segments[1].stops.length === 2
      );
    });
  } else if (
    filter.oneStop === false &&
    filter.twoStops === false &&
    filter.threeStops === true &&
    filter.noneStops === false &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        el.segments[0].stops.length === 3 && el.segments[1].stops.length === 3
      );
    });
  } else if (
    filter.oneStop === false &&
    filter.twoStops === false &&
    filter.threeStops === false &&
    filter.noneStops === true &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0
      );
    });
  } else if (
    filter.oneStop === true &&
    filter.twoStops === true &&
    filter.threeStops === false &&
    filter.noneStops === false &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        (el.segments[0].stops.length === 1 &&
          el.segments[1].stops.length === 1) ||
        (el.segments[0].stops.length === 2 && el.segments[1].stops.length === 2)
      );
    });
  } else if (
    filter.oneStop === true &&
    filter.twoStops === false &&
    filter.threeStops === true &&
    filter.noneStops === false &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        (el.segments[0].stops.length === 1 &&
          el.segments[1].stops.length === 1) ||
        (el.segments[0].stops.length === 3 && el.segments[1].stops.length === 3)
      );
    });
  } else if (
    filter.oneStop === false &&
    filter.twoStops === true &&
    filter.threeStops === true &&
    filter.noneStops === false &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        (el.segments[0].stops.length === 2 &&
          el.segments[1].stops.length === 2) ||
        (el.segments[0].stops.length === 3 && el.segments[1].stops.length === 3)
      );
    });
  } else if (
    filter.oneStop === true &&
    filter.twoStops === true &&
    filter.threeStops === true &&
    filter.noneStops === false &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        (el.segments[0].stops.length === 2 &&
          el.segments[1].stops.length === 2) ||
        (el.segments[0].stops.length === 3 &&
          el.segments[1].stops.length === 3) ||
        (el.segments[0].stops.length === 1 && el.segments[1].stops.length === 1)
      );
    });
  } else if (
    filter.oneStop === true &&
    filter.twoStops === false &&
    filter.threeStops === false &&
    filter.noneStops === true &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        (el.segments[0].stops.length === 1 &&
          el.segments[1].stops.length === 1) ||
        (el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0)
      );
    });
  } else if (
    filter.oneStop === true &&
    filter.twoStops === false &&
    filter.threeStops === true &&
    filter.noneStops === true &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        (el.segments[0].stops.length === 1 &&
          el.segments[1].stops.length === 1) ||
        (el.segments[0].stops.length === 3 &&
          el.segments[1].stops.length === 3) ||
        (el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0)
      );
    });
  } else if (
    filter.oneStop === true &&
    filter.twoStops === true &&
    filter.threeStops === false &&
    filter.noneStops === true &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        (el.segments[0].stops.length === 1 &&
          el.segments[1].stops.length === 1) ||
        (el.segments[0].stops.length === 2 &&
          el.segments[1].stops.length === 2) ||
        (el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0)
      );
    });
  } else if (
    filter.oneStop === false &&
    filter.twoStops === true &&
    filter.threeStops === true &&
    filter.noneStops === true &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        (el.segments[0].stops.length === 2 &&
          el.segments[1].stops.length === 2) ||
        (el.segments[0].stops.length === 3 &&
          el.segments[1].stops.length === 3) ||
        (el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0)
      );
    });
  } else if (
    filter.oneStop === false &&
    filter.twoStops === true &&
    filter.threeStops === false &&
    filter.noneStops === true &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        (el.segments[0].stops.length === 2 &&
          el.segments[1].stops.length === 2) ||
        (el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0)
      );
    });
  } else if (
    filter.oneStop === false &&
    filter.twoStops === false &&
    filter.threeStops === true &&
    filter.noneStops === true &&
    filter.all === false
  ) {
    return state.filter((el) => {
      return (
        (el.segments[0].stops.length === 3 &&
          el.segments[1].stops.length === 3) ||
        (el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0)
      );
    });
  } else if (filter.all === true) {
    return state;
  }
  return state;
};
