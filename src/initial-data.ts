const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Shop1" },
    "task-2": { id: "task-2", content: "Shop2" },
    "task-3": { id: "task-3", content: "Shop3" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Shopping List",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "Food At Home List",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Shared Shopping List",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
