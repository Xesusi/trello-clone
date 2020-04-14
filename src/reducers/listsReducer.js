import { CONSTANTS } from "../actions"

let listID = 2;
let cardID = 6;

const intialState = [
    {
        title: "Last Episode",
        id: 'list-${0}',
        cards: [
            {
                id: 'card-${0}',
                text: "project planning stage"
            },
            {
                id: 'card-${1}',
                text: "preparation for implementation"
            }
        ]
    },
    {
        title: "This Episode",
        id: 'list-${1}',
        cards: [
            {
                id: 'card-${2}',
                text: "project implementation"
            },
            {
                id: 'card-${3}',
                text: "learning react and redux"
            },
            {
                id: 'card-${4}',
                text: "working with a project and creating a repository on github.com"
            },
            {
                id: 'card-${5}',
                text: "storage and preparation of reactants"
            }
        ]
    }
];

const listsReducer = (state = intialState, action) =>{
    switch (action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: 'list-${listID}'
            };
            listID += 1;
            return [...state, newList];

            case CONSTANTS.ADD_CARD:
                const newCard = {
                    text: action.payload.text,
                    id: 'card-${cardID}'
                }
                cardID += 1;

                const newState = state.map(list => {
                    if(list.id === action.payload.listID){
                        return{
                            ...list,
                            cards: [...list.cards, newCard]
                        };
                    } else{
                        return list;
                    }
                });

                return newState;
                
        default:
            return state;
    }
};

export default listsReducer;