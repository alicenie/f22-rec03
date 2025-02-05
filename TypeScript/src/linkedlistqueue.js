// do not look at this code
// test this assuming only the interface

'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.newLinkedListIntQueue = void 0
function newLinkedListIntQueue () {
  let head = null
  return {
    clear: function () {
      head = null
    },
    dequeue: function () {
      if (head === null) {
        return null
      } else {
        const value = head.head
        head = head.tail
        return value
      }
    },
    enqueue: function (value) {
      const oldHead = head
      head = { head: value, tail: oldHead }
      return true
    },
    isEmpty: function () {
      return head == null
    },
    peek: function () {
      if (head === null) {
        return null
      } else {
        return head.head
      }
    },
    size: function () {
      let size = 0
      let x = head
      while (x !== null) {
        x = x.tail
        size++
      }
      return size
    }
  }
}
exports.newLinkedListIntQueue = newLinkedListIntQueue
