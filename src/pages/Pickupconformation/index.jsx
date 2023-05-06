import React from "react";

import { Img, Text, Button, Line } from "components";

const PickupconformationPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="bg-blue_800 flex flex-col items-start justify-start p-3 w-full">
            <Img
              src="images/img_logo1.png"
              className="h-[30px] md:h-auto mb-[3px] md:ml-[0] ml-[124px] object-cover w-[9%]"
              alt="logoThree"
            />
          </div>
          <Text
            className="font-bold italic md:ml-[0] ml-[135px] mt-[15px] text-blue_800 text-left w-auto"
            variant="body1"
          >
            Sunday 23rd of April 2023
          </Text>
          <div className="bg-white_A700_7f border border-gray_300 border-solid flex flex-col gap-[3px] items-start justify-start md:ml-[0] ml-[135px] mr-[573px] mt-2.5 px-2.5 md:px-5 py-4 rounded-[5px] self-stretch w-auto md:w-full">
            <Text
              className="font-bold italic text-black_900 text-left w-auto"
              variant="body1"
            >
              Dear Andres Lee
            </Text>
            <Text
              className="font-normal leading-[30.00px] not-italic text-black_900 text-left"
              variant="body1"
            ></Text>
            <Text
              className="font-medium text-black_900 text-left w-auto"
              variant="body1"
            >
              Please click the button
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[193px] text-[15px] text-center text-white_A700 w-auto"
              shape="RoundedBorder5"
              size="md"
              variant="FillBlue800"
            >
              Click to check the info
            </Button>
          </div>
          <div className="bg-white_A700_7f border border-gray_300 border-solid flex flex-col items-start justify-start md:ml-[0] ml-[135px] mr-[749px] mt-[37px] md:px-5 px-[11px] py-3 rounded-[5px] self-stretch w-auto sm:w-full">
            <Text
              className="font-medium italic leading-[30.00px] text-black_900 text-left"
              variant="body1"
            ></Text>
          </div>
          <div className="flex flex-col gap-[3px] items-start justify-start md:ml-[0] ml-[135px] mt-[26px] md:px-5 self-stretch w-auto">
            <Text
              className="font-bold italic text-blue_800 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Regards
            </Text>
            <Text
              className="font-bold italic leading-[30.00px] text-black_900 text-left"
              as="h5"
              variant="h5"
            >
              <>
                Pickrides Team,
                <br />
                Customer Service Manager
              </>
            </Text>
          </div>
          <Line className="bg-blue_gray_100 h-px max-w-[1170px] mt-1.5 mx-auto w-full" />
          <div className="flex flex-row gap-[81px] items-start justify-start md:ml-[0] ml-[135px] mt-7 md:px-5 w-1/5 md:w-full">
            <Text
              className="font-bold text-black_900 text-left w-auto"
              variant="body1"
            >
              Follow Us:
            </Text>
            <Text
              className="font-bold text-black_900 text-left w-auto"
              variant="body1"
            >
              Download Our Apps:
            </Text>
          </div>
          <div className="flex flex-row items-start justify-start md:ml-[0] ml-[131px] mt-1 md:px-5 w-1/4 md:w-full">
            <Img
              src="images/img_facebooksvgrepocom.svg"
              className="h-8 mt-1 w-8"
              alt="facebooksvgrepo"
            />
            <Img
              src="images/img_twittersvgrepocom.svg"
              className="h-8 mt-1 w-8"
              alt="twittersvgrepoc"
            />
            <Img
              src="images/img_instagramsvgrepocom.svg"
              className="h-8 ml-0.5 mt-1 w-8"
              alt="instagramsvgrep"
            />
            <div className="md:h-9 h-[33px] mb-[3px] ml-[45px] relative w-3/5">
              <Img
                src="images/img_appstoreandgoogleplay.png"
                className="absolute bottom-[6%] h-[27px] left-[0] object-cover w-[56%]"
                alt="appstoreandgoog"
              />
              <Img
                src="images/img_appstoreandgoogleplay_33x101.png"
                className="absolute h-[33px] inset-y-[0] my-auto object-cover right-[0] w-[49%]"
                alt="appstoreandgoog_One"
              />
            </div>
          </div>
          <footer className="bg-blue_800 flex items-center justify-center mt-[71px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[19px] mt-[26px] w-full">
              <Text
                className="font-bold md:ml-[0] ml-[569px] mr-[634px] text-left text-white_A700 w-auto"
                variant="body1"
              ></Text>
              <Line className="bg-blue_600 h-px mt-[22px] w-full" />
              <Text
                className="font-normal leading-[25.00px] ml-48 md:ml-[0] mr-[212px] mt-2.5 not-italic text-center text-white_A700 w-[72%] sm:w-full"
                variant="body1"
              >
                You received this message because you are a Pickrides™ customer.
                If you would prefer not to receive these emails in the future,
                you can unsubscribe at any time, just reply this email.
              </Text>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PickupconformationPage;
