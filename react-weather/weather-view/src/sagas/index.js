import { all, call, put, takeEvery, delay } from "redux-saga/effects";
const request = require("request");

export function* test(action) {
  console.log("saga called");
  const res = yield call(getRequest);
  if (res) {
    console.log(res["colors"][0].value);
    yield put({ type: "TEST2", id: res["colors"][0].value });
  } else {
    yield put({ type: "TEST2", id: "#112233" });
  }
}

//最初に走る
export function* mySaga() {
  console.log("mysaga called");
  yield takeEvery("TEST", test);
}

function getRequest() {
  return fetch('https://api.noopschallenge.com/hexbot',{
    method:'get',
  })
  .then(res=>(res.json()))
  .catch(error=>({error}));
}

export default function* rootSaga() {
  yield all([mySaga()]);
}
