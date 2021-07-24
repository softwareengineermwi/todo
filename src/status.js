"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onChange = void 0;
function onChange(tasks, position) {
    console.log(tasks);
    console.log(tasks[parseInt(position)]);
    tasks[parseInt(position)].completed = !tasks[parseInt(position)].completed;
    return tasks;
}
exports.onChange = onChange;
//# sourceMappingURL=status.js.map