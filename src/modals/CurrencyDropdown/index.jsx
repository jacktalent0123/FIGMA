import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, List } from "components";

const CurrencyDropdownModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[62%]"
        overlayClassName="bg-black_900_87 fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[882px] mt-[51px] mx-auto p-[15px] md:px-5 rounded-[5px] w-full">
            <div className="flex flex-col gap-2 items-center justify-start mb-[55px] w-[99%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="font-medium mt-2 text-black_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Select your currency
                </Text>
                <Img
                  src="images/img_closesvgrepocom.svg"
                  className="h-6 mb-1.5 w-6"
                  alt="closesvgrepocom"
                />
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[66px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start self-stretch w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-5 items-start justify-start px-2.5 py-5 self-stretch w-auto">
                  <div className="bg-blue_200_33 flex flex-col items-start justify-start rounded-sm self-stretch w-auto">
                    <div className="flex flex-row gap-11 items-center justify-start px-2 py-1 rounded-sm self-stretch w-auto">
                      <Text
                        className="font-normal leading-[20.00px] not-italic text-blue_800 text-left"
                        variant="body1"
                      >
                        <>
                          Indian rupee
                          <br />
                          Rs.
                        </>
                      </Text>
                      <Img
                        src="images/img_checksvgrepocom.svg"
                        className="h-3.5 w-3.5"
                        alt="checksvgrepocom"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        U.S. dollar
                        <br />
                        US$
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col h-10 md:h-auto items-start justify-start w-[95px]">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Russian Ruble
                        <br />
                        RUB
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Namibian Dollar
                        <br />
                        NAD
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Kazakhstani tenge
                        <br />
                        KZT
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Australian dollar
                        <br />
                        AUD
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        South African rand
                        <br />
                        ZAR
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Kuwaiti dinar
                        <br />
                        KWD
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        U.A.E. dirham
                        <br />
                        AED
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Polish zloty
                        <br />
                        PLN
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Mexican peso
                        <br />
                        MXN
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Israeli new sheqel
                        <br />₪
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Colombian peso
                        <br />
                        COP
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-5 h-[800px] md:h-auto items-start justify-start py-5 self-stretch w-auto">
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      €£$
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Chinese yuan
                        <br />
                        CNY
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Danish krone
                        <br />
                        DKK
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Swiss franc
                        <br />
                        CHF
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Georgian lari
                        <br />
                        GEL
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        New Zealand dollar
                        <br />
                        NZD
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Fijian dollar
                        <br />
                        FJD
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Omani rial
                        <br />
                        OMR
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Korean won
                        <br />
                        KRW
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Norwegian krone
                        <br />
                        NOK
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        New Turkish lira
                        <br />
                        TL
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Hungarian forint
                        <br />
                        HUF
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Bulgarian lev
                        <br />
                        BGN
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-5 h-[800px] md:h-auto items-start justify-start py-5 self-stretch w-auto">
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      Euro €
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Thai baht
                        <br />
                        THB
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Azerbaijan, New Manats
                        <br />
                        AZN
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Swedish krona
                        <br />
                        SEK
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Moldovan leu
                        <br />
                        MDL
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Egyptian pound
                        <br />
                        EGP
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Hong Kong Dollar
                        <br />
                        HKD
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Ukraine Hryvnia
                        <br />
                        UAH
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Qatar riyal
                        <br />
                        QAR
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Brazilian real
                        <br />
                        R$
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Japanese yen
                        <br />¥
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Czech koruna
                        <br />
                        CZK
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Indonesian rupiah
                        <br />
                        Rp
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-5 h-[800px] md:h-auto items-start justify-start py-5 self-stretch w-auto">
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Pound sterling
                        <br />£
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Saudi Arabian riyal
                        <br />
                        SAR
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        New Taiwan Dollar
                        <br />
                        TWD
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Malaysian ringgit
                        <br />
                        MYR
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        CFA Franc BCEAO
                        <br />
                        XOF
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Singapore dollar
                        <br />
                        S$
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Jordanian dinar
                        <br />
                        JOD
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Bahrain dinar
                        <br />
                        BHD
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Canadian dollar
                        <br />
                        CAD
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Argentine peso
                        <br />
                        AR$
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Romanian new leu
                        <br />
                        RON
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                      variant="body1"
                    >
                      <>
                        Chilean peso
                        <br />
                        CL$
                      </>
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default CurrencyDropdownModal;
