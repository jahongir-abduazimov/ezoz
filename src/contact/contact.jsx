import Form from "./form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section className="bg-[url('assets/contact2.jpg')] min-h-[100vh] bg-no-repeat flex md:items-center w-full bg-center bg-cover">
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/40" />
        <div className="relative z-30 w-full h-full">
          <div className="w-full max-w-[1350px] px-[15px] mx-auto flex justify-center items-center overflow-hidden">
            <div className="flex flex-col-reverse items-center md:flex-row h-full w-full justify-between gap-10 lg:space-y-0 pt-[30px] md:pt-0 pb-[40px] md:pb-0">
              <Form />
              <div className="text-white w-auto text-center lg:text-left">
                <h2 className="text-4xl lg:text-6xl font-bold mb-10 md:mb-16 leading-8 max-sm:text-3xl">
                  Биз билан боғланинг
                </h2>
                <div className="flex  justify-center lg:justify-start">
                  <div className="flex flex-col space-y-6 md:space-y-8 text-lg">
                    <div className="flex items-center gap-3 lg:justify-start lg:text-[24px]">
                      <FaPhoneAlt
                        color="#f48c06"
                        className="text-[28px] md:text-[36px]"
                      />
                      <a href="tel:+998950070008">+998 95 007 00 08</a>
                    </div>
                    <div className="flex items-center gap-3 lg:justify-start lg:text-[24px]">
                      <FaPhoneAlt
                        color="#f48c06"
                        className="text-[28px] md:text-[36px]"
                      />
                      <a href="tel:+998946880008">+998 94 688 00 08</a>
                    </div>
                    <p
                      target="_blank"
                      className="flex items-center gap-3 lg:justify-start lg:text-[24px]"
                    >
                      <FaLocationDot
                        color="#f48c06"
                        className="text-[28px] md:text-[36px]"
                      />
                      <p>Малая кольцевая 88Б</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
