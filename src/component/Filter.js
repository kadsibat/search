import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Filter.scss";

// const langs = [
//   {lang:"English", idCont:false},
//   {lang:"Turkish", idCont:false},
//   {lang:"Spanish", idCont:false},
//   {lang:"German", idCont:false},
// ]

const Filter = () => {
  const [arama, setArama] = useState("");
  const [genderstate, setGenderState] = useState([
    { id: 1, gender: "Male", isSelect: false },
    { id: 2, gender: "Female", isSelect: false },
  ]);
  const [state, setState] = useState([
    { id: 1, lang: "English", isSelect: false, img: "" },
    { id: 2, lang: "Spanish", isSelect: false, img: "" },
    { id: 3, lang: "Turkish", isSelect: false, img: "" },
    { id: 4, lang: "German", isSelect: false, img: "" },
    { id: 5, lang: "Italian", isSelect: false, img: "" },
  ]);

  const [ortak,setOrtak] = useState()

  useEffect(() => {
    const controlLang = state.filter((e) => e.isSelect === true)
    const controlGender = genderstate.filter((e) => e.isSelect === true)
    setOrtak([...controlLang,...controlGender,{search : arama}])
  }, [state,genderstate,arama]);
  console.log(ortak);
  const handleChange = (e) => {
    e.preventDefault();
    setArama(e.target.value);
  };

  const genderChange = (toogleId) => {
    setGenderState(
      genderstate.map((gender) =>
        gender.id === toogleId
          ? { ...gender, isSelect: !gender.isSelect }
          : gender
      )
    );
  };

  const langChange = (toogleId) => {
    setState(
      state.map((lang) =>
        lang.id === toogleId ? { ...lang, isSelect: !lang.isSelect } : lang
      )
    );
    console.log(state);
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
          <ol className="dropdown-menu dd-language" aria-labelledby="dp1">
            {state?.map((item, index) => (
              <li
                className={`${item.isSelect ? "ok" : "no"} dropdown-item`}
                key={index}
                onClick={() => langChange(item.id)}
              >
                {item.lang}
              </li>
            ))}
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
          </ol>
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
            {genderstate?.map((item, index) => {
              return (
                <li
                  className={`${item.isSelect ? "ok" : "no"} dropdown-item`}
                  key={index}
                  onClick={() => genderChange(item.id)}
                >
                  {item.gender}
                </li>
              );
            })}
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
      {state
        ?.filter((item) => item.isSelect === true)
        .map((e) => {
          return <h4>{e.lang}</h4>;
        })}

      {genderstate
        ?.filter((item) => item.isSelect === true)
        .map((e) => {
          return <h4>{e.gender}</h4>;
        })}
    </div>
  );
};

export default Filter;
