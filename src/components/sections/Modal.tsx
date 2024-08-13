import ReactDom from "react-dom";
import React from "react";

const GenerateModal = (props: any) => {
  const Overlay = () => {
    return (
      <div className=" w-full h-[100vh] top-0 left-0 fixed flex items-center justify-center m-auto overflow-hidden z-[10] bg-black opacity-40"></div>
    );
  };
  const Backdrop = (props: any) => {
    return (
      <div className=" md:w-[60%] w-full break-words md:left-[25%] sm:left-[10%] sm:w-[80%] sm:m-auto m-auto md:max-w-[150%] top-[120px] fixed rounded-[14px] bg-white pt-[-50px] ease-in-out z-[210]">
        <div>{props.children}</div>
      </div>
    );
  };

  const getdocumentId = document.getElementById("rootmodal") as HTMLDivElement;
  return (
    <div>
      {ReactDom.createPortal(<Overlay />, getdocumentId)}
      {ReactDom.createPortal(
        <Backdrop>{props.children}</Backdrop>,
        getdocumentId
      )}
    </div>
  );
};
export default GenerateModal;
