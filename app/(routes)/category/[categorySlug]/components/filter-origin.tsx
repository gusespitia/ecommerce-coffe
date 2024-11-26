import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterOriginProps = {
  setFilterOrigen: (origin: string) => void;
}
const FilterOrigin = (props: FilterOriginProps) => {
  const { setFilterOrigen } = props
  const { result, loading }: FilterTypes = useGetProductField();
  console.log(result);

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origen</p>
      {loading && result === null && <p>Cargando Origen</p>}
      <RadioGroup onValueChange={(value) => setFilterOrigen(value)}>
        {result !== null &&
          result.schema.attributes.origin.enum.map((origin: string) => (
            <div className="flex items-center space-x-2" key={origin}>
              <RadioGroupItem value={origin} id={origin} />
              <Label htmlFor={origin}> {origin} </Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FilterOrigin;
