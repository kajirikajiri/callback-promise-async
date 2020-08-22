const asyncFunc = (b:boolean)=>{
  return new Promise((resolve, rejects)=>{
    setTimeout(()=>{
      b?resolve('ok'):rejects('ko')
    }, 2000)
  })
}

(async()=>{
  const result = await asyncFunc(true)
  console.log(result)
  console.log('2')
  // try {
    // try catchしないとErrorで落ちる
    // UnhandledPromiseRejectionWarning: ko
    // こういう書き方もできるのか
    // なるほど、await しない場合、Promiseが帰るのか面白いな
    const result2 = asyncFunc(false).catch(err=> {
      console.log(err)
      return asyncFunc(false)
    })
    await result2.catch(err=>console.log(err))
  // } catch (error) {
  //   console.log(error)
  // }
})()

// return new Promiseすれば、何でも非同期にできるんだろうと感じた
