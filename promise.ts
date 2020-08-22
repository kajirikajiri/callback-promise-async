import { rejects } from 'assert'
import {promisify} from 'util'

const promise1 = (b:boolean) =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (b) {
        resolve('ok')
      } else {
        reject('ng')
      }
    }, 2000)
  })
}

promise1(true).then(out => {
  console.log(out)
  console.log('then')
  setTimeout(()=>{
    console.log(2)
  }, 2000)
}).catch(err => {
  console.log(err)
}).then(()=> {
  return promise1(false)
}).then(ou=>{
  console.log(ou)
}).catch(err=> {
  console.log(err)
})