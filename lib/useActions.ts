import {AnyAction, bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import {useMemo} from "react";

type actionsType = Array<(...args: Array<any>) => AnyAction>;

const useActions = (actions: actionsType, deps: Array<any>): Array<any> => {
    const dispatch = useDispatch();
    return useMemo(() => {
            if (Array.isArray(actions)) {
                return actions.map(a => bindActionCreators(a, dispatch));
            }
            return bindActionCreators(actions, dispatch);
        },
        deps ? [dispatch, ...deps] : deps
    );
}

export default useActions;