import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { TbCopy } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import GenerateModal from "../sections/Modal";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface shortUrlType {
  shortUrl: string;
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShortUrl?: React.Dispatch<React.SetStateAction<string>>;
}

type DateOptions = {
  weekday: "long" | "short" | "narrow";
  month: "long" | "short" | "narrow";
  day: "numeric" | "2-digit";
};

function getDate() {
  const options: DateOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };
  return new Date().toLocaleDateString("en-US", options);
}

const ShortUrlOutput = ({ shortUrl, setDisplayModal }: shortUrlType) => {
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector(
      "canvas"
    ) as HTMLCanvasElement | null;
    if (canvas) {
      const qrcodeUrl: string = canvas
        .toDataURL()
        .replace("image/png", "image/octet-stream");
      let a = document.createElement("a");
      a.href = qrcodeUrl;
      a.download = "qrcode.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast.success("downloading qr code.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("Canvas element not found", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  //handler to copy shortUrl;
  const handleCopy = (shortUrl: string) => {
    navigator.clipboard.writeText(shortUrl);
    toast.success("copied!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <GenerateModal>
      <main className="">
        <div>
          <p
            onClick={() => setDisplayModal(false)}
            className=" mb-5 py-1 mt-2 ml-2 text-center font-bold rounded-full w-[30px] text-white cursor-pointer bg-black"
          >
            X
          </p>
        </div>
        <div className=" w-full">
          <div className="grid lg:w-[80%] m-auto md:w-full items-center sm:grid-cols-2">
            <div className="space-y-2 sm:m-0 m-auto">
              <p className="font-medium">{shortUrl}</p>
              <p className="font-medium">{getDate()}</p>
            </div>

            <div className="lg:block md:hidden hidden" ref={qrRef}>
              <QRCodeCanvas size={280} id="qrcodeId" value={shortUrl} />
            </div>
            <div className=" lg:hidden sm:block hidden " ref={qrRef}>
              <QRCodeCanvas size={200} id="qrcodeId" value={shortUrl} />
            </div>
            <div className=" lg:hidden sm:hidden mt-5 m-auto block" ref={qrRef}>
              <QRCodeCanvas size={160} id="qrcodeId" value={shortUrl} />
            </div>
          </div>
          <div className="w-full py-5">
            <div className="flex justify-center md:space-x-5 space-x-2 w-[70%] m-auto ">
              <button
                className="bg-black text-white md:px-12 sm:px-10  px-5 py-2 rounded-md flex items-center sm:space-x-5 space-x-2"
                onClick={() => handleCopy(shortUrl)}
              >
                <TbCopy /> <p>Copy</p>
              </button>
              <button
                className="bg-black text-white md:px-12 sm:px-10  px-2 py-2 rounded-md flex items-center sm:space-x-5 space-x-2"
                onClick={handleDownload}
              >
                <MdOutlineFileDownload />
                <p>Download</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </GenerateModal>
  );
};

export default ShortUrlOutput;
