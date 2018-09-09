export default function(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Timeout!!!!')
    }, val * 1000)
  })
}