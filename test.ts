function test(
  type_name: string,
  ale_type: any
) {
  let passed: boolean = (typeof ale_type !== 'undefined');
  console.log(`${type_name} : ${passed}`);
}

export default test;