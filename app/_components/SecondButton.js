import React from "react";

export default function SecondButton(props) {
  return (
    <button className="rounded-sm border border-bg2 hover:bg-bg2 hover:text-highlight py-1.5 px-5 transition-all duration-500" >{props.btn_txt}</button>
  )
}