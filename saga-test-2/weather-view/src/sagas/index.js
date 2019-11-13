import { all, call, put, takeEvery, delay } from "redux-saga/effects";

export function* test(action) {
  console.log("saga called");
  const res = yield call(getRequest);
  console.log(res);
  if (res) {
    console.log(res["colors"][0].value);
    yield put({ type: "TEST2", id: res["colors"][0].value });
  } else {
    yield put({ type: "TEST2", id: "#112233" });
  }
}

function getRequest() {
  console.log("getRequest Called")
  return fetch('https://api.noopschallenge.com/hexbot',{
    method:'get',
  })
  .then((res)=>{
    console.log("retch return start")
    console.log("*"+res+"*");
    var rr=res.json()
    var rrr = Promise.resolve(rr);
    console.log("**"+rrr+"**");
    return (Promise.resolve(rr));
  })
  .catch(error=>({error}));
}

//最初に走る
export function* mySaga() {
  console.log("mysaga called");
  yield takeEvery("TEST", test);
}

export default function* rootSaga() {
  yield all([mySaga()]);
}
