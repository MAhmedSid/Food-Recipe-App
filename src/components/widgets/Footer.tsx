import MainWrapper from "../containers/MainWrapper";
import FooterSocialLinksComp from "../atoms/FooterSocialLinksComp";
import FooterNetworkMenuComp from "../atoms/FooterNetworkMenuComp";
import FooterNavLinksComp from "../atoms/FooterNavLinksComp";
import FooterPolicyLinks from "../atoms/FooterPolicyLinks";

import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-black text-white py-7 px-4 md:px-0">
      <MainWrapper>
        <div className="flex flex-col ">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:flex-row gap-8">
              <FooterSocialLinksComp />

              <a href="#header" className="flex gap-2">
                <HiArrowUp />
                <p className="text-xs">BACK TO TOP</p>
              </a>
            </div>

            <div className="flex flex-col items-start mt-4 md:mt-0 md:items-end ">
              <FooterNetworkMenuComp />
              <p className="text-[12px] md:text-[10px] text-[#BFBFBF]">
                &copy; 2023 Warner Bros. Discovery, Inc. or its subsidiaries and
                affiliates. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <FooterNavLinksComp />
            <FooterPolicyLinks />
          </div>
        </div>
      </MainWrapper>
    </div>
  );
};

export default Footer;
