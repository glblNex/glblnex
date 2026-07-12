import React from "react";

export default function SecondButton(props) {
  const dark = props.darkBg
  const base =
    "rounded-md bg-transparent py-2.5 px-6 text-sm font-medium transition-all duration-300"
  const theme = dark
    ? "text-white border border-white/25 hover:border-white hover:bg-white hover:text-ink"
    : "text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-white"
  return <button className={`${base} ${theme}`}>{props.btn_txt}</button>
}
