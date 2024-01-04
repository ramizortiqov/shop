import React from 'react'
import {Link } from "react-router-dom";
export default function Links({ctlg, categories, setfalse}) {
  return (
    <>
      {/* <Routes> */}
        {ctlg && (
          <ul className="ctlg-categories">
            {categories.map((el) => (
                <Link key={el.id} to={`/${el.category}`}>
                 <li onClick={setfalse}>{el.icon} {el.name}</li>
                </Link>
            ))}
          </ul>
        )}
        
          {/* <Route path="/smart" element={<Telefony />} /> */}
        {/* </Routes> */}
    </>
  )
}
