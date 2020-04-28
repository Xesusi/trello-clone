import React from 'react';
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

class ActionButton extends React.Component{
    state = {
        formOpen: false,
        text: ''
    };

    openForm = () =>{
        this.setState({
            formOpen: true
        });
    };

    closeForm = e => {
        this.setState({
            formOpen: false
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const  { dispatch } = this.props;
        const { text } = this.state

        if(text) {
            dispatch(addList(text));
        }

        return;
    };

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if(text) {
            dispatch(addCard(listID, text));
        }

        return;
    }

    renderActionButton = () =>{
        const { list } = this.props;

        const buttonText = list ? 'Добавить новый список' : 'Добавить новую задачу'
        const buttonTextColor = '#dcdcdc'
        const buttonTextBackground = '#393E46'

        return(
            <div
                onClick={this.openForm}
                style={{
                    ...styles.openFormButtonGroup,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        );
    };

    renderForm = () =>{
        const { list } = this.props;

        const placeholder = list
        ? 'Введите название списка...'
        : 'Введите текст задачи...';

        const buttonTitle = list ? 'Добавить список' : 'Добавить задачу';

        return (
            <div>
                <Card style={{
                    overflow: 'visible',
                    minHeight: 80,
                    minWidth: 272,
                    padding: '6px 8px 2px'
                }}>
                    <Textarea
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{
                            resize: 'none',
                            width: '100%',
                            outline: 'none',
                            border: 'none'
                        }}
                    />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button
                    onMouseDown={list ? this.handleAddList : this.handleAddCard}
                    variant='contained'
                    style={{ color: 'white', backgroundColor: '#5aac44'}}
                    >
                        {buttonTitle} {' '}
                    </Button>
                    <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>{}
                </div>
            </div>
        );
    };

    render() {
        return this.state.formOpen ? this.renderForm(): this.renderActionButton();
    }
}

const styles = {
    openFormButtonGroup:{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 6,
        display: 'flex',
        alignItems: 'center'
    }
};

export default connect()(ActionButton);