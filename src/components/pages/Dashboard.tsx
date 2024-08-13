import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { TbCopy } from "react-icons/tb";
import { AiTwotoneDelete } from "react-icons/ai";
import { auth, db } from "../db";
import { collection, onSnapshot } from "firebase/firestore";
import CustomizeUrl from "./CustomizeUrl";
import Modal from "../sections/Modal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Bounce } from "react-toastify";

interface dataType {
  clicks: number;
  date: string;
  originalUrl: string;
  shortUrl: string;
  urlCode: string;
}

const Dashboard = () => {
  const [data, setData] = useState<dataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customizeUrlValue, setCustomizeUrlValue] = useState<string>("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getUserItems = async () => {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const userCollection = collection(db, "users", uid, "ownerData");
        try {
          const unsubscribe = onSnapshot(
            userCollection,
            (querySnapshot) => {
              const fetchedData = querySnapshot.docs.map(
                (doc) => doc.data() as dataType
              );

              setData(fetchedData);
              setIsLoading(false);
            },
            (err: any) => {
              toast.error(
                "error fetching user data, check your internet connection",
                {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                }
              );
              setError(err);
              setIsLoading(false);
            }
          );

          return unsubscribe;
        } catch (err: any) {
          toast.error("user not authenticated", {
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
          setError(err);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    // This will wait for Firebase Auth to initialize
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      if (user) {
        getUserItems();
      }
    });

    return () => {
      unregisterAuthObserver();
    };
  }, []);

  interface itemTypes {
    clicks: number;
    shortUrl: string;
    originalUrl: string;
    urlCode: string;
    date: string;
  }

  const handleDeleteUr = async (item: itemTypes) => {
    const uniqueCode = item.urlCode;

    if (!auth.currentUser) {
      toast.error("user not authenticated", {
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
      return;
    }

    const currentUser = auth.currentUser;
    try {
      const idToken = await currentUser.getIdToken();
      const response = await fetch(
        `https://tiny-lnk.netlify.app/deleteurl/${uniqueCode}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "user-id": idToken,
          },
        }
      );

      if (response.ok) {
        toast.success("url deleted successfully", {
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
        toast.error("error deleting utl", {
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
    } catch (error) {
      console.log(error);
    }
  };

  //handler to copy shortUrl;
  const handleCopy = (item: itemTypes) => {
    const shortUrl = item.shortUrl;
    navigator.clipboard.writeText(shortUrl);
    toast.success("copied!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  //handle edit or customize shortUrl;
  const handleCustomizeUrl = (item: itemTypes) => {
    setShowModal(true);
    const urlCode = item.urlCode;
    setCustomizeUrlValue(urlCode);
  };

  return (
    <>
      <ToastContainer />
      <br />
      {showModal && (
        <Modal>
          <CustomizeUrl
            setShowModal={setShowModal}
            customizeUrlValue={customizeUrlValue}
          />
        </Modal>
      )}
      <div className="flex flex-col mt-[150px] mx-2 min-h-screen overflow-hidden bg-muted/40">
        <main className="flex-1  justify-center overflow-hidden">
          <div className="m-auto ">
            <div className="mb-8">
              <h1 className="md:text-3xl text-2xl font-bold text-[#f9a826]">
                Analytics
              </h1>
              <p className="text-muted-foreground text-[#9b9a9a]">
                Track the performance of your shortened URLs.
              </p>
            </div>
            <div className="">
              <main className="border-2 mb-5 px-2 py-5 rounded-md">
                <header>
                  <h2 className="text-2xl font-medium text-indigo-950">
                    Total Activity
                  </h2>
                  <p className="text-[#9b9a9a]">
                    The total number of shortened URLs created
                  </p>
                </header>
                <h1>
                  <div className="flex text-[#f9a826] items-center mt-4 justify-center text-5xl font-bold">
                    {data.length}
                  </div>
                </h1>
              </main>

              {/* user dataset */}
              <section className="border-2 pl-2 pr-2 py-5 lg:w-[80%] m-auto md:w-[100%]">
                <div className="space-y-1 mb-5">
                  <h2 className="md:text-3xl text-2xl text-[#f9a826] font-bold">
                    Shortened URLs
                  </h2>
                  <p className="font-medium text-[#9b9a9a]">
                    View details of your shortened URLs
                  </p>
                </div>

                {/* break point */}
                <main className="sm:w-full sm:overflow-auto overflow-x-scroll w-full">
                  {error ? (
                    <p>Error Fetching userData</p>
                  ) : (
                    <div className="">
                      {isLoading ? (
                        <p>Loading....</p>
                      ) : (
                        <div className="md:w-full w-[700px]">
                          {data.map((item, index) => (
                            <div
                              key={index}
                              className=" mt-2 rounded-md bg-black md:w-full text-white hover:bg-indigo-950 cursor-pointer font-medium flex items-center justify-center"
                            >
                              <main className="w-full flex justify-between py-3 pl-3">
                                <div className="flex items-center space-x-5">
                                  <h3>{item.shortUrl}</h3>
                                  <FiEdit
                                    onClick={() => handleCustomizeUrl(item)}
                                    size={18}
                                  />
                                  <TbCopy onClick={() => handleCopy(item)} />
                                </div>
                                <p>{item.date}</p>
                                <p>clicks: {item.clicks}</p>
                                <div className="grid grid-cols-2">
                                  <AiTwotoneDelete
                                    onClick={() => handleDeleteUr(item)}
                                  />
                                </div>
                              </main>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </main>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
