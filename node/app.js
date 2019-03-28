console.log(process.env.ENV_MODE);
console.log(process.platform)
console.log('start');
process.nextTick(() => {
  console.log('nextTick callback');
});
console.log('scheduled');

