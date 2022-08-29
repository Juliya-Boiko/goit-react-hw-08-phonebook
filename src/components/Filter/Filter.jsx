import { filterItems } from "redux/contactsSlice";
import { useRedux } from "hooks/useRedux";
import { getFilterValue } from "redux/contactsSlice";
import { FilterInput } from "./Filter.styled";


export const Filter = () => {
  const [dispatch, useSelector] = useRedux();
  const filter = useSelector(getFilterValue);

  const filterHandler = evt => {
    dispatch(filterItems(evt.target.value));
  }; 

  return (
    <FilterInput
      type="text"
      name="filter"
      placeholder="type name..."
      value={filter}
      onChange={filterHandler}
    />
  );
};