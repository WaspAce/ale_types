let type_count: number = 0;

function test(
  type_name: string,
  ale_type: any
) {
  type_count++;
  let passed: boolean = (typeof ale_type !== 'undefined');
  console.log(`[${type_count}] : ${type_name} : ${passed}`);
}

export default test;