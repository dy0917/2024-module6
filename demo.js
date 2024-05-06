// const car = {
//   state: "broken",
// };
// const updatedCar = { ...car, state: "fix", owner: "apsan" };
// console.log("car", car, updatedCar);

const list = ["a", "b", "c", "d", "e", "f"];
// console.log(list);
// list.pop();
// console.log(list[0]);
const result = [];
list.forEach((element, index, array) => {
  result.push("1" + element);
});

console.log(list.map((element) => "1" + element));
// console.log(result);

function demo(props) {
  console.log(props.author.avatarUrl);
}

const props = {
  author: {
    avatarUrl: "adsfafasdf",
    name:"name"
  },
};

demo(props)

