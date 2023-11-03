import React from "react";
import Link from "next/link";
import style from "@/app/components/Sheets/sheets.module.scss";

const Sheet = () => {
  return (
    <div className={style.sheet}>
      <div className="container">
        <h1>Genes associated with lung carcinoma</h1>
        <div className={style.sheetWrapper}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          asperiores, repellat quam id eum, eaque commodi animi placeat ex
          quibusdam vitae? Debitis possimus adipisci tempore facere dicta
          laborum esse eum?
        </div>
      </div>
    </div>
  );
};

export default Sheet;
