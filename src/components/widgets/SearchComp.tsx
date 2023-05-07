import MainWrapper from "../containers/MainWrapper";

import { AiOutlineSearch } from "react-icons/ai";

const SearchComp = () => {
  return (
    <div id="search" className="h-52 bg-black bg-opacity-5 mt-9">
      <MainWrapper>
        <div className="inner_container flex flex-col items-center justify-center">
          <h2 className="text-[26px] text-primary_black mt-7 tracking-wider font-semibold">
            FIND MORE RECIPES
          </h2>
          <form className="flex flex-col items-center ">
            <div className=" focus:border-black  flex bg-white md:w-[750px]  m-2 p-1 rounded-full  border-2 border-[#BFBFBF] focus-within:border-black">
              <AiOutlineSearch className="text-3xl mx-2 my-1" />
              <input
                type="text"
                placeholder="I'm craving..."
                className="w-full rounded-full text-lg focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-24 text-md font-medium mt-2 tracking-wider rounded-sm text-primary_black bg-btn_yellow hover:bg-btn_hover_yellow"
            >
              SEARCH
            </button>
          </form>
        </div>
      </MainWrapper>
    </div>
  );
};

export default SearchComp;
