class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    item && this.stack.push(item);
  }
  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    }
  }
  isEmpty() {
    return this.stack.length == 0;
  }
  getLength() {
    return this.stack.length;
  }
}