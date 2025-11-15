import "./tickets.css";

type TicketType = {
  ticket: DataTicketType
}

type DataTicketType = {
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

const Tickets: React.FC<TicketType> = ({ ticket }) => {
  return (
    <div className="tickets-container">
      <div className="tickets-container__item">
        <div className="tickets-container__item__info">
          <div className="tickets-container__item__info__price">
            <div className="price">{ticket.price} P</div>
            <div className="transfer-info">
              {ticket.to} - {ticket.from}
            </div>
            <div className="transfer-time-info">
              {ticket.startTime} - {ticket.endTime}
            </div>
          </div>
          <div className="tickets-container__item__info__time">
            <div className="status">В пути</div>
            <div className="time">{ticket.time}</div>
          </div>
          <div className="tickets-container__item__info__company">
            <img
              className="transfers-img"
              src={ticket.imgUrl}
              alt="avia-company"
            />
            <div className="transfers">Пересадки</div>
            <div className="transfers-counter">
              {ticket.counterTransfer}{" "}
              {ticket.counterTransfer === 0 ? "пересадок" : ""}{" "}
              {ticket.counterTransfer === 1 ? "пересадка" : ""}{" "}
              {ticket.counterTransfer >= 2 ? "пересадки" : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
