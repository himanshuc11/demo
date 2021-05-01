fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    let solution = data[154];
    console.log(solution);
  });
