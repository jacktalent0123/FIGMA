import React from "react";

import Header from "components/Header";
import {
  Img,
  Text,
  Button,
  List,
  Line,
  CheckBox,
  SelectBox,
  Input,
} from "components";

const RidesviewPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-blue_800 flex flex-row items-center justify-center md:px-5 w-full" />
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1170px] mt-[19px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_logo4.png"
              className="sm:flex-1 h-[37px] md:h-auto object-cover w-auto sm:w-full"
              alt="logoFour"
            />
            <Text
              className="font-medium text-black_900 text-left w-auto"
              variant="body1"
            >
              Point to Point Airport Transfer Tours Testimonials Contact us
              Shopping Cart
            </Text>
          </div>
          <div className="bg-yellow_800 flex flex-col items-center justify-start mt-[17px] p-5 w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start max-w-[940px] mb-[7px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-[99%] md:w-full">
                <Button
                  className="flex h-[54px] items-center justify-center rounded-[50%] w-[54px]"
                  size="lgIcn"
                  variant="icbFillBlue800"
                >
                  <Img
                    src="images/img_vehiclecabsvgrepocom.svg"
                    className="h-7"
                    alt="vehiclecabsvgre"
                  />
                </Button>
                <Text
                  className="md:mt-0 mt-3.5 not-italic text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  .............................................
                </Text>
                <Button
                  className="flex h-[54px] items-center justify-center rounded-[50%] w-[54px]"
                  size="lgIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_basicflightou.svg"
                    className="h-7"
                    alt="basicflightou"
                  />
                </Button>
                <Text
                  className="md:mt-0 mt-3.5 not-italic text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  .............................................
                </Text>
                <Button
                  className="flex h-[54px] items-center justify-center rounded-[50%] w-[54px]"
                  size="lgIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_ticket4svgrepocom.svg"
                    className="h-[30px]"
                    alt="ticket4svgrepoc"
                  />
                </Button>
                <Text
                  className="md:mt-0 mt-3.5 not-italic text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  .............................................
                </Text>
                <Button
                  className="flex h-[54px] items-center justify-center rounded-[50%] w-[54px]"
                  size="lgIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_paymentmethod.svg"
                    className="h-7"
                    alt="paymentmethod"
                  />
                </Button>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="font-normal not-italic text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Vehicle
                </Text>
                <Text
                  className="font-normal sm:ml-[0] ml-[178px] not-italic text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Flight Details & Extras
                </Text>
                <Text
                  className="font-normal ml-40 sm:ml-[0] not-italic text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Confirmation
                </Text>
                <Text
                  className="font-normal sm:ml-[0] ml-[214px] not-italic text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Payment
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[37px] items-start justify-start max-w-[1176px] mt-[33px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[69%] md:w-full">
              <Text
                className="leading-[40.00px] text-black_900 text-left w-[73%] sm:w-full"
                as="h1"
                variant="h1"
              >
                Airport Transportation to Paradisus Cancun Resort & Spa
              </Text>
              <Text
                className="font-normal leading-[35.00px] mt-[3px] not-italic text-black_900 text-left"
                variant="body1"
              >
                <>
                  Paradisus Cancun a4 diamonds resort by American Automobile
                  Association which features attention to detail, elegance and
                  confort in its facilitiest.
                  <br />
                  All rooms are suites with AAA standards, amenities and views
                  to the sea or lagoon. It has 4 pools, 10 restaurants available
                  during the day with its famous restaurant &quot;Tempo by
                  Martin Berasategui&quot; a 6 stars Michelin chef winner. 7
                  bars with Premium drinks included in its All Inclusive
                  program.
                </>
              </Text>
              <a
                href="javascript:"
                className="font-medium mt-[5px] text-base text-blue_800 text-left underline w-auto"
              >
                <Text className="">Read More</Text>
              </a>
              <Text
                className="mt-[27px] text-black_900 text-left w-auto"
                as="h1"
                variant="h1"
              >
                Taxi options for Paradisus Cancun Resort & Spa
              </Text>
              <Text
                className="font-medium mt-3.5 text-black_900 text-left w-auto"
                variant="body1"
              >
                Address: Boulevard Kukulcan Km 16.5 Zona Hotelera, Cancun, 77500
              </Text>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center mt-6 w-[97%]"
                orientation="horizontal"
              >
                <div className="flex md:h-[155px] h-[157px] justify-end relative w-full">
                  <Text
                    className="font-medium mb-[13px] ml-[26px] mt-auto text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    From $ 103
                  </Text>
                  <div className="absolute bg-blue_800 border-2 border-blue_800 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto py-[11px] rounded-sm w-full">
                    <Text
                      className="font-semibold text-left text-white_A700 w-auto"
                      variant="body1"
                    >
                      Private Sedan
                    </Text>
                    <Img
                      src="images/img_sedanpngclipart.png"
                      className="h-[46px] md:h-auto mt-[5px] object-cover w-1/2 sm:w-full"
                      alt="sedanpngclipart"
                    />
                    <div className="h-8 md:h-[38px] mt-1.5 relative w-full">
                      <div className="absolute flex flex-row h-full inset-y-[0] items-end justify-between left-[2%] my-auto w-[79%]">
                        <Img
                          src="images/img_passengerwaitsvgrepocom.svg"
                          className="h-8 w-8"
                          alt="passengerwaitsv"
                        />
                        <Text
                          className="font-medium mb-[3px] mt-3 text-left text-white_A700 w-auto"
                          variant="body3"
                        >
                          3
                        </Text>
                        <Img
                          src="images/img_luggagetravel.svg"
                          className="h-[22px] mb-[3px] mt-[7px] w-[22px]"
                          alt="luggagetravel"
                        />
                        <Text
                          className="font-medium mb-1 mt-[11px] text-left text-white_A700 w-auto"
                          variant="body3"
                        >
                          3
                        </Text>
                      </div>
                      <Line className="absolute bg-blue_gray_100 h-px inset-x-[0] mx-auto top-[0] w-full" />
                    </div>
                    <Text
                      className="font-bold mt-[9px] text-left text-white_A700 w-auto"
                      variant="body3"
                    >
                      From $ 103
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 border border-gray_300_01 border-solid flex flex-col items-center justify-end py-[11px] rounded-sm w-full">
                  <Text
                    className="font-semibold text-black_900 text-left w-auto"
                    variant="body1"
                  >
                    Private Minivan
                  </Text>
                  <Img
                    src="images/img_image1.png"
                    className="h-[47px] md:h-auto mt-1.5 object-cover w-[53%] sm:w-full"
                    alt="imageOne"
                  />
                  <div className="h-8 md:h-9 mt-1 relative w-full">
                    <div className="absolute flex flex-row h-full inset-y-[0] items-end justify-between left-[2%] my-auto w-[84%]">
                      <Img
                        src="images/img_passengerwaitsvgrepocom_blue_800.svg"
                        className="h-8 w-8"
                        alt="passengerwaitsv"
                      />
                      <Text
                        className="font-medium mb-[3px] mt-3 text-blue_800 text-left w-auto"
                        variant="body3"
                      >
                        8
                      </Text>
                      <Img
                        src="images/img_luggagetravel_blue_800.svg"
                        className="h-[22px] mb-[3px] mt-[7px] w-[22px]"
                        alt="luggagetravel"
                      />
                      <Text
                        className="font-medium mb-1 mt-[11px] text-blue_800 text-left w-auto"
                        variant="body3"
                      >
                        10
                      </Text>
                    </div>
                    <Line className="absolute bg-blue_gray_100 h-px inset-x-[0] mx-auto top-[0] w-full" />
                  </div>
                  <Text
                    className="font-bold mt-[9px] text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    From $ 108
                  </Text>
                </div>
                <div className="bg-white_A700 border border-gray_300_01 border-solid flex flex-col justify-end py-[11px] rounded-sm w-full">
                  <div className="flex flex-col gap-2 items-center justify-start mx-auto w-[64%] md:w-full">
                    <Text
                      className="font-semibold text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Private Van
                    </Text>
                    <Img
                      src="images/img_image1_47x71.png"
                      className="h-[47px] md:h-auto object-cover w-[82%] sm:w-full"
                      alt="imageOne"
                    />
                  </div>
                  <div className="h-8 md:h-[34px] mt-0.5 relative w-full">
                    <div className="absolute flex flex-row h-full inset-y-[0] items-end justify-between left-[2%] my-auto w-[86%]">
                      <Img
                        src="images/img_passengerwaitsvgrepocom_blue_800.svg"
                        className="h-8 w-8"
                        alt="passengerwaitsv"
                      />
                      <Text
                        className="font-medium mb-[3px] mt-3 text-blue_800 text-left w-auto"
                        variant="body3"
                      >
                        10
                      </Text>
                      <Img
                        src="images/img_luggagetravel_blue_800.svg"
                        className="h-[22px] mb-[3px] mt-[7px] w-[22px]"
                        alt="luggagetravel"
                      />
                      <Text
                        className="font-medium mb-1 mt-[11px] text-blue_800 text-left w-auto"
                        variant="body3"
                      >
                        20
                      </Text>
                    </div>
                    <Line className="absolute bg-blue_gray_100 h-px inset-x-[0] mx-auto top-[0] w-full" />
                  </div>
                  <Text
                    className="font-bold md:ml-[0] ml-[25px] mr-11 mt-[9px] text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    From $ 111
                  </Text>
                </div>
                <div className="bg-white_A700 border border-gray_300_01 border-solid flex flex-col items-center justify-end py-[11px] rounded-sm w-full">
                  <Text
                    className="font-semibold text-black_900 text-left w-auto"
                    variant="body1"
                  >
                    Private Minibus
                  </Text>
                  <Img
                    src="images/img_image1_1.png"
                    className="h-[47px] md:h-auto mt-2 object-cover w-[53%] sm:w-full"
                    alt="imageOne"
                  />
                  <div className="h-8 md:h-[34px] mt-0.5 relative w-full">
                    <div className="absolute flex flex-row h-full inset-y-[0] items-end justify-between left-[2%] my-auto w-[83%]">
                      <Img
                        src="images/img_passengerwaitsvgrepocom_blue_800.svg"
                        className="h-8 w-8"
                        alt="passengerwaitsv"
                      />
                      <Text
                        className="font-medium mb-[3px] mt-3 text-blue_800 text-left w-auto"
                        variant="body3"
                      >
                        17
                      </Text>
                      <Img
                        src="images/img_luggagetravel_blue_800.svg"
                        className="h-[22px] mb-[3px] mt-[7px] w-[22px]"
                        alt="luggagetravel"
                      />
                      <Text
                        className="font-medium mb-1 mt-[11px] text-blue_800 text-left w-auto"
                        variant="body3"
                      >
                        19
                      </Text>
                    </div>
                    <Line className="absolute bg-blue_gray_100 h-px inset-x-[0] mx-auto top-[0] w-full" />
                  </div>
                  <Text
                    className="font-bold mt-[9px] text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    From $ 172
                  </Text>
                </div>
                <div className="bg-white_A700 border border-gray_300_01 border-solid flex flex-col items-start justify-end py-[11px] rounded-sm w-full">
                  <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[26px] w-[56%] md:w-full">
                    <Text
                      className="font-semibold text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Premium
                    </Text>
                    <Img
                      src="images/img_image1_2.png"
                      className="h-[47px] md:h-auto md:ml-[0] ml-[5px] object-cover w-[94%] sm:w-full"
                      alt="imageOne"
                    />
                  </div>
                  <div className="h-8 md:h-[34px] mt-0.5 relative w-full">
                    <div className="absolute flex flex-row h-full inset-y-[0] items-end justify-between left-[2%] my-auto w-[79%]">
                      <Img
                        src="images/img_passengerwaitsvgrepocom_blue_800.svg"
                        className="h-8 w-8"
                        alt="passengerwaitsv"
                      />
                      <Text
                        className="font-medium mb-[3px] mt-3 text-blue_800 text-left w-auto"
                        variant="body3"
                      >
                        6
                      </Text>
                      <Img
                        src="images/img_luggagetravel_blue_800.svg"
                        className="h-[22px] mb-[3px] mt-[7px] w-[22px]"
                        alt="luggagetravel"
                      />
                      <Text
                        className="font-medium mb-1 mt-[11px] text-blue_800 text-left w-auto"
                        variant="body3"
                      >
                        7
                      </Text>
                    </div>
                    <Line className="absolute bg-blue_gray_100 h-px inset-x-[0] mx-auto top-[0] w-full" />
                  </div>
                  <Text
                    className="font-bold md:ml-[0] ml-[29px] mt-[9px] text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    From $ 231
                  </Text>
                </div>
              </List>
              <List
                className="flex-col gap-[27px] grid items-center mt-[41px] w-[97%]"
                orientation="vertical"
              >
                <div className="bg-white_A700 border-[3px] border-blue_800 border-solid flex flex-col pb-[3px] pl-[3px] relative rounded-[5px] w-full">
                  <div className="flex flex-col items-center justify-start mt-[-NaNpx] mx-auto w-full z-[1]">
                    <div className="flex flex-col gap-[22px] justify-start w-full">
                      <div className="bg-blue_800 flex flex-col items-start justify-start p-[9px] rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Private Sedan
                        </Text>
                      </div>
                      <Text
                        className="font-bold md:ml-[0] ml-[196px] text-black_900 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Sedan, Jetta or similar
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_checkmark.svg"
                    className="h-[9px] ml-[201px] mt-[-NaNpx] w-auto z-[1]"
                    alt="checkmark"
                  />
                  <div className="h-[170px] md:h-[NaNpx] mb-4 ml-auto mr-3.5 mt-[-NaNpx] w-[73%] sm:w-full z-[1]">
                    <div className="absolute bottom-[0] md:h-[138px] h-[153px] left-[0] w-[89%] sm:w-full">
                      <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[51%]">
                        <div className="flex flex-col gap-[21px] justify-start w-full">
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[9px] md:ml-[0] ml-[210px] w-auto"
                            alt="checkmark_One"
                          />
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Img
                                src="images/img_checkmark.svg"
                                className="h-[9px] w-auto"
                                alt="checkmark_Two"
                              />
                              <Img
                                src="images/img_checkmark.svg"
                                className="h-[9px] w-auto"
                                alt="checkmark_Three"
                              />
                            </div>
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-5 w-auto"
                              alt="checkmark_Four"
                            />
                            <div className="bg-blue_800 flex flex-col items-center justify-start md:ml-[0] ml-[3px] mt-6 p-[15px] rounded-[5px] w-auto md:w-full">
                              <Text
                                className="font-medium text-left text-white_A700 w-auto"
                                variant="body3"
                              >
                                Book This Ride
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute font-normal leading-[30.00px] not-italic right-[0] text-black_900 text-left top-[0]"
                        variant="body3"
                      >
                        <>
                          Confirmation is immediate. Fixed price - Billingual
                          Driver.
                          <br />
                          Flight monitoring. Meet & Greet. Price per vehicle. Up
                          to 3 passengers.
                          <br />1 S Bags & 2 L Bags
                        </>
                      </Text>
                    </div>
                    <CheckBox
                      className="capitalize font-medium text-[13px] text-blue_gray_400 text-left tracking-[-0.33px]"
                      inputClassName="absolute mr-[5px]"
                      name="hohiddencost"
                      id="hohiddencost"
                      label="Ho Hidden Cost"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row items-end justify-center ml-auto mr-[15px] mt-[-NaNpx] w-1/5 z-[1]">
                    <Text
                      className="font-montserrat text-blue_800 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Price:$ 103
                    </Text>
                    <Text
                      className="font-lato line-through mb-1 ml-[3px] mt-[7px] text-left text-red_400 w-auto"
                      variant="body4"
                    >
                      $129
                    </Text>
                  </div>
                  <Img
                    src="images/img_sedanpngclipart_118x178.png"
                    className="h-[118px] mb-auto mt-[-8.17px] object-cover w-[23%] z-[1]"
                    alt="sedanpngclipart"
                  />
                </div>
                <div className="bg-white_A700 border border-blue_gray_100_01 border-solid md:h-[138px] h-[278px] pb-[19px] relative rounded-[5px] w-full">
                  <div className="absolute bg-blue_800 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[9px] rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] top-[0] w-full">
                    <Text
                      className="font-semibold ml-1 md:ml-[0] text-left text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Private Minivan
                    </Text>
                  </div>
                  <Img
                    src="images/img_image1.png"
                    className="absolute h-[113px] left-[1%] object-cover top-[26%] w-[23%]"
                    alt="imageThree"
                  />
                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 items-start justify-start right-[2%] top-[21%] w-[73%]">
                    <Text
                      className="font-bold font-montserrat sm:mt-0 mt-0.5 text-black_900 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      VW or similar
                    </Text>
                    <Text
                      className="font-montserrat sm:ml-[0] ml-[268px] text-blue_800 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Price:$ 108
                    </Text>
                    <Text
                      className="font-lato line-through sm:mt-0 mt-[7px] text-left text-red_400 w-auto"
                      variant="body4"
                    >
                      $135
                    </Text>
                  </div>
                  <div className="absolute bottom-[7%] md:h-[138px] h-[170px] right-[2%] w-[73%] sm:w-full">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[9px] ml-[3px] mt-7 w-auto"
                      alt="checkmark"
                    />
                    <div className="absolute md:h-[138px] h-[170px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute bottom-[0] md:h-[138px] h-[153px] left-[0] w-[89%] sm:w-full">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[51%]">
                          <div className="flex flex-col gap-[21px] justify-start w-full">
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] md:ml-[0] ml-[210px] w-auto"
                              alt="checkmark_One"
                            />
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="h-[9px] w-auto"
                                  alt="checkmark_Two"
                                />
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="h-[9px] w-auto"
                                  alt="checkmark_Three"
                                />
                              </div>
                              <Img
                                src="images/img_checkmark.svg"
                                className="h-[9px] mt-5 w-auto"
                                alt="checkmark_Four"
                              />
                              <div className="bg-blue_800 flex flex-col items-center justify-start md:ml-[0] ml-[3px] mt-6 p-[15px] rounded-[5px] w-auto md:w-full">
                                <Text
                                  className="font-medium text-left text-white_A700 w-auto"
                                  variant="body3"
                                >
                                  Book This Ride
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="absolute font-normal leading-[30.00px] not-italic right-[0] text-black_900 text-left top-[0]"
                          variant="body3"
                        >
                          <>
                            Confirmation is immediate. Fixed price - Billingual
                            Driver.
                            <br />
                            Flight monitoring. Meet & Greet. Price per vehicle.
                            Up to 8 passengers
                            <br />2 S Bags & 8 L Bags
                          </>
                        </Text>
                      </div>
                      <CheckBox
                        className="capitalize font-medium text-[13px] text-blue_gray_400 text-left tracking-[-0.33px]"
                        inputClassName="absolute mr-[5px]"
                        name="hohiddencost"
                        id="hohiddencost2"
                        label="Ho Hidden Cost"
                        size="sm"
                      ></CheckBox>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border border-blue_gray_100_01 border-solid md:h-[184px] h-[278px] pb-[19px] relative rounded-[5px] w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                    <div className="flex flex-col gap-[23px] justify-start w-full">
                      <div className="bg-blue_800 flex flex-col items-start justify-start p-[9px] rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] w-full">
                        <Text
                          className="font-semibold ml-1 md:ml-[0] text-left text-white_A700 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Private Van
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[7px] w-[48%] md:w-full">
                        <Img
                          src="images/img_image4.png"
                          className="h-[113px] md:h-auto mt-2 object-cover w-[49%]"
                          alt="imageFour"
                        />
                        <Text
                          className="font-bold text-black_900 text-left w-auto"
                          as="h4"
                          variant="h4"
                        >
                          Toyota or similar
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_checkmark.svg"
                    className="absolute h-[9px] left-[26%] top-[42%] w-auto"
                    alt="checkmark"
                  />
                  <div className="absolute bottom-[7%] md:h-[138px] h-[170px] right-[2%] w-[73%] sm:w-full">
                    <div className="absolute bottom-[0] md:h-[138px] h-[153px] left-[0] w-[93%] sm:w-full">
                      <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[49%]">
                        <div className="flex flex-col gap-[21px] justify-start w-full">
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[9px] md:ml-[0] ml-[210px] w-auto"
                            alt="checkmark_One"
                          />
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Img
                                src="images/img_checkmark.svg"
                                className="h-[9px] w-auto"
                                alt="checkmark_Two"
                              />
                              <Img
                                src="images/img_checkmark.svg"
                                className="h-[9px] w-auto"
                                alt="checkmark_Three"
                              />
                            </div>
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-5 w-auto"
                              alt="checkmark_Four"
                            />
                            <div className="bg-blue_800 flex flex-col items-center justify-start md:ml-[0] ml-[3px] mt-6 p-[15px] rounded-[5px] w-auto md:w-full">
                              <Text
                                className="font-medium text-left text-white_A700 w-auto"
                                variant="body3"
                              >
                                Book This Ride
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute font-normal inset-x-[0] leading-[30.00px] mx-auto not-italic text-black_900 text-left top-[0]"
                        variant="body3"
                      >
                        <>
                          Confirmation is immediate. Fixed price - Billingual
                          Driver.
                          <br />
                          Flight monitoring. Meet & Greet. Price per vehicle. Up
                          to 10 passengers.
                          <br />
                          10 S Bags & 10 L Bags
                        </>
                      </Text>
                    </div>
                    <CheckBox
                      className="capitalize font-medium text-[13px] text-blue_gray_400 text-left tracking-[-0.33px]"
                      inputClassName="absolute mr-[5px]"
                      name="hohiddencost"
                      id="hohiddencost3"
                      label="Ho Hidden Cost"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="absolute flex flex-row gap-[15px] items-end justify-center right-[2%] top-[21%] w-1/5">
                    <Text
                      className="font-montserrat text-blue_800 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Price:$ 111
                    </Text>
                    <Text
                      className="font-lato line-through mb-1 mt-[7px] text-left text-red_400 w-auto"
                      variant="body4"
                    >
                      $139
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 border border-blue_gray_100_01 border-solid md:h-[184px] sm:h-[216px] h-[278px] pb-[19px] relative rounded-[5px] w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                    <div className="flex flex-col gap-[22px] justify-start w-full">
                      <div className="bg-blue_800 flex flex-col items-start justify-start p-[9px] rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] w-full">
                        <Text
                          className="font-semibold ml-1 md:ml-[0] text-left text-white_A700 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Private Minibus
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start md:ml-[0] ml-[7px] w-[71%] md:w-full">
                        <Img
                          src="images/img_image5.png"
                          className="h-[113px] md:h-auto sm:mt-0 mt-[9px] object-cover w-[33%] sm:w-full"
                          alt="imageFive"
                        />
                        <Text
                          className="font-bold text-black_900 text-left w-auto"
                          as="h4"
                          variant="h4"
                        >
                          Mercedes-Benz Sprinter or similar
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_checkmark.svg"
                    className="absolute h-[9px] left-[26%] top-[42%] w-auto"
                    alt="checkmark"
                  />
                  <div className="absolute bottom-[7%] md:h-[138px] h-[170px] right-[2%] w-[73%] sm:w-full">
                    <div className="absolute bottom-[0] md:h-[138px] h-[153px] left-[0] w-[93%] sm:w-full">
                      <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[49%]">
                        <div className="flex flex-col gap-[21px] justify-start w-full">
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[9px] md:ml-[0] ml-[210px] w-auto"
                            alt="checkmark_One"
                          />
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Img
                                src="images/img_checkmark.svg"
                                className="h-[9px] w-auto"
                                alt="checkmark_Two"
                              />
                              <Img
                                src="images/img_checkmark.svg"
                                className="h-[9px] w-auto"
                                alt="checkmark_Three"
                              />
                            </div>
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-5 w-auto"
                              alt="checkmark_Four"
                            />
                            <div className="bg-blue_800 flex flex-col items-center justify-start md:ml-[0] ml-[3px] mt-6 p-[15px] rounded-[5px] w-auto md:w-full">
                              <Text
                                className="font-medium text-left text-white_A700 w-auto"
                                variant="body3"
                              >
                                Book This Ride
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute font-normal inset-x-[0] leading-[30.00px] mx-auto not-italic text-black_900 text-left top-[0]"
                        variant="body3"
                      >
                        <>
                          Confirmation is immediate. Fixed price - Billingual
                          Driver.
                          <br />
                          Flight monitoring. Meet & Greet. Price per vehicle. Up
                          to 17 passengers.
                          <br />
                          19 S Bags
                        </>
                      </Text>
                    </div>
                    <CheckBox
                      className="capitalize font-medium text-[13px] text-blue_gray_400 text-left tracking-[-0.33px]"
                      inputClassName="absolute mr-[5px]"
                      name="hohiddencost"
                      id="hohiddencost4"
                      label="Ho Hidden Cost"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="absolute flex flex-row items-end justify-center right-[2%] top-[21%] w-1/5">
                    <Text
                      className="font-montserrat text-blue_800 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Price:$ 172
                    </Text>
                    <Text
                      className="font-lato line-through mb-1 ml-1 mt-[7px] text-left text-red_400 w-auto"
                      variant="body4"
                    >
                      $216
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 border border-blue_gray_100_01 border-solid md:h-[138px] h-[278px] pb-[19px] relative rounded-[5px] w-full">
                  <div className="absolute bg-blue_800 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[9px] rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] top-[0] w-full">
                    <Text
                      className="font-semibold ml-1 md:ml-[0] text-left text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Premium
                    </Text>
                  </div>
                  <Img
                    src="images/img_image6.png"
                    className="absolute h-[113px] left-[1%] object-cover top-[26%] w-[23%]"
                    alt="imageSix"
                  />
                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 items-start justify-start right-[2%] top-[21%] w-[73%]">
                    <Text
                      className="font-bold font-montserrat sm:mt-0 mt-0.5 text-black_900 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Suburban or similar
                    </Text>
                    <Text
                      className="font-montserrat sm:ml-[0] ml-[204px] text-blue_800 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Price:$ 231
                    </Text>
                    <Text
                      className="font-lato line-through ml-1.5 sm:ml-[0] sm:mt-0 mt-[7px] text-left text-red_400 w-auto"
                      variant="body4"
                    >
                      $288
                    </Text>
                  </div>
                  <div className="absolute bottom-[7%] md:h-[138px] h-[170px] right-[2%] w-[73%] sm:w-full">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[9px] ml-[3px] mt-7 w-auto"
                      alt="checkmark"
                    />
                    <div className="absolute md:h-[138px] h-[170px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute bottom-[0] md:h-[138px] h-[153px] left-[0] w-[93%] sm:w-full">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[49%]">
                          <div className="flex flex-col gap-[21px] justify-start w-full">
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] md:ml-[0] ml-[210px] w-auto"
                              alt="checkmark_One"
                            />
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="h-[9px] w-auto"
                                  alt="checkmark_Two"
                                />
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="h-[9px] w-auto"
                                  alt="checkmark_Three"
                                />
                              </div>
                              <Img
                                src="images/img_checkmark.svg"
                                className="h-[9px] mt-5 w-auto"
                                alt="checkmark_Four"
                              />
                              <div className="bg-blue_800 flex flex-col items-center justify-start md:ml-[0] ml-[3px] mt-6 p-[15px] rounded-[5px] w-auto md:w-full">
                                <Text
                                  className="font-medium text-left text-white_A700 w-auto"
                                  variant="body3"
                                >
                                  Book This Ride
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="absolute font-normal inset-x-[0] leading-[30.00px] mx-auto not-italic text-black_900 text-left top-[0]"
                          variant="body3"
                        >
                          <>
                            Confirmation is immediate. Fixed price - Billingual
                            Driver.
                            <br />
                            Flight monitoring. Meet & Greet. Price per vehicle.
                            Up to 6 passengers
                            <br />2 S Bags & 5 L Bags
                          </>
                        </Text>
                      </div>
                      <CheckBox
                        className="capitalize font-medium text-[13px] text-blue_gray_400 text-left tracking-[-0.33px]"
                        inputClassName="absolute mr-[5px]"
                        name="hohiddencost"
                        id="hohiddencost5"
                        label="Ho Hidden Cost"
                        size="sm"
                      ></CheckBox>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-1 w-[28%] md:w-full">
              <div className="bg-blue_800 flex flex-col items-start justify-center p-[13px] rounded-[5px] w-[99%] md:w-full">
                <Text
                  className="font-bold mt-1 text-left text-white_A700 w-auto"
                  as="h4"
                  variant="h4"
                >
                  Organize your transfer!
                </Text>
                <Text
                  className="font-medium ml-0.5 md:ml-[0] mt-[15px] text-left text-white_A700 w-auto"
                  variant="body3"
                >
                  Transfer Type
                </Text>
                <SelectBox
                  className="font-medium mt-[9px] text-[13px] text-gray_500_01 text-left w-[98%] sm:w-full"
                  placeholderClassName="text-gray_500_01"
                  name="groupThirtyFour"
                  placeholder="Round Trip"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[25px] mr-[0] w-[25px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillWhiteA700"
                ></SelectBox>
                <Text
                  className="font-medium mt-[11px] text-left text-white_A700 w-auto"
                  variant="body3"
                >
                  Airport
                </Text>
                <Input
                  wrapClassName="mt-[9px] w-[98%]"
                  className="font-medium p-0 placeholder:text-gray_500_01 text-[13px] text-gray_500_01 text-left w-full"
                  name="language_One"
                  placeholder="Cancun, Quintana Roo (CUN - Cancun "
                  shape="RoundedBorder5"
                  size="md"
                  variant="FillWhiteA700"
                ></Input>
                <Text
                  className="font-medium ml-0.5 md:ml-[0] mt-3.5 text-left text-white_A700 w-auto"
                  variant="body3"
                ></Text>
                <Button
                  className="cursor-pointer font-medium min-w-[291px] mt-[9px] text-[13px] text-center text-gray_500_01 w-auto"
                  shape="RoundedBorder5"
                  size="lg"
                  variant="FillWhiteA700"
                >
                  Paradisus Cancun Resort & Spa, Cancun,
                </Button>
                <Text
                  className="font-medium ml-0.5 md:ml-[0] mt-3.5 text-left text-white_A700"
                  variant="body3"
                ></Text>
                <Text
                  className="font-medium ml-0.5 md:ml-[0] mt-[21px] text-left text-white_A700 w-auto"
                  variant="body3"
                ></Text>
                <SelectBox
                  className="font-medium mt-[9px] text-[15px] text-gray_500_01 text-left w-[98%] sm:w-full"
                  placeholderClassName="text-gray_500_01"
                  name="groupThirtyOne"
                  placeholder="2"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[25px] mr-[0] w-6"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillWhiteA700"
                ></SelectBox>
                <Text
                  className="ml-1.5 md:ml-[0] mt-4 text-black_900 text-left"
                  variant="body5"
                ></Text>
                <Text
                  className="font-medium ml-0.5 md:ml-[0] mt-[13px] text-left text-white_A700 w-auto"
                  variant="body3"
                ></Text>
                <SelectBox
                  className="font-medium mt-[9px] text-[15px] text-gray_500_01 text-left w-[98%] sm:w-full"
                  placeholderClassName="text-gray_500_01"
                  name="groupThirty"
                  placeholder="3"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[25px] mr-[0] w-6"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillWhiteA700"
                ></SelectBox>
                <Text
                  className="bg-yellow_800 border-2 border-blue_800 border-solid font-normal h-[45px] justify-center mb-7 md:ml-[0] ml-[5px] mt-[18px] not-italic sm:px-5 px-[35px] py-3 rounded-[5px] text-left text-white_A700 w-[284px]"
                  as="h6"
                  variant="h6"
                >
                  Update
                </Text>
              </div>
              <div className="h-[266px] md:h-[297px] mt-[31px] relative w-full">
                <div className="absolute bg-white_A700 border border-gray_400 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] rounded-[5px] w-[99%]">
                  <div className="flex flex-col gap-5 items-center justify-start mb-6 mt-[106px] w-[99%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[133px] w-auto"
                        leftIcon={
                          <Img
                            src="images/img_messagesvgrepocom_1.svg"
                            className="mr-[15px]"
                            alt="message-svgrepo-com 1"
                          />
                        }
                        shape="CircleBorder20"
                        size="md"
                        variant="FillRed40001"
                      >
                        <div className="font-medium text-[15px] text-center text-white_A700">
                          Mail
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[140px] w-auto"
                        leftIcon={
                          <Img
                            src="images/img_facebooksvgrepocom_2.svg"
                            className="mr-[3px]"
                            alt="facebook-svgrepo-com 2"
                          />
                        }
                        shape="CircleBorder20"
                        size="sm"
                        variant="FillIndigo500"
                      >
                        <div className="font-medium text-[15px] text-center text-white_A700">
                          Facebook
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                      <div className="bg-light_blue_500 flex flex-row gap-2.5 items-center justify-start p-2.5 rounded-[20px] w-auto">
                        <Img
                          src="images/img_twitterboxedsvgrepocom.svg"
                          className="h-5 ml-[9px] w-5"
                          alt="twitterboxedsvg"
                        />
                        <Text
                          className="font-medium text-center text-white_A700 w-auto"
                          variant="body1"
                        >
                          Twitter
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[140px] w-auto"
                        leftIcon={
                          <Img
                            src="images/img_whatsappsvgrepocom_1.svg"
                            className="mr-[5px]"
                            alt="whatsapp-svgrepo-com 1"
                          />
                        }
                        shape="CircleBorder20"
                        size="md"
                        variant="FillGreen500"
                      >
                        <div className="font-medium text-[15px] text-center text-white_A700">
                          WhatsApp
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute font-semibold leading-[30.00px] right-[0] text-black_900 text-left top-[6%] w-[95%] sm:w-full"
                  variant="body1"
                >
                  Share this Airport Transportation to Paradisus Cancun Resort &
                  Spa with your friends!
                </Text>
              </div>
              <div className="bg-white_A700 border border-gray_400 border-solid flex flex-col gap-[22px] items-start justify-end mt-[34px] p-2 rounded-[5px] w-auto md:w-full">
                <Text
                  className="font-semibold leading-[30.00px] md:ml-[0] ml-[9px] mt-[7px] text-black_900 text-left w-[90%] sm:w-full"
                  variant="body1"
                >
                  Discoverymundo makes it really simple to transport travelers
                  arriving or departing from Cancun International Airport to
                  Paradisus Cancun Resort & Spa or any other specific place in
                  the Cancun area.
                </Text>
                <Text
                  className="font-semibold leading-[30.00px] md:ml-[0] ml-[11px] text-black_900 text-left"
                  variant="body3"
                ></Text>
              </div>
              <div className="bg-white_A700 border border-gray_400 border-solid md:h-[114px] h-[145px] mt-[30px] p-[15px] relative rounded-[5px] w-[99%]">
                <div className="md:h-[84px] h-[90px] mx-auto w-[91%]">
                  <Text
                    className="absolute font-semibold inset-x-[0] leading-[25.00px] mx-auto text-black_900 text-left top-[0] w-[99%] sm:w-full"
                    variant="body1"
                  >
                    We Accept All Major Credit & Debit Cards.
                  </Text>
                  <Img
                    src="images/img_paymentpaypal1.png"
                    className="absolute bottom-[0] h-[27px] left-[0] object-cover w-[18%]"
                    alt="paymentpaypalOne"
                  />
                  <Img
                    src="images/img_paymentvisa1.png"
                    className="absolute bottom-[0] h-[27px] left-[17%] object-cover w-[18%]"
                    alt="paymentvisaOne"
                  />
                  <Img
                    src="images/img_paymentmastercard.png"
                    className="absolute bottom-[0] h-[27px] left-[34%] object-cover w-[18%]"
                    alt="paymentmasterca"
                  />
                  <Img
                    src="images/img_paymentdiscover.png"
                    className="absolute bottom-[0] h-[27px] object-cover right-[31%] w-[18%]"
                    alt="paymentdiscover"
                  />
                </div>
                <Img
                  src="images/img_amex1.png"
                  className="absolute bottom-[27%] h-[27px] object-cover right-[19%] w-[16%]"
                  alt="amexOne"
                />
              </div>
              <div className="bg-white_A700 border border-gray_400 border-solid flex flex-col items-start justify-start mt-[63px] p-[18px] rounded-[5px] w-[99%] md:w-full">
                <div className="flex flex-col gap-3 items-start justify-start mb-[7px] w-[35%] md:w-full">
                  <Text
                    className="font-semibold text-black_900 text-left w-auto"
                    variant="body1"
                  >
                    Follow us
                  </Text>
                  <div className="flex flex-row items-center justify-evenly w-full">
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
                      className="h-8 w-8"
                      alt="instagramsvgrep"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[86px] text-black_900 text-left w-auto"
            as="h1"
            variant="h1"
          >
            Why book a transfer?
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1183px] mt-[33px] mx-auto md:px-5 w-full">
            <div className="bg-white_A700 border border-gray_400_01 border-solid flex md:flex-1 flex-col items-center justify-center p-3 rounded-[5px] shadow-bs2 w-[19%] md:w-full">
              <Img
                src="images/img_ticket.svg"
                className="h-[55px] mt-[17px] w-[55px]"
                alt="ticket"
              />
              <Text
                className="font-bold mt-4 text-black_900 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Meet & greet
              </Text>
              <Text
                className="font-normal leading-[25.00px] mb-[43px] mt-[7px] not-italic text-black_900 text-center w-[97%] sm:w-full"
                variant="body2"
              >
                Your representative will be waiting to meet you no matter what
                happens.
              </Text>
            </div>
            <div className="bg-white_A700 border border-gray_400_01 border-solid flex md:flex-1 flex-col gap-2.5 items-center justify-center md:ml-[0] ml-[25px] p-3 rounded-[5px] shadow-bs2 w-[19%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start mt-[7px] w-[33%] md:w-full">
                <Img
                  src="images/img_emailmessagesvgrepocom.svg"
                  className="h-[63px] w-[63px]"
                  alt="valueOne"
                />
                <Text
                  className="font-bold text-black_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Value
                </Text>
              </div>
              <Text
                className="font-normal leading-[25.00px] mb-[43px] not-italic text-black_900 text-center w-[97%] sm:w-full"
                variant="body2"
              >
                The best value for your money. Pay the right price for vehicle
                of your choice.
              </Text>
            </div>
            <div className="bg-white_A700 border border-gray_400_01 border-solid flex md:flex-1 flex-col gap-2 items-center justify-center ml-7 md:ml-[0] p-3 rounded-[5px] shadow-bs2 w-[19%] md:w-full">
              <div className="flex flex-col gap-[21px] items-start justify-start mt-[15px] w-[32%] md:w-full">
                <Img
                  src="images/img_thumbsup.svg"
                  className="h-[52px] ml-0.5 md:ml-[0] w-[52px]"
                  alt="thumbsup"
                />
                <Text
                  className="font-bold text-black_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Safety
                </Text>
              </div>
              <Text
                className="font-normal leading-[25.00px] mb-[43px] not-italic text-black_900 text-center w-[97%] sm:w-full"
                variant="body2"
              >
                Transportation operators are local experts and have the right
                certifications.
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[25px] w-[39%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white_A700 border border-gray_400_01 border-solid flex flex-col justify-center p-[11px] rounded-[5px] shadow-bs2 w-full">
                <Img
                  src="images/img_file.svg"
                  className="h-[60px] md:ml-[0] ml-[61px] mr-[72px] mt-3.5 w-[60px]"
                  alt="file"
                />
                <Text
                  className="font-bold md:ml-[0] ml-[74px] mr-[78px] mt-[13px] text-black_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Fast
                </Text>
                <Text
                  className="font-normal leading-[25.00px] mb-11 mt-[9px] not-italic text-black_900 text-center w-full"
                  variant="body2"
                >
                  No waiting times, no delays - get you to your destination as
                  soon as you want.
                </Text>
              </div>
              <div className="bg-white_A700 border border-gray_400_01 border-solid flex flex-col items-center justify-center p-3 rounded-[5px] shadow-bs2 w-full">
                <Img
                  src="images/img_doortodoor1.svg"
                  className="h-[61px] mt-2.5 w-[61px]"
                  alt="doortodoorOne"
                />
                <Text
                  className="font-bold mt-[15px] text-black_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Door-to-Door
                </Text>
                <Text
                  className="font-normal leading-[25.00px] mb-[43px] mt-[9px] not-italic text-black_900 text-center w-[97%] sm:w-full"
                  variant="body2"
                >
                  Reach your destination promptly: You won’t need any additional
                  taxi or bus.
                </Text>
              </div>
            </List>
          </div>
          <Text
            className="mt-[72px] text-black_900 text-left w-auto"
            as="h1"
            variant="h1"
          >
            Our Testimonial
          </Text>
          <div className="font-manrope sm:h-[634px] h-[876px] md:h-[984px] mt-[34px] md:px-5 relative w-full">
            <div className="absolute bg-white_A700 flex sm:h-[600px] h-[720px] md:h-[950px] justify-end left-[3%] md:pl-10 sm:pl-5 pl-[60px] py-[60px] top-[0] w-[89%] md:w-full">
              <div className="flex flex-row gap-5 h-full items-center justify-center mb-[174px] ml-[60px] mt-auto self-stretch w-auto">
                <Img
                  src="images/img_arrowup.svg"
                  className="h-6 w-6"
                  alt="arrowup"
                />
                <Img
                  src="images/img_arrowdown_indigo_a400.svg"
                  className="h-6 w-6"
                  alt="arrowdown"
                />
              </div>
              <div className="absolute h-[600px] md:h-[950px] inset-y-[0] my-auto right-[0] w-[91%] md:w-full">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[91%]">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      src="images/img_qotes.svg"
                      className="h-[230px] w-[230px]"
                      alt="qotes"
                    />
                    <div className="bg-blue_800 flex md:flex-1 flex-col items-end justify-end md:pl-10 sm:pl-5 pl-[138px] py-[138px] w-auto md:w-full">
                      <div className="flex flex-col items-start justify-start mt-9 p-10 sm:px-5 w-[254px]">
                        <div className="bg-white_A700 h-72 p-10 sm:px-5 rounded-[10px] shadow-bs3 w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white_A700 bottom-[23%] flex flex-col inset-x-[0] items-end justify-start mx-auto overflow-auto p-10 sm:px-5 rounded-[10px] shadow-bs3 w-[600px] md:w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[120px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                      orientation="horizontal"
                    >
                      <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-start sm:ml-[0] w-[520px] sm:w-full">
                        <Img
                          src="images/img_image.png"
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          alt="image"
                        />
                        <div className="flex flex-col gap-1 items-start justify-center self-stretch w-auto">
                          <Text
                            className="font-extrabold text-indigo_A400 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Esther Hills
                          </Text>
                          <Text
                            className="font-medium text-gray_600_01 text-left w-auto"
                            as="h6"
                            variant="h6"
                          >
                            Lead Intranet Technician
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-start sm:ml-[0] w-[520px] sm:w-full">
                        <Img
                          src="images/img_image_80x80.png"
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          alt="image"
                        />
                        <div className="flex flex-col gap-1 items-start justify-center self-stretch w-auto">
                          <Text
                            className="font-extrabold text-indigo_A400 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Ethel Johnston
                          </Text>
                          <Text
                            className="font-medium text-gray_600_01 text-left w-auto"
                            as="h6"
                            variant="h6"
                          >
                            Human Directives Director
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="font-normal leading-[26.00px] not-italic text-gray_900_01 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Omnis totam molestiae delectus nemo alias nesciunt harum
                        et. Nobis dolorum excepturi quod vel. Sunt est qui ab
                        non dolores repellat rem impedit dolores. Ut ea rerum
                        cum eum. Alias dolores tempore illo accusantium est et
                        voluptatem voluptas.
                      </Text>
                      <Text
                        className="font-normal leading-[26.00px] not-italic text-gray_900_01 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Fuga et debitis numquam omnis sed explicabo rem.
                        Temporibus aut earum harum sint enim quia sit. Odit
                        blanditiis illum amet doloribus adipisci corrupti
                        explicabo. Qui non omnis eum consequatur voluptas aut ut
                        dolor aut.
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[38%] leading-[34.00px] left-[0] text-gray_900_01 text-left w-[13%] sm:w-full"
                  as="h3"
                  variant="h3"
                >
                  Clients Testimonials
                </Text>
              </div>
            </div>
            <div className="absolute bg-blue_800 bottom-[0] flex flex-col font-montserrat inset-x-[0] items-center justify-end mx-auto py-[38px] w-full">
              <Text
                className="capitalize font-normal leading-[241.50%] mt-1 not-italic text-center text-white_A700"
                variant="body2"
              >
                <>
                  Isla Mujeres | Cancun | Playa del Carmen | Tulum Hotel Zone |
                  Bavaro | Puerto Morelos | Paris | Playa Paraiso | Playa
                  Mujeres | Nuevo Vallarta | Uvero Alto
                  <br />
                  Terms | Privacy | Sitemap | Affiliate Program | Help | Blog |
                  API{" "}
                </>
              </Text>
              <Line className="bg-blue_700 h-px mt-2.5 w-full" />
              <Text
                className="capitalize font-normal mt-6 not-italic text-center text-white_A700 w-auto"
                variant="body2"
              >
                © 2023 Pickrides - All right reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RidesviewPage;
