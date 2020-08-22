const callback = (i) =>{
  setTimeout(()=>{
    console.log(i)
  }, 3000)
}

const run = (callback) => {
  setTimeout(() =>{
    console.log(1)
    callback(2)
  }, 3000)
}

run(callback)