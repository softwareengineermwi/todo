"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.update = exports.updateIndices = exports.add = exports.del = void 0;
function updateIndices(tasks) {
    let updatedTasks = [];
    if (tasks !== null && tasks.length > 0) {
        for (let k = 0; k < tasks.length; k += 1) {
            const item = tasks[k];
            item.index = k + 1;
            updatedTasks.push(item);
            if (k == tasks.length - 1) {
                return updatedTasks;
            }
        }
    }
}
exports.updateIndices = updateIndices;
function add(description, tasks) {
    if (tasks !== null && tasks !== undefined && tasks.length > 0) {
        tasks.push({
            index: tasks.length,
            completed: false,
            description: description,
        });
        return tasks;
    }
    else {
        let newTasks = [];
        newTasks.push({
            index: 1,
            completed: false,
            description: description,
        });
        return newTasks;
    }
}
exports.add = add;
function update(change, position, tasks) {
    tasks[position].description = change;
    return tasks;
}
exports.update = update;
function del(tasks, position) {
    tasks.splice(position, 1);
    return tasks;
}
exports.del = del;
function clear(tasks) {
    if (tasks !== null && tasks.length > 0) {
        tasks = tasks.filter(check);
        function check(item) {
            return item.completed == false;
        }
        return tasks;
    }
}
exports.clear = clear;
//# sourceMappingURL=crud.js.map