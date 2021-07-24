function onChange(tasks: any, position: string): number[] {
  console.log(tasks)
  console.log(tasks[parseInt(position)])
  tasks[parseInt(position)].completed = !tasks[parseInt(position)].completed
  return tasks
}

export { onChange }