/* 리액트의 반드시 숙지해야할 규칙 7가지
1. let, const
2. 화살표 함수 () => {}
3. 구조 분해 할당 (Destructuring)
4. 스프레드 연산자 (...)
5. map, filter, find
6. async/await
7. import, export
*/

// export 키워드를 붙여야 외부 파일의 컴포넌트가 import 할 수 있음
export function MyComp() {
  const colors = ["black", "white", "blue"];
  const [first, second] = colors; // 배열의 구조분해할당
  const user = {
    name: "Steve",
    age: 25,
  };
  const { name, age } = user; // 객체의 구조분해할당
  console.log(first + " " + second);
  console.log(name + " " + age);

  function method1(x) {
    console.log("method1함수의 출력 : " + x);
  }

  return (
    <>
      <p>나의 컴포넌트</p>
      <MyCompOnly />
      <div onClick={() => method1("1000")}>여기를 클릭하시오!</div>
    </>
  );
}

// export키워드가 없으면 같은 파일에서만 사용할 수 있음
function MyCompOnly() {
  return (
    <>
      <p>내부 컴포넌트</p>
    </>
  );
}
