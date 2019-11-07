class node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}
class Queue {
	constructor(){
		this.first = null
		this.last = null
		this.length = 0
	}

	peek(){
		return this.first
	}
	enqueue(value){
		const newNode = new node(value)
		if(this.length === 0){
			this.first = newNode
			this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}
		this.length++
	}
	dequeue(){
		if(this.length === 0){
			console.log('Queue is empty!')
		} else {
			if(this.length === 1){
				const holdPointer = this.first
				this.first = null
				this.last = null
				console.log(holdPointer.value+' is dequeued from the queue')
			}
			else {
				const holdPointer = this.first
				this.first = this.first.next
				console.log(holdPointer.value+' is dequeued from the queue')
			}
			this.length--
		}
	}
	isEmpty() {
		if(this.length === 0)
		return 'Yes, The Queue is empty'
	}
}
const myQueue = new Queue()
console.log(myQueue.isEmpty())
myQueue.enqueue('Alan')
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')
console.log(myQueue)
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
console.log(myQueue)
console.log(myQueue.peek())
console.log('Length of Queue is: ' + myQueue.length)
