const start = {
  draggableId: "task-1",
  type: "TYPE",
  source: {
    droppableID: "column-1",
    index: 0,
  },
};

const update = {
  ...start,
  destination: {
    droppableID: "column-1",
    index: 0,
  },
};

const result = {
  ...update,
  reason: "DROP",
};
