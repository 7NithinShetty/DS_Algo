class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 50); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return null;
  }
  values() {
    let valueArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueArr.includes(this.keyMap[i][j][1])) {
            valueArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valueArr;
  }
  keys() {
    let keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyArr.includes(this.keyMap[i][j][0])) {
            keyArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keyArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "egg");
ht.set("yellow", "water");
ht.set("tap", "water");
ht.set("jack", "fruit");
ht.set("mutton", "curry");

ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});
