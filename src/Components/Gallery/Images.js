
let srcs = [];

const imageSources = () => {
  for (let i = 1; i <= 12; i+=1) {
    let source = {src: i + '.jpg'};
    srcs.push(source);
  }
  return srcs;
};

var srcArray = imageSources();
console.log(srcArray);

export default srcArray;