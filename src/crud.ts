function updateIndices(tasks: any, callback: () => void) {
  let updatedTasks = [];
  if (tasks !== null && tasks.length > 0) {
    for (let k = 0; k < tasks.length; k += 1) {
      const item = tasks[k]
      item.index = k + 1
      updatedTasks.push(item)
      if (k == (tasks as number[]).length - 1) {
        callback()
      }
    }
  }
}

function del(tasks: number[], position: number): number[] {
  tasks.splice(position, 1)
  return tasks
}

function add(description: string, tasks: any): number[] {
  tasks.push({
    index: (tasks as number[]).length,
    completed: false,
    description: description,
  })
  return tasks
}

export { del, add, updateIndices }