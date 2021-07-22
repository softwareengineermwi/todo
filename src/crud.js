"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateIndices = exports.add = exports.del = void 0;
function updateIndices(tasks, callback) {
    let updatedTasks = [];
    if (tasks !== null && tasks.length > 0) {
        for (let k = 0; k < tasks.length; k += 1) {
            const item = tasks[k];
            item.index = k + 1;
            updatedTasks.push(item);
            if (k == tasks.length - 1) {
                callback();
            }
        }
    }
}
exports.updateIndices = updateIndices;
function del(tasks, position) {
    tasks.splice(position, 1);
    return tasks;
}
exports.del = del;
function add(description, tasks) {
    tasks.push({
        index: tasks.length,
        completed: false,
        description: description,
    });
    return tasks;
}
exports.add = add;
//# sourceMappingURL=crud.js.map