interface ProductTasteOriginProps {
  taste: string;
  origin: string;
}

const ProductTasteOrigin = (props: ProductTasteOriginProps) => {
  const { origin, taste } = props;
  return (
    <div className="flex items-between gap-2">
      <p className="bg-black dark:bg-white px-2 py-1 rounded-full w-fit h-8 text-white text-xs dark:text-black">
        {taste}
      </p>
      <p className="bg-yellow-900 px-2 py-1 rounded-full w-fit h-8 text-white text-xs">
        {origin}
      </p>
    </div>
  );
};

export default ProductTasteOrigin;
