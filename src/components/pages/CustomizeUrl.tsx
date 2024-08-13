import React, { useState } from "react";
import { auth } from "../db";
import { ToastContainer, Bounce, toast } from "react-toastify";

interface customizeUelValueType {
  customizeUrlValue: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  customizeUelValue?: React.Dispatch<React.SetStateAction<string>>;
}
const CustomizeUrl = ({
  customizeUrlValue,
  setShowModal,
}: customizeUelValueType) => {
  const [newCode, setNewCode] = useState("");

  const HandleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const currentUser = auth.currentUser;
    try {
      const tokenId = await currentUser?.getIdToken();
      const response = await fetch(
        `https://tiny-lnk.netlify.app/updateurl/${customizeUrlValue}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "user-id": `${tokenId}`,
          },
          body: JSON.stringify({ newCode }),
        }
      );

      if (response.ok) {
        toast.success("url customize successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        setShowModal(false);
      }
    } catch (error: any) {
      toast.success("error customizing url", {
        position: "top-center",
        autoClose: 5000,
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
  return (
    <main>
      <ToastContainer />
      <div>
        <p
          onClick={() => setShowModal(false)}
          className=" mb-5 py-1 mt-2 ml-2 text-center font-bold rounded-full w-[30px] text-white cursor-pointer bg-black"
        >
          X
        </p>
      </div>
      <div className="py-[100px] px-5">
        <form onSubmit={HandleUpdate}>
          <div>
            <input
              required
              onChange={(e) => setNewCode(e.target.value)}
              placeholder={`${customizeUrlValue}`}
              className="py-2 px-2 rounded-md w-full border-2"
              type="text"
            />
            <br />
            <button className="w-full mt-5 py-2 rounded-md border bg-black text-white">
              Edit ShortUrl
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CustomizeUrl;
