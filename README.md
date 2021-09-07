# NEXT JS 템플릿

* ### SCSS 사용시 fileName.`module.scss` 로 사용
* ### alias 추가하고 싶으면 tsconfig.json 에서 추가
* ### redux 추가 (modules 디렉토리에서 Ducks 패턴으로 사용 권장)
    * #### modules 디렉토리에서 Ducks패턴으로 actionTypes, actions, reducer 정의
    * #### containers 디렉토리에서 dispatch함수를 생성하여 각 component에 props로 넘겨주기
    * #### lib/useActions를 이용하여 actions 함수를 dispatch 함수로 변경가능
      ```typescript
      // modules/counter.ts 
      const increase = ():AnyAction => ({type: INCREASE});
      
      // containers/CounterContainer.tsx
      const [onIncrease, onDecrease, onReset] = useActions([increase, decrease, reset], []);
      ```
    * #### 만약 useDispatch를 사용하는 경우 useCallback으로 감싸서 최적화 권장
      ```typescript
      // modules/counter.ts
      const increase = {type: INCREASE};
      
      // containers/CounterContainer.tsx
      const dispatch = useDispatch();
      const onIncrease = useCallback(() => dispatch(increase), [dispatch]);
      ```
      혹은
      ```typescript
      // modules/counter.ts
      const increase = ():AnyAction => ({type: INCREASE});
      
      // containers/CounterContainer.tsx
      const dispatch = useDispatch();
      const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
      ```
    * #### 새 reducer 추가시 modules 디렉토리의 index.ts의 rootReducer에도 추가해야 함
      ```typescript
      // modules/index.ts
      const rootReducer = combineReducers({
        counter,
        todos,
        newReducer, // 새로 추가
      });
      ```
    * #### useSelector사용시 `React.memo(Container)`를 하여 부모컴포는트가 리렌더링 될 때 props가 변경 되지 않으면 리렌더링을 방지해주기
      ```typescript
      // containers/CounterContainer.tsx
      export default React.memo(CounterContainer);
      ```
    * #### 자세한 내용은 [modules/counter.ts](https://github.com/Team-Juggernaut/nextjs_template/blob/main/modules/counter.ts) 참고