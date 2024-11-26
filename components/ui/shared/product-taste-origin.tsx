interface ProductTasteOriginProps {
  taste: string;
  origin: string;
}

const ProductTasteOrigin = (props: ProductTasteOriginProps) => {
  const { origin, taste } = props;
  return (
    <div className="flex gap-3 items-between">
      <p className="px-2 py-1 texts-xs text-white w-fit bg-black rounded-full dark:bg-white dark:text-black">
        {taste}
      </p>
      <p className="px-2 py-1 texts-xs text-white w-fit bg-yellow-900 rounded-full">
        {origin}
      </p>
    </div>
  );
};

export default ProductTasteOrigin;
