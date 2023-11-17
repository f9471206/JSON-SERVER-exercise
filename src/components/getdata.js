import React, { useEffect, useState } from "react";
import testServce from "../services/test.service";

const Getdata = ({ allData, setAllData }) => {
  let [chSex, setChSex] = useState("all");

  let [search, setSearch] = useState("");

  let [searchResult, setSearchResult] = useState("");

  const handleChSex = (e) => {
    setChSex(e.target.value);
  };

  const handleSearch = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    testServce
      .homeSearch(search)
      .then((d) => {
        setAllData(d.data);
        setSearchResult(search);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="userDate">
      <div style={{ display: "flex" }}>
        <div className="form-check ms-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefaultall"
            defaultChecked
            value="all"
            onClick={handleChSex}
          />
          <label className="form-check-label" htmlFor="flexRadioDefaultall">
            ALL
          </label>
        </div>
        <div className="form-check ms-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefaultman"
            value="1"
            onClick={handleChSex}
          />
          <label className="form-check-label" htmlFor="flexRadioDefaultman">
            男
          </label>
        </div>
        <div className="form-check ms-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefaultwoman"
            value="0"
            onClick={handleChSex}
          />
          <label className="form-check-label" htmlFor="flexRadioDefaultwoman">
            女
          </label>
        </div>
      </div>
      <div>
        <input onChange={handleSearch} type="text" />
        <button onClick={handleSubmit} type="submit">
          搜尋
        </button>
        {searchResult && <h3>{searchResult} 的搜尋結果</h3>}
      </div>
      <h1 style={{ textAlign: "center" }}>User Data</h1>
      <div className="getfrom">
        <h4 className="username">姓名</h4>
        <h4 className="date">生日</h4>
        <h4 className="age">年齡</h4>
        <h4 className="sex">性別</h4>
        <h4 className="address">地址</h4>
      </div>
      {allData &&
        allData.map((data) => {
          if (chSex == "all") {
            return (
              <div key={data.id} className="getfrom">
                <div className="username">{data.name}</div>
                <div className="date">{data.birthday}</div>
                <div className="age">{data.Age}</div>
                <div className="sex">{data.Sex == "1" ? "男" : "女"}</div>
                <div className="address">{data.Address}</div>
              </div>
            );
          } else if (chSex == data.Sex) {
            return (
              <div key={data.id} className="getfrom">
                <div className="username">{data.name}</div>
                <div className="date">{data.birthday}</div>
                <div className="age">{data.Age}</div>
                <div className="sex">{data.Sex == "1" ? "男" : "女"}</div>
                <div className="address">{data.Address}</div>
              </div>
            );
          }
        })}
    </div>
  );
};
export default Getdata;
