function Random() {
  let number = Math.random() * 100;
  return (
    <h1 style={{ backgroundColor: "blue" }}>
      Random Number : {Math.round(number)}
    </h1>
  );
}

export default Random;
