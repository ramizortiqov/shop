import React, { useState } from "react";
import Links from "./Links";
export default function Catalog({categories}) {
  let [ctlg, setCtlg] = useState(false);
  function setfalse(){
    setCtlg(ctlg = false)
  }
  return (
    <div>
      <div
        onClick={() => setCtlg((ctlg = !ctlg))}
        className={`header-catalog ${ctlg && "ctlg"}`}
      >
        Каталог
      </div>
      <Links setfalse= {setfalse} ctlg={ctlg} categories={categories}/>
    </div>
  );
}
