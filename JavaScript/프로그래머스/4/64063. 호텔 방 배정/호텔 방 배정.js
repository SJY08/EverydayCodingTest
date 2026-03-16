function solution(k, room_number) {
    const used = new Map()
    const answer = room_number.map((number) => findRoom(number, used))
    return answer
}

function findRoom(room, used) { 
  if (used.get(room) == undefined) {
    used.set(room, room + 1)
    return room
  }
    
  let next = findRoom(used.get(room), used)
  used.set(room, next + 1)
  return next
}