import React from "react";

import { Img, Text, Input, Line } from "components";

const BookingconformationPage = () => {
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
            className="font-bold italic md:ml-[0] ml-[135px] mt-4 text-blue_800 text-left w-auto"
            variant="body1"
          >
            Wednesday 19th of April 2023
          </Text>
          <div className="bg-white_A700_7f border border-gray_300 border-solid flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[135px] mr-[284px] mt-3.5 px-2.5 md:px-5 py-4 rounded-[5px] self-stretch w-auto md:w-full">
            <Text
              className="font-bold italic text-black_900 text-left w-auto"
              variant="body1"
            >
              Dear Darren Walsh,
            </Text>
            <Text
              className="font-medium text-blue_800 text-left w-auto"
              as="h6"
              variant="h6"
            >
              Order: Paid
            </Text>
            <Text
              className="font-medium text-blue_800 text-left w-auto"
              as="h6"
              variant="h6"
            >
              Thanks for choosing Pickrides®
            </Text>
            <Text
              className="font-normal leading-[30.00px] not-italic text-gray_800 text-left"
              variant="body1"
            >
              <>
                Now you can travel with the tranquility and confidence that one
                of our representatives will be waiting to meet you at the
                airport. Well be monitoring your flight; in case of flight
                delays.
                <br />
                Please review your personal and flight information and make sure
                to read our refund and cancellation policies.
              </>
            </Text>
          </div>
          <div className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[135px] mr-[283px] mt-[30px] md:px-5 rounded-[5px] w-[71%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="bg-blue_800 border border-gray_300 border-solid flex flex-col items-start justify-start p-[9px] rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] w-full">
                <Text
                  className="font-bold mb-[3px] text-left text-white_A700 uppercase w-auto"
                  as="h6"
                  variant="h6"
                >
                  Order Details
                </Text>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between ml-2.5 md:ml-[0] mt-4 w-[97%] md:w-full">
                <Text
                  className="font-semibold text-black_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Name: Iryna Pazos
                </Text>
                <Text
                  className="font-normal not-italic text-black_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  RESERVATION CODE: 33535
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-2.5 md:ml-[0] mt-[19px] w-[56%] md:w-full">
                <Text
                  className="font-normal not-italic text-black_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                ></Text>
                <Text
                  className="font-normal not-italic text-black_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Phone : +1 2035503904
                </Text>
              </div>
              <div className="h-[850px] md:h-[860px] mt-5 relative w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Input
                      wrapClassName="w-full"
                      className="font-bold p-0 placeholder:text-white_A700 text-base text-left text-white_A700 w-full"
                      name="groupEightyEight"
                      placeholder="Transfer #1"
                      shape="CustomBorderTL5"
                      size="sm"
                      variant="FillBlue800"
                    ></Input>
                    <div className="flex flex-row sm:gap-10 items-center justify-between ml-2.5 md:ml-[0] mt-3.5 w-[68%] md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Transfer type:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        Private Sedan (Sedan, Jetta or similar)
                      </Text>
                    </div>
                    <Line className="bg-gray_300_01 h-px mt-[19px] w-full" />
                    <div className="bg-blue_50 flex flex-col items-center justify-start pt-[9px] w-full">
                      <div className="flex flex-col gap-[13px] justify-start w-full">
                        <div className="flex flex-row items-start justify-between ml-2.5 md:ml-[0] w-[44%] md:w-full">
                          <Text
                            className="font-medium text-black_900 text-left w-auto"
                            variant="body1"
                          >
                            Passengers:
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_800 text-left w-auto"
                            variant="body1"
                          >
                            2
                          </Text>
                        </div>
                        <Line className="bg-gray_300_01 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between ml-2.5 md:ml-[0] mt-[11px] w-[61%] md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Pickup location:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        Cancun International Airport
                      </Text>
                    </div>
                    <Line className="bg-gray_300_01 h-px mt-[15px] w-full" />
                    <div className="bg-blue_50 flex flex-row md:gap-10 gap-[322px] items-start justify-start p-2.5 w-full">
                      <Text
                        className="font-medium mb-1.5 text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Dropoff location:
                      </Text>
                      <Text
                        className="font-normal mb-[5px] not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        Puerto Juarez Ferry
                      </Text>
                    </div>
                    <Line className="bg-gray_300_01 h-px w-full" />
                    <div className="flex flex-row items-start justify-between ml-2.5 md:ml-[0] mt-2.5 w-1/2 md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Pickup date:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        2023-04-20
                      </Text>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center justify-start mt-[17px] pb-4 w-full">
                      <div className="flex flex-col gap-3 justify-start w-full">
                        <Line className="bg-gray_300_01 h-px w-full" />
                        <div className="flex flex-row items-start justify-between ml-2.5 md:ml-[0] w-[49%] md:w-full">
                          <Text
                            className="font-medium text-black_900 text-left w-auto"
                            variant="body1"
                          >
                            Pickup time:
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_800 text-left w-auto"
                            variant="body1"
                          >
                            10:17 AM
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_300_01 h-px w-full" />
                    <div className="flex flex-row sm:gap-10 items-start justify-between ml-2.5 md:ml-[0] mt-2.5 w-[53%] md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Airline:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        JetBlue Airways
                      </Text>
                    </div>
                    <Line className="bg-gray_300_01 h-px mt-4 w-full" />
                    <div className="bg-blue_50 flex flex-row md:gap-10 gap-[337px] items-center justify-start p-2.5 w-full">
                      <Text
                        className="font-medium my-[5px] text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Flight number:
                      </Text>
                      <Text
                        className="font-normal mb-[7px] mt-[3px] not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        4434
                      </Text>
                    </div>
                    <div className="bg-blue_50 h-[43px] mt-[97px] w-full"></div>
                    <div className="bg-blue_50 h-[45px] mt-[46px] w-full"></div>
                    <div className="bg-blue_50 h-12 mt-[49px] w-full"></div>
                    <div className="bg-blue_50 h-12 mt-[47px] w-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[19px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Input
                      wrapClassName="w-full"
                      className="font-bold p-0 placeholder:text-white_A700 text-base text-left text-white_A700 w-full"
                      name="groupNinetyThree"
                      placeholder="Transfer #2"
                      shape="CustomBorderTL5"
                      size="sm"
                      variant="FillBlue800"
                    ></Input>
                    <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[11px] mt-3.5 w-[68%] md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Transfer type:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        Private Sedan (Sedan, Jetta or similar)
                      </Text>
                    </div>
                    <Line className="bg-gray_300_01 h-px mt-[19px] w-full" />
                    <div className="flex flex-row items-start justify-between md:ml-[0] ml-[11px] mt-[9px] w-[44%] md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Passengers:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        2
                      </Text>
                    </div>
                    <Line className="bg-gray_300_01 h-px mt-3 w-full" />
                    <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[11px] mt-[11px] w-[56%] md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Pickup location:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        Puerto Juarez Ferry
                      </Text>
                    </div>
                    <Line className="bg-gray_300_01 h-px mt-3.5 w-full" />
                    <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[11px] mt-2.5 w-[61%] md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Dropoff location:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        Cancun International Airport
                      </Text>
                    </div>
                    <Line className="bg-gray_300_01 h-px mt-4 w-full" />
                    <div className="flex flex-row items-start justify-between md:ml-[0] ml-[11px] mt-2.5 w-1/2 md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Pickup date:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        2023-04-23
                      </Text>
                    </div>
                    <Line className="bg-gray_300_01 h-px mt-[17px] w-full" />
                    <div className="flex flex-row items-start justify-between md:ml-[0] ml-[11px] mt-3 w-[49%] md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Pickup time:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        08:20 AM
                      </Text>
                    </div>
                    <Line className="bg-gray_300_01 h-px mt-4 w-full" />
                    <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[11px] mt-2.5 w-[53%] md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Airline:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        JetBlue Airways
                      </Text>
                    </div>
                    <Line className="bg-gray_300_01 h-px mt-4 w-full" />
                    <div className="flex flex-row items-start justify-between md:ml-[0] ml-[11px] mt-3 w-[46%] md:w-full">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body1"
                      >
                        Flight number:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_800 text-left w-auto"
                        variant="body1"
                      >
                        1452
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-2.5 pb-[13px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Input
                    wrapClassName="w-full"
                    className="font-bold p-0 placeholder:text-white_A700 text-base text-left text-white_A700 w-full"
                    name="groupNinetyFour"
                    placeholder="Extras"
                    shape="CustomBorderTL5"
                    size="sm"
                    variant="FillBlue800"
                  ></Input>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-3.5 md:ml-[0] mt-[23px] w-[88%] md:w-full">
                    <Text
                      className="font-medium text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Ultramar Roundtrip Adult Ferry Ticket from Puerto Juarez
                      to Isla Mujeres
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[93px] text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Quantity:
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[249px] text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      2
                    </Text>
                  </div>
                  <Line className="bg-gray_300_01 h-px mt-5 w-full" />
                  <Text
                    className="font-normal leading-[30.00px] md:ml-[0] ml-[13px] mt-[15px] not-italic text-black_900 text-left"
                    variant="body1"
                  ></Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700_7f border border-gray_300 border-solid flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[135px] mr-[296px] mt-[23px] md:px-5 px-[13px] py-[19px] self-stretch w-auto md:w-full">
            <Text
              className="font-bold text-black_900 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Powered By Service
            </Text>
            <Text
              className="font-bold leading-[25.00px] text-black_900 text-left"
              variant="body1"
            ></Text>
          </div>
          <div className="bg-white_A700_7f border border-gray_300 border-solid flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[135px] mr-[296px] mt-[17px] md:px-5 px-[13px] py-3.5 self-stretch w-auto md:w-full">
            <Text
              className="font-bold text-blue_800 text-left w-auto"
              as="h6"
              variant="h6"
            >
              Tipping the Driver
            </Text>
            <Text
              className="font-normal not-italic text-gray_800 text-left w-auto"
              variant="body1"
            >
              Varies depending on locality. Assume 15% will be enough. Add an
              extra dollar or two if he helps with your luggage.
            </Text>
          </div>
          <div className="bg-white_A700_7f border border-gray_300 border-solid flex flex-col gap-[15px] h-72 md:h-auto items-start justify-start md:ml-[0] ml-[135px] mr-[301px] mt-[18px] px-3 md:px-5 py-[15px] self-stretch w-auto md:w-full">
            <Text
              className="font-bold text-blue_800 text-left w-auto"
              as="h6"
              variant="h6"
            >
              Cancellation and Refund Policies
            </Text>
            <Text
              className="font-normal leading-[35.00px] not-italic text-gray_800 text-left"
              variant="body1"
            >
              <>
                Cancellations made two (2) days, or less, of the transfer date
                will be penalized with 100% of the total amount of the
                reservation.
                <br />
                Cancellations made three (3) or more days before the transfer
                date will be penalized with a penalty of 30% of the total
                reservation.
                <br />
                No Show will be penalized with 100% of the total amount of the
                reservation.
                <br />
                In the assumption case that transfer is cancelled by the
                supplier, we will offer full refund of the amount paid. Requests
                for refund will be valid only 3 days after service date, in
                order to go under approval.
              </>
            </Text>
            <Text
              className="font-medium italic text-blue_800 text-left w-auto"
              variant="body1"
            >
              Please make sure to print this coupon or have it ready to be shown
              on your mobile device, at the moment of your arrival or departure.
            </Text>
          </div>
          <div className="flex flex-row gap-[81px] items-start justify-start md:ml-[0] ml-[135px] mt-[19px] md:px-5 w-1/5 md:w-full">
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
          <footer className="bg-blue_800 flex items-center justify-center mt-[52px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[11px] mt-[26px] w-full">
              <Text
                className="font-bold md:ml-[0] ml-[570px] mr-[634px] text-left text-white_A700 w-auto"
                variant="body1"
              ></Text>
              <Line className="bg-blue_600 h-px mt-[22px] w-full" />
              <Text
                className="font-normal leading-[25.00px] md:ml-[0] ml-[193px] mr-[212px] mt-2.5 not-italic text-center text-white_A700 w-[72%] sm:w-full"
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

export default BookingconformationPage;
