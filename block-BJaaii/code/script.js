class Stack {
    constructor() {
        this.Stack = [];
    }
    push(elm) {
        this.Stack.push(elm);
        return this.Stack;
    }
    peek(index = this.length - 1){
        return this.Stack;
    }
    reverse() {
        return this.Stack[index];
    }
    isEmpty() {
        return !(this.Stack.length > 0);
    }
    displayStack(){
        return this.Stack.join("");
    }
    get length(){
        return this.Stack.length;
    }
  }
// Queue//

  class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(elm) {
        this.queue.push(elm);
        return this.Stack;
    }
    dequeue(){
        this.queue.splice(0, 1);
        return this.queue;
    }
    peek(index = 0){
        return this.queue[index];
    }
    isEmpty() {
        return !(this.queue.length > 0);
    }
    displayStack(){
        return this.queue.join("");
    }
    get length(){
        return this.queue.length;
    }
  }