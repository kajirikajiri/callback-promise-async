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

// https://ja.javascript.info/promise-chaining#ref-220
// thenハンドラは通常、返り値を直ちに次のハンドラにわたします
// しかし、promiseを受け取った場合にはpromiseの処理を待ちます

promise1(true).then(out => {
  console.log(out)
  console.log('then')
  // プロミスを返しているわけではないので次の処理に飛ぶ
  setTimeout(()=>{
    // 四秒後にconsoleが表示される
    console.log(2)
  }, 4000)
}).catch(err => {
  // rejectされないのでcatchに入らない
  console.log(err)
}).then(()=> {
  // プロミスなので２秒後に結果が返る
  return promise1(false)
}).then(ou=>{
  // rejectされるのでthenに入らない
  console.log(ou)
}).catch(err=> {
  // rejectされたのでコンソール
  console.log(err)
})