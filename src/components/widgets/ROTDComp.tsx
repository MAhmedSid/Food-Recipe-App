import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";

import MainWrapper from "../containers/MainWrapper";

const ROTDComp = async () => {
  const url = `https://cdn.contentful.com/spaces/pttstvrer8xs/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=recipeOfTheDay`;
  const res = await fetch(url);
  const data = await res.json();
  const rotdTitle = data.items[0].fields.title;
  const rotdImage = data.includes.Asset[0].fields.file.url;
  const recipeId = data.items[0].fields.recipeOfTheDay.sys.id;

  return (
    <div className="mx-4 md:mx-0">
      <MainWrapper>
        <div className="w-full relative mt-5">
          <div className="rotd-div-shadow">
            <Image
              className="relative -z-10"
              priority={true}
              src={`https:${rotdImage}`}
              alt="recipe of the day"
              width={2000}
              height={100}
              placeholder="blur"
              blurDataURL={`https:${rotdImage}`}
            />
          </div>
          <div className="inner_container md:absolute md:top-[30%] ml-3 md:ml-0 mt-3 md:mt-0 md:left-[7%] ">
            <h2 className="text-shadow  md:text-[#ffffff] max-w-[650px]  text-3xl md:text-5xl font-bold md:leading-relaxed tracking-wide ">
              {rotdTitle}
            </h2>
            <Link href={`/recipes/${recipeId}`}>
              <button
                className={`flex items-center justify-center bg-btn_yellow hover:bg-btn_hover_yellow mt-3 py-2 md:py-4 px-4 md:px-8  rounded text-base tracking-wide`}
              >
                GO FOR RECIPE
              </button>
            </Link>
          </div>
          <div className="rotd-tag w-[160px] text-white pl-2 bg-[#9C1F1E] pb-[7px] flex absolute top-8 ">
            <span className="relative">Recipe of the Day</span>
          </div>
        </div>

        <div className="w-full h-[2rem] bg-black opacity-5 relative mt-6" />
      </MainWrapper>
    </div>
  );
};

export default ROTDComp;
