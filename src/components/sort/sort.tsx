import { useAppSelector, useAppDispatch } from "../../redux/store";
import { setSort } from "../../redux/Slices/sortSlice";

import "./sort.css";

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.sorting.sort);

  const sortItems = ["Самый дешевый", "Самый быстрый", "Самый оптимальный"];

  return (
    <div className="sort">
      {sortItems.map((item, index) => (
        <div
          className={index === sort ? "active sort__item" : "sort__item"}
          key={index}
          onClick={() => dispatch(setSort(index))}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sort;
