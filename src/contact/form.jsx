// Form.js
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FiUser } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { VscLoading } from "react-icons/vsc";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const botToken = "7847092586:AAERTtsHiMxIsPYoBmkeh0BxFPfckK2_HAE";
  const chatId = "-1002351772705";

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    setNameError("");
    setPhoneError("");
    if (!name) {
      setNameError("Исмингизни киритунг!");
      hasError = true;
    }
    if (!phone) {
      setPhoneError("Телефон рақамингизни киритинг!");
      hasError = true;
    }

    if (hasError) return;

    const payload = {
      chat_id: chatId,
      text: `New client!\n\nName: ${name}\nPhone: ${phone}\nComment: ${comment}`,
    };
    setLoading(true);

    axios
      .post(`https://api.telegram.org/bot${botToken}/sendMessage`, payload)
      .then(() => {
        setName("");
        setPhone("");
        setComment("");
        toast.success("Маълумотларингиз юборилди!");
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        toast.error("Юбориб бўлмади");
        setLoading(false);
      });
  };

  const handleChangeName = (name) => {
    setName(name.target.value);
    if (name.target.value) {
      setNameError("");
    } else {
      setNameError("Исмингизни киритунг!");
    }
  };

  const handleChangePhone = (event) => {
    const input = event.target.value;

    // Allow only numbers and a single leading "+"
    if (/^\+?[0-9]*$/.test(input)) {
      setPhone(input);
      setPhoneError("");
    } else {
      setPhoneError("Телефон рақамингизни киритинг!");
    }
  };

  return (
    <div className="lg:w-[526px] w-full bg-white lg:px-8 lg:py-12 px-[5%] py-[6%] rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div className="relative">
          <p className="text-black text-[14px] font-semibold mb-2">Исмингиз</p>
          <FiUser className="text-[28px] absolute left-2 top-[38px] text-[#F48C06]" />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Исмингизни киритинг"
            className={`w-full pt-3 pl-12 pr-3 pb-3 rounded-lg outline-none ring-1 focus:ring-2 duration-200 text-black ${
              nameError
                ? "ring-red-500"
                : "ring-[#0B0B0B80] focus:ring-[#f48c06]"
            }`}
          />
          {nameError && (
            <p className="text-red-500 text-xs font-medium absolute">
              {nameError}
            </p>
          )}
        </div>

        <div className="relative">
          <p className="text-black text-[14px] font-semibold mb-2">
            Телефон рақамингиз
          </p>
          <LuPhone className="text-[28px] top-[40px] absolute left-2 text-[#F48C06]" />
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChangePhone}
            placeholder="+998 90 123 45 67"
            className={`w-full pt-3 pl-12 pr-3 pb-3 rounded-lg outline-none ring-1 focus:ring-2 duration-200 text-black ${
              phoneError
                ? "ring-red-500"
                : "ring-[#0B0B0B80] focus:ring-[#f48c06]"
            }`}
            inputMode="tel"
          />
          {phoneError && (
            <p className="text-red-500 text-xs font-medium absolute">
              {phoneError}
            </p>
          )}
        </div>

        <div>
          <p className="text-black text-[14px] font-semibold mb-2">Фикрингиз</p>
          <textarea
            name="textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Ўзингиз хоҳлаган хизматни айтинг"
            rows="4"
            className="w-full p-3 rounded-lg outline-none ring-1 ring-[#0B0B0B80] focus:ring-2 duration-200 focus:ring-[#f48c06] text-black"
          />
        </div>

        <div>
          <button
            disabled={loading}
            type="submit"
            className="w-full bg_btn font-bold h-[50px] flex items-center justify-center rounded-xl transition-all text-white"
          >
            {loading? <VscLoading className="animate-spin text-2xl" /> : "Юбориш"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Form;
