import Form from "./form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section className="bg-[url('assets/contact.jpg')] min-h-[100vh] bg-no-repeat flex items-center justify-center w-full bg-center bg-cover">
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/40" />
        <div className="relative z-30 w-full h-full">
          <div className="w-full max-w-[1350px] px-[15px] mx-auto flex justify-center items-center overflow-hidden">
            <div className="flex flex-col-reverse items-center md:flex-row h-full w-full justify-between gap-10  space-y-12 lg:space-y-0 pb-[40px]">
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
                    <a
                      href="https://www.google.com/maps/place/Kichik+Xalqa+Yo'li+88,+%D0%A2%D0%BEshkent,+Toshkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.27028,69.2634689,17.83z/data=!4m5!3m4!1s0x38ae8aa1f68af145:0xcd5946e4ed42be38!8m2!3d41.2703197!4d69.2648999?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      className="flex items-center gap-3 lg:justify-start lg:text-[24px]"
                    >
                      <FaLocationDot
                        color="#f48c06"
                        className="text-[28px] md:text-[36px]"
                      />
                      <p>Малая кольцевая 88Б</p>
                    </a>
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
