import { Modal } from "antd";
import scss from "./Catalog_modal.module.scss";
import { useCatalogModalStore } from "@/store/useCatalogModalStore";
import Link from "next/link";
import { catalogs } from "@/constants/data";
import Image from "next/image";

const CatalogModal = () => {
  const { isOpen, setIsOpen } = useCatalogModalStore();
  const onChancel = () => {
    setIsOpen(false);
  };
  return (
    <Modal open={isOpen} onCancel={onChancel} footer={null}>
      <div className={scss.Catalog}>
        <div className={scss.catalog_nav}>
          <h3 className={scss.catalog_title}>Шины</h3>
        </div>
        <ul className={scss.catalog_list}>
          {catalogs.map((catalog) => (
            <li className={scss.catalog_list_item} key={catalog.id}>
              <Link
                href={`/data-results/${catalog.id}`}
                className={scss.catalog_list_item_link}
              >
                <Image
                  src={catalog.img}
                  alt={catalog.type}
                  width={150}
                  height={150}
                />
                <p>{catalog.type}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div></div>
      </div>
    </Modal>
  );
};

export default CatalogModal;
