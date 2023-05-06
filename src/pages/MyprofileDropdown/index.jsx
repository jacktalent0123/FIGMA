import React from "react";

import { Img, Text, Button } from "components";

const MyprofileDropdownPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto justify-start mx-auto pb-[464px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex h-16 md:h-[134px] justify-end md:px-5 relative w-full">
            <Img
              src="images/img_logo1.png"
              className="h-[37px] mb-[11px] ml-[137px] mt-auto object-cover w-[11%]"
              alt="logoOne"
            />
            <div className="absolute bg-blue_800 flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-center justify-center m-auto p-[15px] w-full">
              <Img
                src="images/img_logo1.png"
                className="sm:flex-1 h-[30px] md:h-auto md:ml-[0] ml-[120px] object-cover w-auto sm:w-full"
                alt="logoOne_One"
              />
              <div className="flex flex-row gap-[29px] items-center justify-start mb-0.5 mr-[119px] self-stretch w-auto">
                <Text
                  className="font-bold text-left text-white_A700 w-auto"
                  variant="body1"
                >
                  Rs.
                </Text>
                <Img
                  src="images/img_ellipse2_24x24.png"
                  className="h-6 md:h-auto rounded-[50%] w-6"
                  alt="ellipseTwo"
                />
                <Button
                  className="flex h-[22px] items-center justify-center w-[22px]"
                  shape="icbRoundedBorder12"
                  size="smIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_question.svg"
                    className=""
                    alt="question"
                  />
                </Button>
                <div className="flex flex-row gap-2 items-start justify-start w-[45%]">
                  <Text
                    className="bg-teal_A700 h-8 p-2 rounded-[50%] text-left text-white_A700 w-8"
                    variant="body4"
                  >
                    AT
                  </Text>
                  <Text
                    className="leading-[18.00px] text-left text-white_A700"
                    variant="body4"
                  ></Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-1 md:px-10 sm:px-5 px-[135px] w-full">
          <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col items-end justify-start p-1.5 md:px-5 rounded-sm shadow-bs w-[17%] md:w-full">
            <div className="flex flex-col gap-3 items-start justify-start my-2 py-1 self-stretch w-auto">
              <div className="flex flex-row gap-2.5 items-start justify-center py-1 self-stretch w-auto">
                <Img
                  src="images/img_frame.svg"
                  className="h-[15px] w-[19px]"
                  alt="frame"
                />
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body2"
                >
                  Manage account
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start py-1 self-stretch w-auto">
                <Img
                  src="images/img_frame_black_900.svg"
                  className="h-[15px] w-[15px]"
                  alt="frame_One"
                />
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body2"
                >
                  Trips
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start py-1 self-stretch w-auto">
                <Img
                  src="images/img_frame_black_900_15x15.svg"
                  className="h-[15px] w-[15px]"
                  alt="frame_Two"
                />
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body2"
                >
                  Genius loyalty program
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start py-1 self-stretch w-auto">
                <Img
                  src="images/img_frame_15x15.svg"
                  className="h-[15px] w-[15px]"
                  alt="frame_Three"
                />
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body2"
                >
                  Rewards & Wallet
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start py-1 self-stretch w-auto">
                <Img
                  src="images/img_question_black_900.svg"
                  className="h-[18px] w-[18px]"
                  alt="question_One"
                />
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body2"
                >
                  Reviews
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start py-1 self-stretch w-auto">
                <Img
                  src="images/img_frame_black_900_16x16.svg"
                  className="h-4 w-4"
                  alt="frame_Four"
                />
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body2"
                >
                  Saved
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start py-1 self-stretch w-auto">
                <Img
                  src="images/img_frame_16x16.svg"
                  className="h-4 w-4"
                  alt="frame_Five"
                />
                <a
                  href="javascript:"
                  className="font-normal not-italic text-gray_900 text-left text-sm w-auto"
                >
                  <Text className="">Sign out</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyprofileDropdownPage;
