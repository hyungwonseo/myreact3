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
  return (
    <>
      <p>나의 컴포넌트</p>
      <MyCompOnly />
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
