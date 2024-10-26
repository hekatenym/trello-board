// src/components/List.js
import React from 'react';
import Card from './Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import './styles.css'; // 引入样式
import { FaGripVertical } from 'react-icons/fa'; // 使用 react-icons 库中的拖拽图标

const List = ({ list, addCard }) => {
    return (
        <Draggable draggableId={list.id} index={0}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="list"
                >
                    <div className="list-header" {...provided.dragHandleProps}>
                        <FaGripVertical style={{ cursor: 'grab', marginRight: '8px' }} />
                        <h2>{list.title}</h2>
                    </div>
                    <Droppable droppableId={list.id}>
                        {(droppableProvided) => (
                            <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
                                {list.cards.map((card, index) => (
                                    <Card key={card.id} card={card} index={index} />
                                ))}
                                {droppableProvided.placeholder}
                                <button onClick={() => addCard(list.id, '新卡片')}>添加卡片</button>
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
};

export default List;
