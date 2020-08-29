const promiseFunc=(num:number, b:boolean)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(num)
      if(b){
        resolve()
      }else{
        reject()
      }
    }, num)
  })
}

(async()=>{
  const array=[1000,2000,3000, 6000]
  const result = await Promise.all(array.map(async(num, i)=>{
    await promiseFunc(num, true)
  }))
  console.log(result)
})()