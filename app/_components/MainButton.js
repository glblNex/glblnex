import React from "react";

export default function MainButton(props) {
  return (
    <button className="rounded-sm border border-highlight hover:bg-highlight py-1.5 px-5 transition-all duration-500" >{props.btn_txt}</button>
  )
}