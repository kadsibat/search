import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Filter.scss";

const Filter = () => {
  const [arama, setArama] = useState("");
  const [genderstate, setGenderState] = useState("");
  const [lang, setLang] = useState([]);
  const [ortak, setOrtak] = useState([])
  const [allLangs, setAllLangs] = useState([
    "CHINESE",
    "GERMAN",
    "FRENCH",
    "ENGLISH",
    "PERSIAN",
    "KOREAN",
    "RUSSIAN",
    "ARABIC",
    "TURKEY",
  ])
 console.log(lang);
useEffect(() => {
 console.log(genderstate);
}, [genderstate])

  const handleChange = (e) => {
    e.preventDefault();
    setArama(e.target.value);
  };

  const genderChange = (gender) => {
    setGenderState(gender);
    setOrtak([...ortak,gender])

  };

  const langChange = (e) => {
    setLang([...lang,e]);
    setOrtak([...ortak,e])
  };

  return (
    <div className="filter">
      {console.log(allLangs)}
      {console.log(ortak)}
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
