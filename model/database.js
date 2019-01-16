function user(){
  return Promise.resolve({
    id: 1,
    username: "toto",
    password: 123
  })
}

module.exports = user