import React from "react";

import { Img, Text, Button, List } from "components";

const LanguageDropdownPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <header className="bg-blue_800 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            src="images/img_logo1.png"
            className="md:flex-1 h-[37px] sm:h-auto mb-3 md:ml-[0] ml-[137px] md:mt-0 mt-[15px] object-cover w-[11%] md:w-full"
            alt="logoOne"
          />
          <Text
            className="font-medium md:ml-[0] ml-[726px] md:mt-0 my-[23px] text-left text-white_A700 w-auto"
            variant="body2"
          >
            Rs.
          </Text>
          <Img
            src="images/img_ellipse2.png"
            className="h-7 md:h-auto ml-7 md:ml-[0] md:mt-0 my-[18px] rounded-[50%] w-7"
            alt="ellipseTwo"
          />
          <Button
            className="flex h-[25px] items-center justify-center md:ml-[0] ml-[29px] md:mt-0 my-5 w-[25px]"
            shape="icbRoundedBorder12"
            size="smIcn"
            variant="icbFillWhiteA700"
          >
            <Img src="images/img_question.svg" className="" alt="question" />
          </Button>
          <div className="flex md:flex-1 flex-row gap-2 items-start justify-center md:ml-[0] ml-[33px] mr-[135px] md:mt-0 my-4 w-[9%] md:w-full">
            <Text
              className="bg-teal_A700 h-8 p-2 rounded-[50%] text-left text-white_A700 w-8"
              variant="body4"
            >
              AT
            </Text>
            <Text
              className="leading-[15.00px] mt-[3px] text-left text-white_A700"
              variant="body4"
            ></Text>
          </div>
        </header>
        <div className="bg-black_900_87 flex flex-col items-center justify-start p-[13px] w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[882px] mb-56 mx-auto p-2.5 md:px-5 rounded-[5px] w-full">
            <div className="flex flex-col gap-[5px] items-end justify-start mb-5 self-stretch w-auto md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between pt-4 w-full">
                <Text
                  className="font-medium text-black_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Select your language
                </Text>
                <Img
                  src="images/img_closesvgrepocom.svg"
                  className="h-[22px] w-6"
                  alt="closesvgrepocom"
                />
              </div>
              <List
                className="sm:flex-col flex-row md:gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[612px] justify-between max-w-[834px] w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-5 h-[609px] md:h-auto items-start justify-start pb-5 pt-[38px] self-stretch w-auto">
                  <div className="bg-blue_200_33 flex flex-col items-start justify-start px-2 py-1.5 rounded-sm self-stretch w-auto">
                    <div className="flex flex-row gap-[9px] items-center justify-start self-stretch w-auto">
                      <Img
                        src="images/img_ellipse2.png"
                        className="h-7 md:h-auto rounded-[50%] w-7"
                        alt="ellipseThree"
                      />
                      <Text
                        className="font-normal not-italic text-blue_800 text-left w-auto"
                        variant="body1"
                      >
                        American English
                      </Text>
                      <Img
                        src="images/img_checksvgrepocom.svg"
                        className="h-3.5 w-3.5"
                        alt="checksvgrepocom"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start px-2 self-stretch w-auto">
                    <Img
                      src="images/img_ellipse4.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseFour"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Español
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start px-2 self-stretch w-auto">
                    <Img
                      src="images/img_ellipse5.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseFive"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Hrvatski
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start px-2 self-stretch w-auto">
                    <Img
                      src="images/img_ellipse6.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseSix"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lietuvių
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start px-2 self-stretch w-auto">
                    <Img
                      src="images/img_ellipse7.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseSeven"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Norsk
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start px-2 self-stretch w-auto">
                    <Img
                      src="images/img_ellipse8.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseEight"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Suomi
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start px-2 self-stretch w-auto">
                    <Img
                      src="images/img_ellipse9.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseNine"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      català
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start px-2 self-stretch w-auto">
                    <Img
                      src="images/img_ellipse10.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseTen"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      română
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start px-2 self-stretch w-auto">
                    <Img
                      src="images/img_ellipse11.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseEleven"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      čeština
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start px-2 self-stretch w-auto">
                    <Img
                      src="images/img_ellipse12.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseTwelve"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Українська
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start px-2 self-stretch w-auto">
                    <Img
                      src="images/img_ellipse13.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseThirteen"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      中文
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[26px] h-[612px] md:h-auto items-start justify-start pb-11 pt-10 self-stretch w-auto">
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse3.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseThree"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Deutsch
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse4_28x28.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseFour"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Español en Argentina
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse5_28x28.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseFive"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Indonesia
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse6_28x28.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseSix"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Magyar
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse7_28x28.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseSeven"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Português
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse8_28x28.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseEight"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Svenska
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse9_28x28.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseNine"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      dansk
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse10_28x28.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseTen"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      slovenščina
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse11_28x28.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseEleven"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Ελληνικά
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse12_28x28.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseTwelve"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      עברית
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse13_28x28.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseThirteen"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      日本語
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[26px] h-[588px] md:h-auto items-start justify-start pb-11 pt-5 self-stretch w-auto">
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse3_28x28.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseThree"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Eesti
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse4_1.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseFour"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Español mexicano
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse5_1.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseFive"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Italiano
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse6_1.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseSix"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Melayu
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse7_1.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseSeven"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Português do Brasil
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse8_1.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseEight"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Tiếng Việt
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse9_1.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseNine"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      français
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse10_1.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseTen"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      srpski
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse11_1.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseEleven"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Български
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse12_1.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseTwelve"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      العربية
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse13_1.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseThirteen"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      繁體中文
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[26px] h-[588px] md:h-auto items-start justify-start pb-11 pt-5 self-stretch w-auto">
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse2.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseThree"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      English
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse4_2.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseFour"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Filipino
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse5_2.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseFive"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Latviešu
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse6_2.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseSix"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Nederlands
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse7_2.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseSeven"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Slovenčina
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse8_2.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseEight"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Türkçe
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse9_2.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseNine"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      polski
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse10_2.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseTen"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      íslenska
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse11_2.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseEleven"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Русский
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse12_2.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseTwelve"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      ไทย
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start self-stretch w-auto">
                    <Img
                      src="images/img_ellipse13_2.png"
                      className="h-7 md:h-auto rounded-[50%] w-7"
                      alt="ellipseThirteen"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      한국어
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageDropdownPage;
