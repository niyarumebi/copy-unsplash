//action을 받아서 type을 보고 그에 맞는 작업을 해서 store에 있는 state에 있는 state에 action을 적용한 새로운 state를 업데이트한다.
//리듀서는 순수함수이다.
// 순수 함수? 100번실행하면 100번 같은 리절트나오는것( 비동기는 안그럴때있잖아)

//리듀서는 기존의 state와 action을 인자로 받는다.

import Action from "./action";

// const action = {
//     type: Action.Types.OPEN_SIDEBAR,
//     payload: true
// }

const initialState = {
    isLoggedIn : false,
    openSidebar: false,
    selectedPhoto: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        //'action_open_sidebar'하면 오류나기 쉬우니까 여기서도 장점
        default: return state; // return은 뭐 안써주면 undefiend > 그러면 스테이트가 다 날라감
        case Action.Types.OPEN_SIDEBAR: {
            return {
                ...state, // 기존의스테이트도 넣어줘야한다 (아니면지워져서_
                openSidebar : action.payload, //앞의 키값은 아무거나 새로 지어주면됨
            }
        }
        case Action.Types.SET_SELECTED_PHOTO:{
            return{
                ...state,
                selectedPhoto: action.payload
            }
        }
    }
};

export default reducer;