type arrTicket = {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: string;
  time: string;
  startTime: string;
  endTime: string;
  imgUrl: string;
  counterTransfer: number;
};

export const dataTickets: arrTicket[] = [
  {
    id: 1,
    from: "Moscow",
    to: "Saint Petersburg",
    company: "Победа",
    price: 13000,
    currency: "RUB",
    time: "5 ч 0 мин",
    startTime: "12:00",
    endTime: "17:00",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Logo-pobeda-en.svg/220px-Logo-pobeda-en.svg.png",
    counterTransfer: 0,
  },
  {
    id: 2,
    from: "Novosibirsk",
    to: "Yekaterinburg",
    company: "Red Wings",
    price: 21000,
    currency: "RUB",
    time: "1 ч 30 мин",
    startTime: "16:00",
    endTime: "17:30",
    imgUrl:
      "https://www.columbista.com/data/carrier_logo/119/big-5e25826b419b8.png",
    counterTransfer: 1,
  },
  {
    id: 3,
    from: "Kazan",
    to: "Nizhny Novgorod",
    company: "S7 Airlines",
    price: 15500,
    currency: "RUB",
    time: "6 ч 0 мин",
    startTime: "1:00",
    endTime: "7:00",
    imgUrl:
      "https://static.tildacdn.com/tild3464-3632-4132-b135-356138396636/S7_Airlines-Logowine.svg",
    counterTransfer: 1,
  },
  {
    id: 4,
    from: "Chelyabinsk",
    to: "Samara",
    company: "Red Wings",
    price: 16000,
    currency: "RUB",
    time: "3 ч 30 мин",
    startTime: "0:00",
    endTime: "3:30",
    imgUrl:
      "https://www.columbista.com/data/carrier_logo/119/big-5e25826b419b8.png",
    counterTransfer: 0,
  },
  {
    id: 5,
    from: "Omsk",
    to: "Rostov-on-Don",
    company: "Red Wings",
    price: 20000,
    currency: "RUB",
    time: "4 ч 30 мин",
    startTime: "16:00",
    endTime: "20:30",
    imgUrl:
      "https://www.columbista.com/data/carrier_logo/119/big-5e25826b419b8.png",
    counterTransfer: 2,
  },
  {
    id: 6,
    from: "Ufa",
    to: "Krasnoyarsk",
    company: "Победа",
    price: 12500,
    currency: "RUB",
    time: "3 ч 0 мин",
    startTime: "20:30",
    endTime: "23:30",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Logo-pobeda-en.svg/220px-Logo-pobeda-en.svg.png",
    counterTransfer: 3,
  },
  {
    id: 7,
    from: "Voronezh",
    to: "Perm",
    company: "Победа",
    price: 14000,
    currency: "RUB",
    time: "4 ч 30 мин",
    startTime: "5:30",
    endTime: "10:00",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Logo-pobeda-en.svg/220px-Logo-pobeda-en.svg.png",
    counterTransfer: 2,
  },
  {
    id: 8,
    from: "Volgograd",
    to: "Ufa",
    company: "S7 Airlines",
    price: 24000,
    currency: "RUB",
    time: "4 ч 0 мин",
    startTime: "2:00",
    endTime: "6:00",
    imgUrl:
      "https://static.tildacdn.com/tild3464-3632-4132-b135-356138396636/S7_Airlines-Logowine.svg",
    counterTransfer: 0,
  },
  {
    id: 9,
    from: "Sochi",
    to: "Kaliningrad",
    company: "S7 Airlines",
    price: 28000,
    currency: "RUB",
    time: "2 ч 0 мин",
    startTime: "13:00",
    endTime: "16:00",
    imgUrl:
      "https://static.tildacdn.com/tild3464-3632-4132-b135-356138396636/S7_Airlines-Logowine.svg",
    counterTransfer: 0,
  },
  {
    id: 10,
    from: "Irkutsk",
    to: "Khabarovsk",
    company: "S7 Airlines",
    price: 25000,
    currency: "RUB",
    time: "2 ч 0 мин",
    startTime: "19:00",
    endTime: "21:00",
    imgUrl:
      "https://static.tildacdn.com/tild3464-3632-4132-b135-356138396636/S7_Airlines-Logowine.svg",
    counterTransfer: 1,
  },
  {
    id: 11,
    from: "Vladivostok",
    to: "Samara",
    company: "Red Wings",
    price: 19000,
    currency: "RUB",
    time: "3 ч 30 мин",
    startTime: "18:30",
    endTime: "22:00",
    imgUrl:
      "https://www.columbista.com/data/carrier_logo/119/big-5e25826b419b8.png",
    counterTransfer: 1,
  },
];

export function sorting(sort: number, ticketArr: arrTicket[]) {

  const copyTicketArr = [...ticketArr]
  
  if (sort === 0) {
    return copyTicketArr.sort((a, b) => a.price - b.price);
  } else if (sort === 1) {
    return copyTicketArr
      .map((obj) => {
        const parts = obj.time.split(" ");
        const hours = Number.parseInt(parts[0]);
        const minutes = Number.parseInt(parts[2]);
        return {
          ...obj,
          totalMinutes: (hours * 60 + minutes)
        };
      })
      .sort((a, b) => a.totalMinutes - b.totalMinutes);
  } else {
    return copyTicketArr.sort((a, b) => a.counterTransfer - b.counterTransfer);
  }
}

export function transferCategorySort(arrSort: number[], ticketArr: arrTicket[]){
  if (arrSort.length === 0) return ticketArr;

  return ticketArr.filter(item => arrSort.includes(item.counterTransfer))
}

type SortType = {
  name: string;
  id: number
}

export function companiesCategorySort(arrSort: SortType[], ticketArr: arrTicket[]){
  if (arrSort.length === 0) return ticketArr;

  return ticketArr.filter(item => 
    arrSort.some(company => company.name === item.company)
  );
}
