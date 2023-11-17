import React, { useState } from "react";
import testServce from "../services/test.service";

const PostData = ({ allData, setAllData }) => {
  let [postName, setPosetName] = useState("");

  let [date, setDate] = useState("");

  let [age, setAge] = useState("");

  let [sex, setSex] = useState("1");

  let [address, setAddress] = useState("");

  const handleName = (e) => {
    // console.log(e.target.value);
    setPosetName(e.target.value);
  };

  const handleDate = (e) => {
    let userDate = new Date(e.target.value);
    setDate(e.target.value);
    const today = new Date();
    setAge(today.getFullYear() - userDate.getFullYear());
  };

  const handelSex = (e) => {
    // console.log(e.target.value);
    setSex(e.target.value);
  };

  const handleAddress = (e) => {
    // console.log(e.target.value);
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postName || !address || !age) {
      alert("請輸入資料");
      return;
    }
    testServce.homePost(postName, date, age, sex, address).then((d) => {
      //新資料加入allData
      setAllData([...allData, d.data]);
    });
    setPosetName("");
    setDate("");
    setAge("");
    setSex("1");
    setAddress("");
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            姓名
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleName}
            required
            value={postName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            生日
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleDate}
            required
            value={date}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            年齡
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            disabled
            value={age}
          />
        </div>

        {/* 性別 */}
        <div className="py-3">
          <label htmlFor="form-check">性別</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked
              onChange={handelSex}
              value="1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              男
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={handelSex}
              value="0"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              女
            </label>
          </div>
        </div>
        {/* 性別 */}

        {/* 地址 */}
        <div className="mb-3">
          <label htmlFor="exampleInputaddress" className="form-label">
            地址
          </label>
          <input
            type="address"
            className="form-control"
            id="exampleInputaddress"
            aria-describedby="emailHelp"
            onChange={handleAddress}
            required
            value={address}
          />
        </div>
        {/* 地址 */}

        <button
          onClick={() => {
            setPosetName("");
            setDate("");
            setAddress("");
            setAge("");
          }}
          type="reset"
          className="btn btn-secondary m-1"
        >
          Reset
        </button>
        <button
          type="submit"
          className="btn btn-primary m-1"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostData;
