import { EventEmitter } from 'events';

const myemitter = new EventEmitter();

const timeoutListenerFn = (arg) => {
    console.log('Timeout event! ' + arg)
}

const timeoutListenerFn2 = (arg) => {
    console.log('Timeout event2! ' + arg)
}

myemitter.on('timeout', timeoutListenerFn)

myemitter.on('timeout', timeoutListenerFn2)

myemitter.emit('timeout', 1)

myemitter.once('timeoutonce', (arg) => {
    console.log('Timeout event!!! ' + arg)
})

myemitter.emit('timeoutonce', 1)
myemitter.emit('timeoutonce', 2)

myemitter.off('timeout', timeoutListenerFn)

myemitter.emit('timeout', 2)