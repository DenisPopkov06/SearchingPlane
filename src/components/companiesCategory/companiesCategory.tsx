import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setCompanies } from "../../redux/Slices/companyCategorySlice";

import CheckMark from "./images/CheckMark.png";
import Nothing from "./images/Nothing.png";

import "./companiesCategory.css";

const airLineCompanies = [
  { name: "Победа", id: 0 },
  { name: "Red Wings", id: 1 },
  { name: "S7 Airlines", id: 2 },
];

const CompaniesCategory: React.FC = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector((state) => state.companySorting.companies);

  return (
    <div className="category">
      <div className="category__info">Компании</div>
      <ul className="category__list">
        {airLineCompanies.map((obj) => (
          <li
            className="category__list__wrapper"
            key={obj.id}
            onClick={() => dispatch(setCompanies(obj))}
          >
            <button className="category__list__button__companies">
              <img
                src={
                  companies.some((company) => company.id === obj.id)
                    ? CheckMark
                    : Nothing
                }
                alt="true"
              />
            </button>
            <div className="category__list__item">{obj.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompaniesCategory;
