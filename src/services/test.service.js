import axios from "axios";

const API_URL = "http://localhost:8080/userform";

class TestServce {
  home() {
    return axios.get(API_URL);
  }

  homePost(name, birthday, Age, Sex, Address) {
    return axios.post(API_URL, {
      name: name,
      birthday: birthday,
      Age: Age,
      Sex: Sex,
      Address: Address,
    });
  }

  homeSearch(search) {
    return axios.get(`${API_URL}?q=${search}`);
  }
}

const testServce = new TestServce();

export default testServce;
