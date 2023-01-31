export function filterBy(arr, filter) {
    if (filter !== "all") {
        return arr.filter((todo) =>
            (filter === "done" && todo.isCompleted) ||
            (filter === "undone" && !todo.isCompleted)
        );
    } else {
        return arr
    }
}