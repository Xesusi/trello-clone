import React from 'react';
import CardComponents from './Card';
import ActionButton from './ActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
    color: #dcdcdc;
    background-color: #393E46;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`;

const List=({ title, cards, listID, index })=>{
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                >
                    <Droppable droppableId={String(listID)}>
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <h4>{title}</h4>
                                { cards.map((card, index) =>(
                                    <CardComponents
                                            key={card.id}
                                            index={index}
                                            text={card.text}
                                            id={card.id}
                                    />
                                ))}
                                <ActionButton listID={listID}/>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    );
};

export default List;
