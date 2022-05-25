import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Filter.scss";

const Filter = () => {
  const [arama, setArama] = useState("");
  const [genderstate, setGenderState] = useState("");
  const [lang, setLang] = useState([]);
  const [allLangs, setAllLangs] = useState([
    "ENGLISH",
    "Turkey",
    "German",
  ])

useEffect(() => {
 console.log(genderstate);
}, [genderstate])

  const handleChange = (e) => {
    e.preventDefault();
    setArama(e.target.value);
  };

  const genderChange = (gender) => {
    setGenderState(gender);
  };

  const langChange = (e) => {
    setLang([...lang,lang=e]);
  };

  return (
    <div className="filter">
      {/* {console.log(allLangs)} */}
      <div className="row">
        <div className="col-sm-4 col-6">
          {/* <select name="categoria" onChange={langChange}>
            <option value="none" >
             languages
            </option>
            <option value="englısh">english</option>
            <option value="german">german</option>
            <option value="turkey">turkey</option>
          </select> */}
          <div
            className="button d-flex justify-content-center align-items-center dropdown-toggle border"
            id="dp1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
    
          >
            Languages
          </div>
          <ul className="dropdown-menu dd-language" aria-labelledby="dp1">
         {allLangs?.map((lang,key)=>
           <li className="dropdown-item" key={key} onClick={()=>langChange({lang})}>{lang}</li>
        )}
         {/* <li>
              <a className="dropdown-item" href="# " onClick={()=>genderChange("CHINESE")}> <img src="./img/cn.png" alt="" /> CHINESE</a>
          </li>
          <li>
              <a className="dropdown-item" href="# " onClick={()=>genderChange("GERMAN")}> <img src="./img/cn.png" alt="" /> GERMAN</a>
          </li>
          <li>
              <a className="dropdown-item" href="# " onClick={()=>genderChange("FRENCH")}> <img src="./img/cn.png" alt="" /> FRENCH</a>
          </li>
          <li>
              <a className="dropdown-item" href="# " onClick={()=>genderChange("ENGLISH")}> <img src="./img/cn.png" alt="" /> ENGLISH</a>
          </li>
          <li>
              <a className="dropdown-item" href="# " onClick={()=>genderChange("PERSIAN")}> <img src="./img/cn.png" alt="" /> PERSIAN</a>
          </li>
          <li>
              <a className="dropdown-item" href="# " onClick={()=>genderChange("KOREAN")}> <img src="./img/cn.png" alt="" /> KOREAN</a>
          </li>
          <li>
              <a className="dropdown-item" href="# " onClick={()=>genderChange("RUSSIAN")}> <img src="./img/cn.png" alt="" /> RUSSIAN</a>
          </li>
          <li>
              <a className="dropdown-item" href="# " onClick={()=>genderChange("ARABIC")}> <img src="./img/cn.png" alt="" /> ARABIC</a>
          </li>
          <li>
              <a className="dropdown-item" href="# " onClick={()=>genderChange("TURKISH")}> <img src="./img/cn.png" alt="" /> TURKISH</a>
          </li> */}

          </ul>
        </div>
        <div className="col-sm-4 col-6">
          {/* <select name="categoria" onChange={genderChange}>
            <option value="none" >
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select> */}

          <div
            className="button d-flex justify-content-center align-items-center dropdown-toggle border"
            id="dp2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            
            
          >
            Gender
          </div>
          <ul className="dropdown-menu" aria-labelledby="dp2">
            <li>
              <a className="dropdown-item" href="# " onClick={()=>genderChange("male")}>Male</a>
            </li>

            <li>
              <a className="dropdown-item" href="# " onClick={()=>genderChange("famele")}>Female</a>
            </li>
          </ul>
        </div>

        <div className="col-sm-4 col-12  mt-sm-0 mt-3">
          <div className="input-group">
            <span className="input-group-text bg-white" id="basic-addon1">
              <BsSearch />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search"
              value={arama}
              onChange={handleChange}
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
