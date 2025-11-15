import Sort from "../sort/sort";
import TransferCategory from "../transferCategory/transferCategory";
import CompaniesCategory from "../companiesCategory/companiesCategory";
import Tickets from "../tickets/tickets";

import { useAppSelector, useAppDispatch } from "../../redux/store";
import { downloadingTickets } from "../../redux/Slices/downloadingSlice";
import { setTickets } from "../../redux/Slices/ticketSlice";

import { useEffect } from "react";
import {
  dataTickets,
  sorting,
  transferCategorySort,
  companiesCategorySort,
} from "../../utils/mockApi";

import "./main.css";

const Main: React.FC = () => {
  const download = useAppSelector((state) => state.downloading.downloadTickets);
  const sort = useAppSelector((state) => state.sorting.sort);
  const transfer = useAppSelector(
    (state) => state.transferSorting.transferCategory
  );
  const companies = useAppSelector((state) => state.companySorting.companies);
  const tickets = useAppSelector((state) => state.ticketSort.tickets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let result = dataTickets;
    result = sorting(sort, result);
    result = transferCategorySort(transfer, result);
    result = companiesCategorySort(companies, result);
    dispatch(setTickets(result));
  }, [sort, transfer, companies, dispatch]);

  return (
    <>
      <main>
        <TransferCategory />
        <Sort />
        <CompaniesCategory />
        <div className="tickets-container">
          {tickets
            .filter((_, i) => i <= download)
            .map((item) => (
              <Tickets ticket={item} key={item.id} />
            ))}
        </div>
      </main>
      <button
        className="download-ticket-btn"
        onClick={() => dispatch(downloadingTickets())}
      >
        Загрузить еще билеты
      </button>
    </>
  );
};

export default Main;
