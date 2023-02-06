export function filterBy(arr, filter) {
    if (filter !== "all") {
        return arr.filter((todo) =>
            (filter === "done" && todo.completed) ||
            (filter === "undone" && !todo.completed)
        );
    } else {
        return arr
    }
}