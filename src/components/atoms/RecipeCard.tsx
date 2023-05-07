import Image from "next/image";

const RecipeCard: React.FC<{
  title: string;
  imgUrl: string;
  priority: boolean;
}> = ({ title, imgUrl, priority }) => {
  return (
    <div className="flex flex-col min-h-full max-w-[500px] rounded-md shadow-md outline-4 outline-gray-400 hover:transform hover:scale-105 hover:shadow-2xl hover:transition-all ">
      <Image
        priority={priority}
        src={`https:${imgUrl}`}
        sizes="100vw"
        width={0}
        height={0}
        alt="Recipe Image"
        className="rounded-md w-full  h-auto"
      />
      <h2 className="max-w-[300px] p-4 tracking-wider text-xl font-semibold">
        {title}
      </h2>
    </div>
  );
};

export default RecipeCard;
