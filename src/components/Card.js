 import React from 'react';
 import Card from '@material-ui/core/Card';
 import Typography from '@material-ui/core/Typography';
 import CardContent from '@material-ui/core/CardContent';
 import { Draggable } from 'react-beautiful-dnd';
 import styled from 'styled-components';

const CardContainer = styled.div`
    margin-bottom: 10px;
`;

 const CardComponents=({ text, id, index })=>{
     return(
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <CardContainer ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
                        <Card style={{backgroundColor: '#EEEEEE', color: '#393E46'}}>
                            <CardContent>
                                <Typography gutterBottom>{text}</Typography>
                            </CardContent>
                        </Card>
                    </CardContainer>
            )}
        </Draggable>
     );
 };

 export default CardComponents;
