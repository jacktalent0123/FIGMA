import React from "react";

import { Text, Input, Img } from "components";
import { CloseSVG } from "../../assets/images";

const Header = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Text
          className="font-medium font-roboto md:ml-[0] ml-[134px] md:mt-0 my-[18px] text-left text-white_A700 w-auto"
          variant="body1"
        ></Text>
        <Input
          value={inputvalue}
          onChange={(e) => setInputvalue(e)}
          wrapClassName="flex md:ml-[0] ml-[357px] md:mt-0 my-[9px] w-[15%] md:w-full"
          className="font-montserrat font-normal not-italic p-0 placeholder:text-gray_700 text-[15px] text-gray_700 text-left w-full"
          name="groupSixtyThree"
          placeholder="Search"
          suffix={
            inputvalue?.length > 0 ? (
              <CloseSVG
                className="mt-px mb-auto cursor-pointer ml-[35px]"
                onClick={() => setInputvalue("")}
                fillColor="#545454"
                height={18}
                width={18}
                viewBox="0 0 18 18"
              />
            ) : (
              <Img
                src="images/img_search.svg"
                className="mt-px mb-auto cursor-pointer ml-[35px]"
                alt="search"
              />
            )
          }
          shape="srcRoundedBorder5"
          size="smSrc"
          variant="srcFillWhiteA700"
        ></Input>
        <Img
          src="images/img_emailmessagesvgrepocom.svg"
          className="h-10 ml-6 md:ml-[0] mr-[134px] md:mt-0 my-[7px] w-auto"
          alt="appstoreenOne"
        />
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
