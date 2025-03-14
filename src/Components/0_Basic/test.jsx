let x = 0;
function setX(value) {
  console.log("setX");
  x = value;
}

export function useState(init) {
  x = init;
  const array = [x, setX];
  return array;
}

const [count, setCount] = useState(0);
console.log(count);
setCount(10);
console.log(count);
