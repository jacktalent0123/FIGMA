import React from "react";

import Header from "components/Header";
import { Img, Text, Button, SelectBox, List, Line } from "components";

const RidesviewOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
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
          <div className="flex flex-col mt-3.5 md:px-5 relative w-full">
            <div className="bg-blue_50_02 flex flex-col items-center justify-end mx-auto p-[11px] w-full">
              <div className="flex flex-col gap-2 items-center justify-start mt-1 w-1/2 md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-[99%] md:w-full">
                  <Button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    size="mdIcn"
                    variant="icbFillBlue800"
                  >
                    <Img
                      src="images/img_vehiclecabsvgrepocom.svg"
                      className="h-[22px]"
                      alt="vehiclecabsvgre"
                    />
                  </Button>
                  <Text
                    className="md:mt-0 mt-2 not-italic text-blue_gray_400_01 text-left w-auto"
                    as="h2"
                    variant="h2"
                  >
                    ..................................
                  </Text>
                  <Button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    size="mdIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_basicflightou.svg"
                      className="h-[22px]"
                      alt="basicflightou"
                    />
                  </Button>
                  <Text
                    className="md:mt-0 mt-2 not-italic text-blue_gray_400_01 text-left w-auto"
                    as="h2"
                    variant="h2"
                  >
                    ..................................
                  </Text>
                  <Button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    size="mdIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_ticket4svgrepocom.svg"
                      className="h-[22px]"
                      alt="ticket4svgrepoc"
                    />
                  </Button>
                  <Text
                    className="md:mt-0 mt-2 not-italic text-blue_gray_400_01 text-left w-auto"
                    as="h2"
                    variant="h2"
                  >
                    ..................................
                  </Text>
                  <Button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    size="mdIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_paymentmethod.svg"
                      className="h-[22px]"
                      alt="paymentmethod"
                    />
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-auto"
                    variant="body2"
                  >
                    Vehicle
                  </Text>
                  <Text
                    className="font-normal sm:ml-[0] ml-[118px] not-italic text-black_900 text-left w-auto"
                    variant="body2"
                  >
                    Flight Details & Extras
                  </Text>
                  <Text
                    className="font-normal sm:ml-[0] ml-[86px] not-italic text-black_900 text-left w-auto"
                    variant="body2"
                  >
                    Confirmation
                  </Text>
                  <Text
                    className="font-normal sm:ml-[0] ml-[142px] not-italic text-black_900 text-left w-auto"
                    variant="body2"
                  >
                    Payment
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-orange_300 flex flex-col items-center justify-start mt-[-1px] mx-auto p-[19px] w-full z-[1]">
              <div className="flex flex-col gap-2 items-start justify-start w-[85%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] w-[84%] md:w-full">
                  <Text
                    className="font-medium text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    Transfer Type
                  </Text>
                  <Text
                    className="font-medium ml-36 md:ml-[0] text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    Air Port
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[182px] text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    Hotel Name
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[153px] text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    Passengers
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[156px] text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    Children
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <SelectBox
                    className="md:flex-1 font-medium text-[13px] text-black_900 text-left w-1/5 md:w-full"
                    placeholderClassName="text-black_900"
                    name="groupFiftyFour"
                    placeholder="Round Trip"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        className="h-[25px] mr-[0] w-[25px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillWhiteA700"
                  ></SelectBox>
                  <Text
                    className="bg-white_A700 font-medium h-[43px] pl-3.5 sm:pr-5 pr-[35px] py-[13px] rounded-[5px] text-gray_500_01 text-left w-[225px]"
                    variant="body3"
                  >
                    Type Airport Name
                  </Text>
                  <Text
                    className="bg-white_A700 font-medium h-[43px] pl-3.5 sm:pr-5 pr-[35px] py-[13px] rounded-[5px] text-gray_500_01 text-left w-[225px]"
                    variant="body3"
                  >
                    Type Hotel Name
                  </Text>
                  <SelectBox
                    className="md:flex-1 font-medium text-[13px] text-black_900 text-left w-1/5 md:w-full"
                    placeholderClassName="text-black_900"
                    name="groupFiftyOne"
                    placeholder="2"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        className="h-[25px] mr-[0] w-[25px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillWhiteA700"
                  ></SelectBox>
                  <SelectBox
                    className="md:flex-1 font-medium text-[13px] text-black_900 text-left w-[16%] md:w-full"
                    placeholderClassName="text-black_900"
                    name="groupFifty"
                    placeholder="3"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_black_900.svg"
                        className="h-[25px] mr-[0] w-[25px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder5"
                    size="sm"
                    variant="FillWhiteA700"
                  ></SelectBox>
                  <div className="bg-blue_800 border-2 border-blue_800 border-solid flex md:flex-1 flex-col items-center justify-start p-2.5 rounded-[5px] w-auto md:w-full">
                    <Img
                      src="images/img_search_white_a700.svg"
                      className="h-[22px] mb-0.5 w-[22px]"
                      alt="search_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_50_7f flex flex-col items-center justify-start p-[23px] sm:px-5 w-full">
            <div className="flex flex-col items-start justify-start max-w-[1178px] mb-[52px] mx-auto md:px-5 w-full">
              <Text
                className="text-black_900 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Airport Transportation to Paradisus Cancun Resort & Spa
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start mt-[11px] w-[13%] md:w-full">
                <Button
                  className="flex h-8 items-center justify-center rounded-[50%] w-8"
                  size="mdIcn"
                  variant="icbFillRed40001"
                >
                  <Img
                    src="images/img_messagesvgrepocom_1.svg"
                    className="h-[15px]"
                    alt="messagesvgrepoc"
                  />
                </Button>
                <Button
                  className="flex h-8 items-center justify-center rounded-[50%] w-8"
                  size="smIcn"
                  variant="icbFillIndigo500"
                >
                  <Img
                    src="images/img_facebooksvgrepocom_2.svg"
                    className="h-[25px]"
                    alt="facebooksvgrepo"
                  />
                </Button>
                <Button
                  className="flex h-8 items-center justify-center rounded-[50%] w-8"
                  size="mdIcn"
                  variant="icbFillLightblue500"
                >
                  <Img
                    src="images/img_twitterboxedsvgrepocom.svg"
                    className="h-[15px]"
                    alt="twitterboxedsvg"
                  />
                </Button>
                <Button
                  className="flex h-8 items-center justify-center rounded-[50%] w-8"
                  size="smIcn"
                  variant="icbFillGreen500"
                >
                  <Img
                    src="images/img_whatsappsvgrepocom_1.svg"
                    className="h-5"
                    alt="whatsappsvgrepo"
                  />
                </Button>
              </div>
              <Text
                className="font-normal leading-[22.00px] mt-[11px] not-italic text-black_900 text-left"
                variant="body2"
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
                className="font-medium ml-0.5 md:ml-[0] mt-2 text-blue_800 text-left text-sm underline w-auto"
              >
                <Text className="">Read More</Text>
              </a>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-[35px] pb-10 w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[61px] grid sm:grid-cols-1 grid-cols-2 w-[38%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-blue_800 hover:border-0 border-2 border-blue_800 border-solid hover:cursor-pointer flex flex-col items-start justify-center sm:ml-[0] hover:mx-0 rounded-[5px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="font-semibold md:ml-[0] ml-[41px] mt-[11px] text-left text-white_A700 w-auto"
                      variant="body1"
                    >
                      Private Sedan
                    </Text>
                    <Img
                      src="images/img_sedanpngclipart.png"
                      className="h-[46px] md:h-auto md:ml-[0] ml-[53px] mt-1.5 object-cover w-[37%] sm:w-full"
                      alt="sedanpngclipart"
                    />
                    <Line className="bg-blue_700_01 h-px mt-[11px] w-[99%]" />
                    <Text
                      className="font-semibold md:ml-[0] ml-[49px] my-2 text-left text-white_A700 w-auto"
                      variant="body3"
                    >
                      From $ 103
                    </Text>
                  </div>
                  <div className="bg-blue_800 hover:border-0 border-2 border-blue_800 border-solid hover:cursor-pointer flex flex-col items-center justify-end sm:ml-[0] hover:mx-0 py-2.5 rounded-[5px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="font-semibold mt-0.5 text-blue_800 text-left w-auto"
                      variant="body1"
                    >
                      Private Minivan
                    </Text>
                    <Img
                      src="images/img_image1.png"
                      className="h-[39px] md:h-auto mt-[9px] object-cover w-[33%] sm:w-full"
                      alt="imageThree"
                    />
                    <Line className="bg-blue_gray_100_7f h-px mt-[15px] w-full" />
                    <Text
                      className="font-semibold mt-[7px] text-black_900 text-left w-auto"
                      variant="body3"
                    >
                      From $ 108
                    </Text>
                  </div>
                </List>
                <div className="bg-white_A700 flex md:flex-1 flex-col justify-end py-2.5 rounded-[5px] shadow-bs4 w-[16%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start md:ml-[0] ml-[46px] mr-[53px] mt-0.5 w-[47%] md:w-full">
                    <Text
                      className="font-semibold text-blue_800 text-left w-auto"
                      variant="body1"
                    >
                      Private Van
                    </Text>
                    <Img
                      src="images/img_sedanpngclipart_46x68.png"
                      className="h-[46px] md:h-auto object-cover w-[79%] sm:w-full"
                      alt="sedanpngclipart"
                    />
                  </div>
                  <Line className="bg-blue_gray_100_7f h-px mt-[11px] w-full" />
                  <Text
                    className="font-semibold md:ml-[0] ml-[50px] mr-[71px] mt-[7px] text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    From $ 111
                  </Text>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-end py-2.5 rounded-[5px] shadow-bs4 w-[16%] md:w-full">
                  <Text
                    className="font-semibold mt-0.5 text-blue_800 text-left w-auto"
                    variant="body1"
                  >
                    Private Minibus
                  </Text>
                  <Img
                    src="images/img_image5.png"
                    className="h-[49px] md:h-auto mt-1.5 object-cover w-[41%] sm:w-full"
                    alt="imageFive"
                  />
                  <Line className="bg-blue_gray_100_7f h-px mt-2 w-full" />
                  <Text
                    className="font-semibold mt-[7px] text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    From $ 172
                  </Text>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-end py-2.5 rounded-[5px] shadow-bs4 w-[16%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start mt-0.5 w-[39%] md:w-full">
                    <Text
                      className="font-semibold text-blue_800 text-left w-auto"
                      variant="body1"
                    >
                      Premium
                    </Text>
                    <Img
                      src="images/img_image6.png"
                      className="h-[39px] md:h-auto object-cover w-[87%] sm:w-full"
                      alt="imageSix"
                    />
                  </div>
                  <Line className="bg-blue_gray_100_7f h-px mt-[15px] w-full" />
                  <Text
                    className="font-semibold mt-[7px] text-black_900 text-left w-auto"
                    variant="body3"
                  >
                    From $ 231
                  </Text>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[3px] text-black_900 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Taxi options for Paradisus Cancun Resort & Spa
              </Text>
              <Text
                className="font-medium ml-0.5 md:ml-[0] mt-[9px] text-black_900 text-left w-auto"
                variant="body1"
              >
                Address: Boulevard Kukulcan Km 16.5 Zona Hotelera, Cancun, 77500
              </Text>
              <List
                className="flex-col gap-[21px] grid items-center mt-[21px] w-full"
                orientation="vertical"
              >
                <div className="bg-white_A700 hover:border-[3px] border-[3px] hover:border-blue_800 border-blue_800 hover:border-solid border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col pb-[7px] hover:relative relative rounded-[5px] hover:shadow-bs5 shadow-bs5 w-full">
                  <div className="bg-light_blue_900_01 h-[41px] mx-auto rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] w-full"></div>
                  <div className="flex flex-col items-center justify-start mb-auto mt-[-33px] mx-auto w-full z-[1]">
                    <div className="flex md:flex-col flex-row md:gap-14 items-start justify-between w-[99%] md:w-full">
                      <div className="flex flex-col gap-[37px] justify-start mb-[26px] w-[26%] md:w-full">
                        <Text
                          className="font-semibold ml-1.5 md:ml-[0] text-left text-white_A700 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Private Sedan
                        </Text>
                        <Img
                          src="images/img_sedanpngclipart_118x178.png"
                          className="h-[155px] sm:h-auto object-cover w-full"
                          alt="sedanpngclipart"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-start md:mt-0 mt-[55px] w-[70%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <Text
                            className="font-bold font-montserrat text-black_900 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Sedan, Jetta or similar
                          </Text>
                          <Text
                            className="font-montserrat md:ml-[0] ml-[458px] text-left text-light_blue_900_01 w-auto"
                            as="h3"
                            variant="h3"
                          >
                            $ 103
                          </Text>
                          <Text
                            className="font-lato line-through ml-1.5 md:ml-[0] md:mt-0 mt-[7px] text-blue_gray_400_02 text-left w-auto"
                            variant="body4"
                          >
                            $129
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start mb-8 md:mt-0 mt-[9px] w-[2%] md:w-full">
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] w-auto"
                              alt="checkmark"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-4 w-auto"
                              alt="checkmark_One"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-[13px] w-auto"
                              alt="checkmark_Two"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-4 w-auto"
                              alt="checkmark_Three"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-[17px] w-auto"
                              alt="checkmark_Four"
                            />
                          </div>
                          <Text
                            className="font-medium leading-[25.00px] md:ml-[0] ml-[9px] text-black_900 text-left"
                            variant="body3"
                          >
                            <>
                              Confirmation is immediate. <br />
                              Fixed price - Billingual Driver.
                              <br />
                              Flight monitoring. Meet & Greet. <br />
                              Price per vehicle. Up to 3 passengers.
                              <br />1 S Bags & 2 L Bags
                            </>
                          </Text>
                          <div className="flex md:flex-1 flex-col justify-start mb-[34px] md:ml-[0] ml-[289px] w-[26%] md:w-full">
                            <Text
                              className="font-bold md:ml-[0] ml-[125px] text-green_800 text-left w-auto"
                              variant="body1"
                            >
                              Save $26
                            </Text>
                            <Text
                              className="leading-[20.00px] mr-[5px] mt-2.5 text-black_900 text-right"
                              variant="body5"
                            >
                              <>
                                Taxes and fees included
                                <br />
                                Roundtrip
                              </>
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[136px] md:ml-[0] ml-[69px] mt-0.5 text-[13px] text-center text-white_A700 w-auto"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlue800"
                            >
                              Book This Ride
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 hover:border-[3px] hover:border-blue_800 hover:border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col pb-[23px] hover:relative relative rounded-[5px] hover:shadow-bs5 shadow-bs5 w-full">
                  <div className="bg-light_blue_900_01 h-[41px] mx-auto rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] w-full"></div>
                  <div className="flex flex-col items-center justify-start mt-[-33px] mx-auto w-full z-[1]">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[98%] md:w-full">
                      <div className="flex flex-col gap-[39px] justify-start mb-[21px] w-[23%] md:w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Private Minivan
                        </Text>
                        <Img
                          src="images/img_image1.png"
                          className="h-[143px] md:h-auto md:ml-[0] ml-[38px] object-cover w-[86%] sm:w-full"
                          alt="imageThree"
                        />
                      </div>
                      <div className="flex flex-col gap-[5px] items-center justify-start md:mt-0 mt-[54px] w-[70%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <Text
                            className="font-bold font-montserrat text-black_900 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            VW or similar
                          </Text>
                          <Text
                            className="font-montserrat md:ml-[0] ml-[549px] text-left text-light_blue_900_01 w-auto"
                            as="h3"
                            variant="h3"
                          >
                            $ 108
                          </Text>
                          <Text
                            className="font-lato line-through md:ml-[0] ml-[5px] md:mt-0 mt-[7px] text-blue_gray_400_02 text-left w-auto"
                            variant="body4"
                          >
                            $135
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start mb-4 md:mt-0 mt-2.5 w-[2%] md:w-full">
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] w-auto"
                              alt="checkmark"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-4 w-auto"
                              alt="checkmark_One"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-[13px] w-auto"
                              alt="checkmark_Two"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-4 w-auto"
                              alt="checkmark_Three"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-[17px] w-auto"
                              alt="checkmark_Four"
                            />
                          </div>
                          <Text
                            className="font-medium leading-[25.00px] md:ml-[0] ml-[9px] text-black_900 text-left"
                            variant="body3"
                          >
                            <>
                              Confirmation is immediate.
                              <br />
                              Fixed price - Billingual Driver.
                              <br />
                              Flight monitoring. Meet & Greet.
                              <br />
                              Price per vehicle. Up to 8 passengers.
                              <br />2 S Bags & 8 L Bags
                            </>
                          </Text>
                          <div className="flex md:flex-1 flex-col justify-start mb-[19px] md:ml-[0] ml-[313px] w-[26%] md:w-full">
                            <Text
                              className="font-bold md:ml-[0] ml-[124px] text-green_800 text-left w-auto"
                              variant="body1"
                            >
                              Save $27
                            </Text>
                            <Text
                              className="leading-[20.00px] mr-[5px] mt-[13px] text-black_900 text-right"
                              variant="body5"
                            >
                              <>
                                Taxes and fees included
                                <br />
                                Roundtrip
                              </>
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[136px] md:ml-[0] ml-[69px] mt-0.5 text-[13px] text-center text-white_A700 w-auto"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlue800"
                            >
                              Book This Ride
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 hover:border-[3px] hover:border-blue_800 hover:border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col pb-[23px] hover:relative relative rounded-[5px] hover:shadow-bs5 shadow-bs5 w-full">
                  <div className="bg-light_blue_900_01 h-[41px] mx-auto rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] w-full"></div>
                  <div className="flex flex-col items-center justify-start mt-[-33px] mx-auto w-full z-[1]">
                    <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mb-[7px] w-[98%] md:w-full">
                      <div className="flex flex-col gap-[35px] justify-start w-[24%] md:w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Private Van
                        </Text>
                        <Img
                          src="images/img_image4.png"
                          className="h-[159px] md:h-auto ml-4 md:ml-[0] object-cover w-[94%] sm:w-full"
                          alt="imageSeven"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:mt-0 mt-14 w-[70%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <Text
                            className="font-bold font-montserrat text-black_900 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Toyota or similar
                          </Text>
                          <Text
                            className="font-montserrat md:ml-[0] ml-[527px] md:mt-0 mt-0.5 text-left text-light_blue_900_01 w-auto"
                            as="h3"
                            variant="h3"
                          >
                            $ 111
                          </Text>
                          <Text
                            className="font-lato line-through ml-2 md:ml-[0] md:mt-0 mt-[9px] text-blue_gray_400_02 text-left w-auto"
                            variant="body4"
                          >
                            $139
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-[3px] w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 my-2 w-[2%] md:w-full">
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] w-auto"
                              alt="checkmark"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-4 w-auto"
                              alt="checkmark_One"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-[13px] w-auto"
                              alt="checkmark_Two"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-4 w-auto"
                              alt="checkmark_Three"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-[17px] w-auto"
                              alt="checkmark_Four"
                            />
                          </div>
                          <Text
                            className="font-medium leading-[25.00px] md:ml-[0] ml-[9px] text-black_900 text-left"
                            variant="body3"
                          >
                            <>
                              Confirmation is immediate.
                              <br />
                              Fixed price - Billingual Driver.
                              <br />
                              Flight monitoring. Meet & Greet.
                              <br />
                              Price per vehicle. Up to 10 passengers.
                              <br />
                              10 S Bags & 10 L Bags
                            </>
                          </Text>
                          <div className="flex md:flex-1 flex-col justify-start mb-2.5 md:ml-[0] ml-[301px] w-[26%] md:w-full">
                            <Text
                              className="font-bold md:ml-[0] ml-[125px] text-green_800 text-left w-auto"
                              variant="body1"
                            >
                              Save $28
                            </Text>
                            <Text
                              className="leading-[20.00px] mr-[5px] mt-2.5 text-black_900 text-right"
                              variant="body5"
                            >
                              <>
                                Taxes and fees included
                                <br />
                                Roundtrip
                              </>
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[136px] md:ml-[0] ml-[69px] mt-0.5 text-[13px] text-center text-white_A700 w-auto"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlue800"
                            >
                              Book This Ride
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 hover:border-[3px] hover:border-blue_800 hover:border-solid hover:cursor-pointer hover:flex flex hover:flex-col flex-col pb-[23px] hover:relative relative rounded-[5px] hover:shadow-bs5 shadow-bs5 w-full">
                  <div className="bg-light_blue_900_01 h-[41px] mx-auto rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] w-full"></div>
                  <div className="flex flex-col items-center justify-start mt-[-33px] mx-auto w-full z-[1]">
                    <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mb-3 w-[98%] md:w-full">
                      <div className="flex flex-col gap-10 justify-start w-[23%] md:w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Private Minibus
                        </Text>
                        <Img
                          src="images/img_image5.png"
                          className="h-[149px] md:h-auto md:ml-[0] ml-[26px] object-cover w-[90%] sm:w-full"
                          alt="imageSeven"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:mt-0 mt-14 w-[70%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <Text
                            className="font-bold font-montserrat text-black_900 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Mercedes-Benz Sprinter or similar
                          </Text>
                          <Text
                            className="font-montserrat md:ml-[0] ml-[335px] text-left text-light_blue_900_01 w-auto"
                            as="h3"
                            variant="h3"
                          >
                            $ 172
                          </Text>
                          <Text
                            className="font-lato line-through md:ml-[0] ml-[7px] md:mt-0 mt-2 text-blue_gray_400_02 text-left w-auto"
                            variant="body4"
                          >
                            $216
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1 w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[9px] w-[2%] md:w-full">
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] w-auto"
                              alt="checkmark"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-4 w-auto"
                              alt="checkmark_One"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-[13px] w-auto"
                              alt="checkmark_Two"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-4 w-auto"
                              alt="checkmark_Three"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-[17px] w-auto"
                              alt="checkmark_Four"
                            />
                          </div>
                          <Text
                            className="font-medium leading-[25.00px] md:ml-[0] ml-[9px] text-black_900 text-left"
                            variant="body3"
                          >
                            <>
                              Confirmation is immediate.
                              <br />
                              Fixed price - Billingual Driver.
                              <br />
                              Flight monitoring. Meet & Greet.
                              <br />
                              Price per vehicle. Up to 17 passengers.
                              <br />
                              19 S Bags
                            </>
                          </Text>
                          <div className="flex md:flex-1 flex-col items-end justify-start md:ml-[0] ml-[366px] md:mt-0 mt-[5px] w-[19%] md:w-full">
                            <Text
                              className="font-bold text-green_800 text-left w-auto"
                              variant="body1"
                            >
                              Save $43
                            </Text>
                            <Text
                              className="leading-[20.00px] mr-[5px] mt-1.5 text-black_900 text-right"
                              variant="body5"
                            >
                              <>
                                Taxes and fees included
                                <br />
                                Roundtrip
                              </>
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[136px] mt-0.5 text-[13px] text-center text-white_A700 w-auto"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlue800"
                            >
                              Book This Ride
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hover:border-[3px] hover:border-blue_800 hover:border-solid hover:cursor-pointer h-[258px] md:h-[787px] hover:relative relative hover:shadow-bs5 w-full">
                  <div className="absolute bg-white_A700 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[217px] rounded-[5px] shadow-bs5 w-full">
                    <div className="bg-light_blue_900_01 h-[41px] rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px] w-full"></div>
                  </div>
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[3%] w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-1.5 w-[98%] md:w-full">
                      <div className="flex flex-col gap-[50px] justify-start mb-4 w-[21%] md:w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Premium
                        </Text>
                        <Img
                          src="images/img_image6.png"
                          className="h-[129px] md:h-auto ml-8 md:ml-[0] object-cover w-[87%] sm:w-full"
                          alt="imageSeven"
                        />
                      </div>
                      <div className="flex flex-col gap-[5px] items-center justify-start md:mt-0 mt-[54px] w-[70%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <Text
                            className="font-bold font-montserrat text-black_900 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            Suburban or similar
                          </Text>
                          <Text
                            className="font-montserrat md:ml-[0] ml-[485px] md:mt-0 mt-0.5 text-left text-light_blue_900_01 w-auto"
                            as="h3"
                            variant="h3"
                          >
                            $ 231
                          </Text>
                          <Text
                            className="font-lato line-through md:ml-[0] ml-[9px] md:mt-0 mt-[9px] text-blue_gray_400_02 text-left w-auto"
                            variant="body4"
                          >
                            $288
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 my-2 w-[2%] md:w-full">
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] w-auto"
                              alt="checkmark"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-4 w-auto"
                              alt="checkmark_One"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-[13px] w-auto"
                              alt="checkmark_Two"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-4 w-auto"
                              alt="checkmark_Three"
                            />
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[9px] mt-[17px] w-auto"
                              alt="checkmark_Four"
                            />
                          </div>
                          <Text
                            className="font-medium leading-[25.00px] md:ml-[0] ml-[7px] text-black_900 text-left"
                            variant="body3"
                          >
                            <>
                              Confirmation is immediate.
                              <br />
                              Fixed price - Billingual Driver.
                              <br />
                              Flight monitoring. Meet & Greet.
                              <br />
                              Price per vehicle. Up to 6 passengers.
                              <br />2 S Bags & 5 L Bags
                            </>
                          </Text>
                          <div className="flex md:flex-1 flex-col items-end justify-start mb-[11px] md:ml-[0] ml-[356px] w-[21%] md:w-full">
                            <Text
                              className="font-bold text-green_800 text-right w-auto"
                              variant="body1"
                            >
                              Save $58
                            </Text>
                            <Text
                              className="leading-[20.00px] mr-[5px] mt-[11px] text-black_900 text-right"
                              variant="body5"
                            >
                              <>
                                Taxes and fees included
                                <br />
                                Roundtrip
                              </>
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[136px] mt-0.5 text-[13px] text-center text-white_A700 w-auto"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillBlue800"
                            >
                              Book This Ride
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-14 items-start justify-start max-w-[1177px] mt-6 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[9px] items-center justify-start md:mt-0 mt-[15px] w-auto md:w-full">
              <Text
                className="leading-[34.00px] text-black_900 text-left w-[98%] sm:w-full"
                as="h3"
                variant="h3"
              >
                Discoverymundo makes it really simple to transport travelers
                arriving or departing from Cancun International Airport to
                Paradisus Cancun Resort & Spa or any other specific place in the
                Cancun area.
              </Text>
              <Text
                className="font-normal leading-[22.00px] not-italic text-black_900 text-left"
                variant="body2"
              ></Text>
            </div>
            <div className="h-[348px] relative w-[44%] md:w-full">
              <div className="absolute bg-orange_300 h-[348px] inset-y-[0] my-auto right-[0] w-3/4"></div>
              <Img
                src="images/img_image9.png"
                className="absolute h-[287px] inset-y-[0] left-[0] my-auto object-cover w-[95%]"
                alt="imageNine"
              />
            </div>
          </div>
          <div className="bg-blue_50_7f flex flex-col items-center justify-start mt-[45px] p-[52px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[33px] items-start justify-start max-w-[1183px] mb-[13px] mx-auto w-full">
              <Text
                className="text-black_900 text-left w-auto"
                as="h1"
                variant="h1"
              >
                Why book a transfer?
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-center p-3 rounded-[5px] w-[19%] md:w-full">
                  <Img
                    src="images/img_ticket.svg"
                    className="h-[55px] mt-[17px] w-[55px]"
                    alt="ticket"
                  />
                  <Text
                    className="font-semibold mt-4 text-blue_800 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Meet & greet
                  </Text>
                  <Text
                    className="font-normal leading-[20.00px] mb-[43px] mt-[7px] not-italic text-black_900 text-center w-[97%] sm:w-full"
                    variant="body2"
                  >
                    Your representative will be waiting to meet you no matter
                    what happens.
                  </Text>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col gap-2.5 items-center justify-center p-3 rounded-[5px] w-[19%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start mt-[7px] w-[33%] md:w-full">
                    <Img
                      src="images/img_emailmessagesvgrepocom.svg"
                      className="h-[63px] w-[63px]"
                      alt="valueOne"
                    />
                    <Text
                      className="font-semibold text-blue_800 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Value
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[20.00px] mb-[43px] not-italic text-black_900 text-center w-[97%] sm:w-full"
                    variant="body2"
                  >
                    The best value for your money. Pay the right price for
                    vehicle of your choice.
                  </Text>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col gap-2 items-center justify-center p-3 rounded-[5px] w-[19%] md:w-full">
                  <div className="flex flex-col gap-[21px] items-start justify-start mt-[15px] w-[31%] md:w-full">
                    <Img
                      src="images/img_thumbsup.svg"
                      className="h-[52px] ml-0.5 md:ml-[0] w-[52px]"
                      alt="thumbsup"
                    />
                    <Text
                      className="font-semibold text-blue_800 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Safety
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[20.00px] mb-[43px] not-italic text-black_900 text-center w-[97%] sm:w-full"
                    variant="body2"
                  >
                    Transportation operators are local experts and have the
                    right certifications.
                  </Text>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 w-[39%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col justify-center sm:ml-[0] p-[11px] rounded-[5px] w-full">
                    <Img
                      src="images/img_file.svg"
                      className="h-[60px] md:ml-[0] ml-[61px] mr-[72px] mt-3.5 w-[60px]"
                      alt="file"
                    />
                    <Text
                      className="font-semibold md:ml-[0] ml-[74px] mr-[79px] mt-[13px] text-blue_800 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Fast
                    </Text>
                    <Text
                      className="font-normal leading-[20.00px] mb-11 mt-[9px] not-italic text-black_900 text-center w-full"
                      variant="body2"
                    >
                      No waiting times, no delays - get you to your destination
                      as soon as you want.
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-center sm:ml-[0] p-3 rounded-[5px] w-full">
                    <Img
                      src="images/img_doortodoor1.svg"
                      className="h-[61px] mt-2.5 w-[61px]"
                      alt="doortodoorOne"
                    />
                    <Text
                      className="font-semibold mt-[15px] text-blue_800 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Door-to-Door
                    </Text>
                    <Text
                      className="font-normal leading-[20.00px] mb-[43px] mt-[9px] not-italic text-black_900 text-center w-[97%] sm:w-full"
                      variant="body2"
                    >
                      Reach your destination promptly: You won’t need any
                      additional taxi or bus.
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[135px] mt-[46px] text-black_900 text-left w-auto"
            as="h1"
            variant="h1"
          >
            Our Testimonial
          </Text>
          <div className="bg-white_A700 flex md:flex-col flex-row gap-[42px] items-start justify-start md:ml-[0] ml-[39px] mt-[18px] pl-5 md:pr-5 py-5 w-[89%] md:w-full">
            <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[100px] md:mt-0 mt-[442px] self-stretch w-auto">
              <Img
                src="images/img_arrowup.svg"
                className="h-6 w-6"
                alt="arrowup"
              />
              <Img
                src="images/img_arrowdown_blue_800.svg"
                className="h-6 w-6"
                alt="arrowdown"
              />
            </div>
            <div className="h-[600px] md:h-[950px] md:mt-0 mt-10 relative w-[84%] md:w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <Img
                    src="images/img_qotes.svg"
                    className="h-[230px] w-[230px]"
                    alt="qotes"
                  />
                  <div className="bg-blue_800 flex md:flex-1 flex-col items-end justify-end md:pl-10 sm:pl-5 pl-[154px] py-[154px] w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start mt-5 p-10 sm:px-5 w-[254px]">
                      <div className="bg-white_A700 h-[272px] p-10 sm:px-5 rounded-[10px] shadow-bs3 w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white_A700 flex flex-col h-max inset-y-[0] items-end justify-start left-[15%] my-auto overflow-auto p-10 sm:px-5 rounded-[10px] shadow-bs3 w-[600px] md:w-full">
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
                          className="font-extrabold text-blue_800 text-left w-auto"
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
                          className="font-extrabold text-blue_800 text-left w-auto"
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
                      className="font-normal leading-[22.00px] not-italic text-gray_900_01 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Omnis totam molestiae delectus nemo alias nesciunt harum
                      et. Nobis dolorum excepturi quod vel. Sunt est qui ab non
                      dolores repellat rem impedit dolores. Ut ea rerum cum eum.
                      Alias dolores tempore illo accusantium est et voluptatem
                      voluptas.
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-gray_900_01 text-left w-auto"
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
            </div>
          </div>
          <div className="bg-blue_800 flex flex-col items-center justify-start py-[41px] w-full">
            <div className="flex flex-col gap-[31px] items-center justify-start mb-1 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
                <Text
                  className="capitalize font-normal not-italic text-center text-white_A700 w-auto"
                  variant="body2"
                >
                  We Accept All Major Credit & Debit Cards.
                </Text>
                <Img
                  src="images/img_paymentpaypal1.png"
                  className="md:flex-1 h-[27px] sm:h-auto ml-2.5 md:ml-[0] object-cover w-[5%] md:w-full"
                  alt="paymentpaypalTwo"
                />
                <Img
                  src="images/img_paymentvisa1.png"
                  className="md:flex-1 h-[27px] sm:h-auto object-cover w-[5%] md:w-full"
                  alt="paymentvisaTwo"
                />
                <Img
                  src="images/img_paymentmastercard.png"
                  className="md:flex-1 h-[27px] sm:h-auto object-cover w-[5%] md:w-full"
                  alt="paymentmasterca"
                />
                <div className="flex relative w-[9%] md:w-full">
                  <Img
                    src="images/img_paymentdiscover.png"
                    className="h-[27px] my-auto object-cover w-[52%]"
                    alt="paymentdiscover"
                  />
                  <Img
                    src="images/img_amex1.png"
                    className="h-[27px] ml-[-2px] my-auto object-cover w-[52%] z-[1]"
                    alt="amexTwo"
                  />
                </div>
                <Text
                  className="capitalize font-normal md:ml-[0] ml-[453px] not-italic text-center text-white_A700 w-auto"
                  variant="body2"
                >
                  Follow us
                </Text>
                <Img
                  src="images/img_facebooksvgrepocom_white_a700.svg"
                  className="h-8 md:ml-[0] ml-[11px] w-8"
                  alt="facebooksvgrepo_One"
                />
                <Img
                  src="images/img_twittersvgrepocom_white_a700.svg"
                  className="h-8 w-8"
                  alt="twittersvgrepoc"
                />
                <Img
                  src="images/img_instagramsvgrepocom_white_a700.svg"
                  className="h-8 ml-0.5 md:ml-[0] w-8"
                  alt="instagramsvgrep"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Line className="bg-blue_700 h-px w-full" />
                <Text
                  className="capitalize font-normal leading-[241.50%] mt-[18px] not-italic text-center text-white_A700"
                  variant="body2"
                >
                  <>
                    Isla Mujeres | Cancun | Playa del Carmen | Tulum Hotel Zone
                    | Bavaro | Puerto Morelos | Paris | Playa Paraiso | Playa
                    Mujeres | Nuevo Vallarta | Uvero Alto
                    <br />
                    Terms | Privacy | Sitemap | Affiliate Program | Help | Blog
                    | API{" "}
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
      </div>
    </>
  );
};

export default RidesviewOnePage;
