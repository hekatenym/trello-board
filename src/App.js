import React, { useState } from 'react';
import Board from './components/Board';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';

function App() {
    const [lists, setLists] = useState({}); // 初始化为空对象

    const addCard = (listId, cardContent) => {
        const newCard = { id: `card-${Date.now()}`, content: cardContent };
        setLists(prevLists => ({
            ...prevLists,
            [listId]: {
                ...prevLists[listId],
                cards: [...(prevLists[listId]?.cards || []), newCard], // 确保安全访问
            },
        }));
    };

    const addList = (title) => {
        const newListId = `list-${Date.now()}`;
        const newList = { id: newListId, title, cards: [] };
        setLists(prevLists => ({
            ...prevLists,
            [newListId]: newList,
        }));
    };

    const onDragEnd = (result) => {
        const { destination, source } = result;

        // 如果没有目的地，直接返回
        if (!destination) {
            return;
        }

        // 如果拖放到同一位置，直接返回
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // 如果在同一清单中拖动清单
        if (source.droppableId === destination.droppableId) {
            const listId = source.droppableId;
            const newListOrder = Array.from(Object.keys(lists));
            const [removedList] = newListOrder.splice(source.index, 1);
            newListOrder.splice(destination.index, 0, removedList);

            const newLists = {};
            newListOrder.forEach((id) => {
                newLists[id] = lists[id];
            });

            setLists(newLists);
        } else {
            // 如果在不同清单中拖动清单
            const newListOrder = Array.from(Object.keys(lists));
            const [removedList] = newListOrder.splice(source.index, 1);
            newListOrder.splice(destination.index, 0, removedList);

            const newLists = {};
            newListOrder.forEach((id) => {
                newLists[id] = lists[id];
            });

            setLists(newLists);
        }
    };

    return (
        <div>
            <button onClick={() => addList(`新清单 ${Object.keys(lists).length + 1}`)}>添加清单</button>
            <DragDropContext onDragEnd={onDragEnd}>
                <Board lists={lists} addCard={addCard} />
            </DragDropContext>
        </div>
    );
}

export default App;
