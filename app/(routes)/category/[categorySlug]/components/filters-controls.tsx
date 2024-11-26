import FilterOrigin from "./filter-origin";
import FilterTaste from "./filter-taste";

type FiltersControlsCategoryProps = {
  setFilterOrigen: (origin: string) => void;
  setFilterTaste: (taste: string) => void;
};

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
  const { setFilterOrigen, setFilterTaste } = props;

  return (
    <div className="sm_w-[350px] sm:mt-5">
      <FilterOrigin setFilterOrigen={setFilterOrigen} />
      <FilterTaste setFilterTaste={setFilterTaste} />
    </div>
  );
};

export default FiltersControlsCategory;
