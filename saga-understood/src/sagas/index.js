import { all,call, put, takeEvery, delay } from "redux-saga/effects";

export function* test(action) {
  const res =   yield call(getColor);
  console.log("saga called");
  yield delay(1000);
  console.log(res);
  yield put({type:'TEST2',id:res})

  return {value:res};
}

//最初に走る
export function* mySaga() {
    console.log("mysaga called");
   yield takeEvery("TEST", test);
}

function getColor() {
  return "#777777";
}

export default function* rootSaga() {
  yield  all([
      mySaga()
  ])
}
