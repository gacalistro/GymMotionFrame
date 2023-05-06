import { ClassesDataType } from "../scenes/OurClasses";

export function ClassItemCard({ name, image, description }: ClassesDataType) {
  return (
    <li className="inline-block relative overflow-hidden mr-2 rounded-md shadow-md border border-primary-500/40">
      <img src={image} alt="" className="h-80" />
      <div className="absolute bottom-0 left-0 whitespace-normal bg-gray-900/70 px-4 py-5">
        <span className="text-primary-300 font-bold text-xl uppercase">
          {name}
        </span>
        <p className="text-sm text-gray-20 text-justify">{description}</p>
      </div>
    </li>
  );
}
