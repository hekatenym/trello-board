// src/components/Board.js
import React from 'react';
import List from './List';
import { Droppable } from 'react-beautiful-dnd';

const Board = ({ lists, addCard }) => {
    return (
        <Droppable droppableId="board" direction="horizontal">
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} style={{ display: 'flex' }}>
                    {Object.values(lists).map((list, index) => (
                        <Droppable key={list.id} droppableId={list.id}>
                            {(droppableProvided) => (
                                <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
                                    <List list={list} addCard={addCard} />
                                    {droppableProvided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default Board;
