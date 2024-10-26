import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Input } from "./column";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;

export default class Task extends React.Component {
  state = { isInputting: this.props.task.content === "", inputText: "" };
  handleSubmit = () => {
    this.props.onTaskEdit(
      this.props.task.id,
      this.state.inputText,
      this.props.columnId
    );
    this.setState({ isInputting: false });
  };

  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => {
          return (
            <div
              onClick={() =>
                this.setState({
                  isInputting: true,
                  inputText: this.props.task.content,
                })
              }
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {!this.state.isInputting ? (
                <Container isDragging={snapshot.isDragging}>
                  {this.props.task.content}
                </Container>
              ) : (
                <Input
                  defaultValue={this.props.task.content}
                  onChange={(e) => this.setState({ inputText: e.target.value })}
                  autoFocus={true}
                  onKeyDown={(e) => {
                    e.key === "Enter" && this.handleSubmit();
                    e.key === "Backspace" &&
                      this.state.inputText === "" &&
                      this.handleSubmit();
                  }}
                />
              )}
            </div>
          );
        }}
      </Draggable>
    );
  }
}
