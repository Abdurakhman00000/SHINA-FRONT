"use client";
import React, { useReducer, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./AutoPodborModal.module.scss";

interface State {
  activeTab: "shiny" | "diski";
  marka: string;
  model: string;
  year: string;
  modification: string;
  season: string;
  diskType: string;
}

type Action =
  | { type: "SET_TAB"; payload: "shiny" | "diski" }
  | { type: "SET_MARKA"; payload: string }
  | { type: "SET_MODEL"; payload: string }
  | { type: "RESET" }
  | { type: "UPDATE_FIELD"; field: keyof State; value: string };

const initialState: State = {
  activeTab: "shiny",
  marka: "",
  model: "",
  year: "",
  modification: "",
  season: "",
  diskType: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_TAB":
      return { ...state, activeTab: action.payload };
    case "SET_MARKA":
      return {
        ...initialState,
        activeTab: state.activeTab,
        marka: action.payload,
      };
    case "SET_MODEL":
      return {
        ...state,
        model: action.payload,
        year: "",
        modification: "",
        season: "",
        diskType: "",
      };
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { ...initialState, activeTab: state.activeTab };
    default:
      return state;
  }
}

const SEASON_OPTIONS = [
  { value: "summer", label: "Летние" },
  { value: "winter", label: "Зимние" },
  { value: "all_season", label: "Всесезонные" },
] as const;

const DISK_OPTIONS = [
  { value: "steel", label: "Стальные" },
  { value: "alloy", label: "Литые" },
  { value: "forged", label: "Кованые" },
] as const;

export const AutoPodborModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectChange = useCallback(
    (field: keyof State, value: string) => {
      dispatch({ type: "UPDATE_FIELD", field, value });
    },
    []
  );

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal_header}>
          <h2>Подбор {state.activeTab === "shiny" ? "шин" : "дисков"}</h2>
          <button className={styles.close_button} onClick={onClose}>
            <IoMdClose />
          </button>
        </div>

        <div className={styles.tabs}>
          <div className={styles.tabs_header}>
            <div className={styles.tab_items}>
              {["shiny", "diski"].map((tab) => (
                <button
                  key={tab}
                  onClick={() =>
                    dispatch({
                      type: "SET_TAB",
                      payload: tab as "shiny" | "diski",
                    })
                  }
                  className={`${styles.tab} ${
                    state.activeTab === tab ? styles.tab_active : ""
                  }`}
                >
                  {tab === "shiny" ? "Шины" : "Диски"}
                </button>
              ))}
            </div>
            <button
              className={styles.reset_button}
              onClick={() => dispatch({ type: "RESET" })}
            >
              Сбросить фильтры
            </button>
          </div>
        </div>

        <div className={styles.form_content}>
          <div className={styles.select_group}>
            <select
              value={state.marka}
              onChange={(e) =>
                dispatch({ type: "SET_MARKA", payload: e.target.value })
              }
              className={styles.select_input}
            >
              <option value="">Марка</option>
              <option value="alfa_romeo">ALFA ROMEO</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
            </select>

            <select
              value={state.model}
              onChange={(e) =>
                dispatch({ type: "SET_MODEL", payload: e.target.value })
              }
              className={styles.select_input}
              disabled={!state.marka}
            >
              <option value="">Модель</option>
              <option value="156">156</option>
              <option value="159">159</option>
            </select>
          </div>

          <div className={styles.select_group}>
            <select
              value={state.year}
              onChange={(e) => handleSelectChange("year", e.target.value)}
              className={styles.select_input}
              disabled={!state.model}
            >
              <option value="">Год выпуска</option>
              {Array.from({ length: 25 }, (_, i) => 2024 - i).map((year) => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              ))}
            </select>

            <select
              value={state.modification}
              onChange={(e) =>
                handleSelectChange("modification", e.target.value)
              }
              className={styles.select_input}
              disabled={!state.model}
            >
              <option value="">Модификация</option>
              <option value="2.0">2.0</option>
              <option value="2.5">2.5</option>
            </select>
          </div>

          {state.activeTab === "shiny" ? (
            <div className={styles.season_select}>
              <select
                value={state.season}
                onChange={(e) => handleSelectChange("season", e.target.value)}
                className={styles.select_input}
                disabled={!state.model}
              >
                <option value="">Сезон</option>
                {SEASON_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className={styles.disk_type_select}>
              <select
                value={state.diskType}
                onChange={(e) => handleSelectChange("diskType", e.target.value)}
                className={styles.select_input}
                disabled={!state.model}
              >
                <option value="">Тип диска</option>
                {DISK_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            className={styles.submit_button}
            disabled={!state.model || !state.marka}
          >
            Подобрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoPodborModal;
