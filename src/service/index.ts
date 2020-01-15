export async function fetch() {
  const todos = [{
    id: 1,
    text: 1111,
    completed: false,
  }]
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      return resolve(todos)
    },1000);
  })
}


export default {};
