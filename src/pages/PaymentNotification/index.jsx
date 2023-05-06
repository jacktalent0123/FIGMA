import React from "react";

import { Img, Text, Button, Line } from "components";

const PaymentNotificationPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="bg-blue_800 flex flex-col items-start justify-end p-[15px] w-full">
            <Img
              src="images/img_logo1.png"
              className="h-[30px] md:h-auto md:ml-[0] ml-[120px] object-cover w-[9%]"
              alt="logoTwo"
            />
          </div>
          <Text
            className="font-bold italic md:ml-[0] ml-[135px] mt-[15px] text-blue_800 text-left w-auto"
            variant="body1"
          >
            Tuesday 2nd of May 2023
          </Text>
          <div className="bg-white_A700_7f border border-gray_300 border-solid flex flex-col items-start justify-start md:ml-[0] ml-[135px] mr-[693px] mt-[15px] p-2.5 md:px-5 rounded-[5px] w-[43%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[167px] items-end justify-start mt-[5px] self-stretch w-auto sm:w-full">
              <Text
                className="font-bold italic text-black_900 text-left w-auto"
                variant="body1"
              >
                Dear Darren Walsh,
              </Text>
              <Text
                className="font-medium italic text-gray_800 text-left w-auto"
                variant="body1"
              >
                ID: ch_3N3Mx8HNM8Ku4vQR08eo9BGM
              </Text>
            </div>
            <div className="flex flex-col gap-[11px] items-start justify-start mt-[13px] self-stretch w-auto sm:w-full">
              <Text
                className="font-semibold text-blue_800 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Order: Paid
              </Text>
              <Text
                className="font-semibold text-blue_800 text-left w-auto"
                as="h6"
                variant="h6"
              >
                You sent a payment of $88 to Pickrides®
              </Text>
              <Text
                className="font-normal not-italic text-gray_800 text-left w-auto"
                variant="body1"
              >
                It may take a few moments once we sent you the confirmation
                email for your bookings.
              </Text>
            </div>
            <Button
              className="cursor-pointer font-medium h-[34px] italic ml-0.5 md:ml-[0] my-[9px] text-[15px] text-center text-green_700 w-80"
              shape="RoundedBorder2"
              size="md"
              variant="FillGreen50"
            >
              Success: The payment has been processed.
            </Button>
          </div>
          <div className="bg-white_A700_7f border border-gray_300 border-solid flex flex-col items-start justify-start md:ml-[0] ml-[135px] mr-[689px] mt-[18px] pb-[15px] md:px-5 rounded-[5px] w-[43%] md:w-full">
            <div className="bg-blue_800 border border-gray_300 border-solid flex flex-col items-start justify-end p-2 rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] w-full">
              <Text
                className="font-bold text-left text-white_A700 uppercase w-auto"
                as="h6"
                variant="h6"
              >
                Order Details
              </Text>
            </div>
            <div className="flex flex-row gap-28 items-start justify-start ml-3.5 md:ml-[0] mt-[21px] self-stretch w-auto sm:w-full">
              <Text
                className="font-medium text-black_900 text-left w-auto"
                variant="body1"
              >
                Order Description:
              </Text>
              <Text
                className="font-normal not-italic text-gray_800 text-left w-auto"
                variant="body1"
              >
                PickRides Booking: OD2872
              </Text>
            </div>
            <Line className="bg-gray_300_01 h-px w-full" />
            <div className="flex flex-row gap-28 h-[29px] md:h-auto items-start justify-start ml-3.5 md:ml-[0] mt-3 self-stretch w-auto">
              <Text
                className="font-medium text-black_900 text-left w-auto"
                variant="body1"
              >
                Order Number:
              </Text>
              <Text
                className="font-normal not-italic text-gray_800 text-left w-auto"
                variant="body1"
              >
                OD2872
              </Text>
            </div>
            <Line className="bg-gray_300_01 h-px w-full" />
            <div className="flex flex-row gap-28 h-8 md:h-auto items-start justify-start ml-3.5 md:ml-[0] mt-[11px] self-stretch w-auto">
              <Text
                className="font-medium text-black_900 text-left w-auto"
                variant="body1"
              >
                Amount:
              </Text>
              <Text
                className="font-normal not-italic text-gray_800 text-left w-auto"
                variant="body1"
              >
                $88
              </Text>
            </div>
            <Line className="bg-gray_300_01 h-px w-full" />
            <div className="flex flex-row gap-28 h-[31px] md:h-auto items-start justify-start ml-3.5 md:ml-[0] mt-3 self-stretch w-auto sm:w-full">
              <Text
                className="font-medium text-black_900 text-left w-auto"
                variant="body1"
              >
                Card:
              </Text>
              <Text
                className="font-normal not-italic text-gray_800 text-left w-auto"
                variant="body1"
              >
                **** **** **** 5182
              </Text>
            </div>
            <Line className="bg-gray_300_01 h-px w-full" />
            <div className="flex flex-row gap-[184px] items-end justify-start ml-3.5 md:ml-[0] mt-[11px] self-stretch w-auto">
              <Text
                className="font-medium text-black_900 text-left w-auto"
                variant="body1"
              >
                Brand:
              </Text>
              <Text
                className="font-normal not-italic text-gray_800 text-left w-auto"
                variant="body1"
              >
                visa
              </Text>
            </div>
          </div>
          <Text
            className="font-bold italic md:ml-[0] ml-[135px] mt-[34px] text-blue_800 text-left w-auto"
            as="h5"
            variant="h5"
          >
            Thanks for booking with Pickrides
          </Text>
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
          <div className="flex flex-row items-start justify-start md:ml-[0] ml-[132px] mt-1 md:px-5 w-1/4 md:w-full">
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
            <div className="md:h-9 h-[33px] mb-[3px] ml-11 relative w-3/5">
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
          <div className="h-[146px] md:h-[186px] mt-[43px] md:px-5 relative w-full">
            <div className="absolute bg-blue_800 flex flex-col gap-[22px] h-max inset-[0] justify-center m-auto py-[26px] w-full">
              <Text
                className="font-bold md:ml-[0] ml-[570px] text-left text-white_A700 w-auto"
                variant="body1"
              ></Text>
              <Line className="bg-blue_600 h-px mb-[50px] w-full" />
            </div>
            <Text
              className="absolute bottom-[0] font-normal inset-x-[0] leading-[25.00px] mx-auto not-italic text-center text-white_A700 w-[72%] sm:w-full"
              variant="body1"
            >
              You received this message because you are a Pickrides™ customer.
              If you would prefer not to receive these emails in the future, you
              can unsubscribe at any time, just reply this email.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentNotificationPage;
