import React from "react";

import { Img, Text, Button, Line } from "components";

const PasswordresetPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-blue_800 flex flex-col items-start justify-end p-[15px] w-full">
          <Img
            src="images/img_logo1.png"
            className="h-[30px] md:h-auto md:ml-[0] ml-[119px] object-cover w-[9%]"
            alt="logoThree"
          />
        </div>
        <div className="bg-white_A700 border border-gray_200 border-solid flex flex-col items-center justify-start mt-[82px] p-[21px] md:px-5 rounded-[5px] shadow-bs1 w-[53%] md:w-full">
          <div className="flex flex-col justify-start mb-[37px] w-2/5 md:w-full">
            <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[75px] w-[49%] md:w-full">
              <Img
                src="images/img_emailmessagesvgrepocom.svg"
                className="h-[136px] w-[136px]"
                alt="emailmessagesvg"
              />
              <Text
                className="font-bold text-blue_800 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Password Reset
              </Text>
            </div>
            <Text
              className="font-normal mt-[18px] not-italic text-black_900 text-left w-auto"
              variant="body1"
            >
              Click the link below to reset your password
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[191px] mt-[34px] mx-auto text-[15px] text-blue_800 text-center w-auto"
              shape="RoundedBorder5"
              size="lg"
              variant="OutlineBlue800"
            >
              Reset Password
            </Button>
            <Text
              className="font-bold md:ml-[0] ml-[94px] mt-[29px] text-black_900 text-left w-auto"
              variant="body1"
            >
              Follow Us:
            </Text>
            <div className="flex flex-row items-center justify-start md:ml-[0] ml-[78px] mt-2.5 w-[35%] md:w-full">
              <Img
                src="images/img_facebooksvgrepocom.svg"
                className="h-8 w-8"
                alt="facebooksvgrepo"
              />
              <Img
                src="images/img_twittersvgrepocom.svg"
                className="h-8 w-8"
                alt="twittersvgrepoc"
              />
              <Img
                src="images/img_instagramsvgrepocom.svg"
                className="h-[31px] ml-0.5 w-8"
                alt="instagramsvgrep"
              />
            </div>
            <Text
              className="font-bold ml-16 md:ml-[0] mt-[22px] text-black_900 text-left w-auto"
              variant="body1"
            >
              Download Our Apps:
            </Text>
            <div className="md:h-11 h-[33px] ml-7 md:ml-[0] mt-[11px] relative w-[74%]">
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
        </div>
        <div className="h-[146px] md:h-[222px] mt-[77px] md:px-5 relative w-full">
          <footer className="absolute bg-blue_800 flex inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col gap-[22px] items-center justify-center mb-[77px] mr-0.5 mt-[26px] w-full">
              <Text
                className="font-bold md:ml-[0] ml-[568px] mr-[634px] text-left text-white_A700 w-auto"
                variant="body1"
              ></Text>
              <Line className="bg-blue_600 h-px w-full" />
            </div>
          </footer>
          <Text
            className="absolute bottom-[0] font-normal inset-x-[0] leading-[25.00px] mx-auto not-italic text-center text-white_A700 w-[72%] sm:w-full"
            variant="body1"
          >
            You received this message because you are a Pickrides™ customer. If
            you would prefer not to receive these emails in the future, you can
            unsubscribe at any time, just reply this email.
          </Text>
        </div>
      </div>
    </>
  );
};

export default PasswordresetPage;
