import { ChangeEvent } from "react";

export interface IGameUploadRadio {
  i: number
  text: string
  value: string
  onClick: ChangeEvent<HTMLInputElement> | any
  checked: boolean
  name?: string
}

export default function GameUploadRadio({ checked, i = 0, text = "", value = "", onClick, name="flexRadioDefault" }: IGameUploadRadio) {
  return (
    <>
      <div className="form-check d-flex align-items-center gap-1 mb15 ">
        <input
          checked={checked}
          // onChange={() => {
          //   onClick()
          //   console.log("CHANGED")
          // }}
          value={value}
          onClick={onClick}
          className="form-check-input cursor-pointer"
          type="radio"
          name={name}
          id={`${name}${i}`}
        />
        <label className="form-check-label" htmlFor={`flexRadioDefault1${i}`}>
          {text}
        </label>
      </div>
    </>
  );
}
