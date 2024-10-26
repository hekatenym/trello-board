// src/components/Card.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './styles.css'; // 引入样式

const Card = ({ card, index }) => {
    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="card"
                >
                    {card.content}
                </div>
            )}
        </Draggable>
    );
};

export default Card;
