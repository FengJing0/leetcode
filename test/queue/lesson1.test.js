import MyCircularQueue from '../../code/queue/lesson1'

test('MyCircularQueue1', () => {
  let queue = new MyCircularQueue(4)
  expect(queue.enQueue(2)).toBe(true)
  expect(queue.isFull()).toBe(false)
  expect(queue.enQueue(1)).toBe(true)
  expect(queue.Front()).toBe(2)
  expect(queue.Rear()).toBe(1)
  expect(queue.enQueue(3)).toBe(true)
  expect(queue.enQueue(4)).toBe(true)
  expect(queue.enQueue(5)).toBe(false)
})
