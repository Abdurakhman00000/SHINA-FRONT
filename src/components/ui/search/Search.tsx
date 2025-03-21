import React, { useState } from "react";
import scss from "./Search.module.scss";
import { Modal } from "antd";
import { LuSearch } from "react-icons/lu";
import useMediaQuery from "@/hooks/useMediaQuery";
import SearchInput from "./search_input/SearchInput";
const Search = () => {
  const isMobile = useMediaQuery("max-width:768px");
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {isMobile ? (
        <div className={scss.Search_mobile} >
          <button
            className={scss.search_button_mobile}
            onClick={handleShowModal}
          >
            <LuSearch />
          </button>
          <Modal open={showModal} footer={null}  onCancel={()=>setShowModal(false)}>
            <SearchInput />
          </Modal>
        </div>
      ) : (
        <SearchInput />
      )}
    </>
  );
};

export default Search;
