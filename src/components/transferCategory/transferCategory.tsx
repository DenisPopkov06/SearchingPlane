import { useAppSelector, useAppDispatch } from "../../redux/store";
import { setTransferCategory } from "../../redux/Slices/transferCategorySlice";

import CheckMark from "./images/CheckMark.png";
import Nothing from "./images/Nothing.png";

import "./transferCategory.css";

const transferCategoryItems = [
  "Без пересадок",
  "1 пересадка",
  "2 пересадка",
  "3 пересадка",
];

const TransferCategory: React.FC = () => {
  const transfer = useAppSelector(
    (state) => state.transferSorting.transferCategory
  );
  const dispatch = useAppDispatch();

  return (
    <div className="category">
      <div className="category__info">Количество пересадок</div>
      <ul className="category__list">
        {transferCategoryItems.map((item, index) => (
          <li
            className="category__list__wrapper"
            key={index}
            onClick={() => dispatch(setTransferCategory(index))}
          >
            <button className="category__list__button__transfer">
              <img
                src={transfer.includes(index) ? CheckMark : Nothing}
                alt="true"
              />
            </button>
            <div className="category__list__item">{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransferCategory;
