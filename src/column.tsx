import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./task.tsx";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 12px;
  width: 220px

  display: flex;
  flex-direction:column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: ;
`;

const AddItem = styled.div`
  width: 30px;
  height: 25px;
  padding-bottom: 5px;
  background-color: green;
  border-width: 0px;
  border-radius: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  margin: 8px;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 12px;
`;

export default class Column extends React.Component {
  state = { inputText: "" };
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps}>
            <Container>
              <Title {...provided.dragHandleProps}>
                {this.props.column.title}
              </Title>
              <Droppable droppableId={this.props.column.id} type="task">
                {(provided, snapshot) => {
                  return (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      <TaskList isDraggingOver={snapshot.isDraggingOver}>
                        {this.props.tasks.map((task, index) => (
                          <Task
                            key={task.id}
                            task={task}
                            index={index}
                            onTaskEdit={this.props.onTaskEdit}
                            columnId={this.props.column.id}
                          />
                        ))}
                        {provided.placeholder}
                      </TaskList>
                    </div>
                  );
                }}
              </Droppable>
              <AddItem
                onClick={() => this.props.handleClick(this.props.column.id)}
              >
                <div>{"+"}</div>
              </AddItem>
            </Container>
          </div>
        )}
      </Draggable>
    );
  }
}
