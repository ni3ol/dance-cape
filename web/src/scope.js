class Person {
  constructor(name) {
    this.name = name;
  }

  bar() {
    console.log(this.name);
  }
}


function global() {
  const nicol = new Person('nicol')

  const l = () => { nicol.bar() }

  const f = l[0]
  f();
}
