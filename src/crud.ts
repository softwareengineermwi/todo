function updateIndices(tasks: any): number[] {
  let updatedTasks = [];
  if (tasks !== null && tasks.length > 0) {
    for (let k = 0; k < tasks.length; k += 1) {
      const item = tasks[k]
      item.index = k + 1
      updatedTasks.push(item)
      if (k == (tasks as number[]).length - 1) {
        return updatedTasks
      }
    }
  }
}

function add(description: string, tasks: any): number[] {
  if (tasks !== null && tasks !== undefined && tasks.length > 0) {
    tasks.push({
      index: (tasks as number[]).length,
      completed: false,
      description: description,
    })
    return tasks
  } else {
    let newTasks = []
    newTasks.push({
      index: 1,
      completed: false,
      description: description,
    })

    return newTasks
  }
}

function update(change: string, position: number, tasks: any): number[] {
  tasks[position].description = change
  return tasks
}

function del(tasks: number[], position: number): number[] {
  tasks.splice(position, 1)
  return tasks
}

function clear(tasks: number[]): number[] {
  if (tasks !== null && tasks.length > 0) {
    tasks = tasks.filter(check)
    function check(item: any) {
      return item.completed == false
    }
    return tasks
  }
}

export { del, add, updateIndices, update, clear }