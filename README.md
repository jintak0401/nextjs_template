# NEXT JS 템플릿

* ### SCSS 사용시 fileName.`module.scss` 로 사용
* ### alias 추가하고 싶으면 tsconfig.json 에서 추가
* ### redux 추가 (modules 디렉토리에서 Ducks 패턴으로 사용 권장)
    * #### lib/useActions를 이용하여 actions 함수를 dispatch 함수로 변경가능
      `const [onIncrease, onDecrease, onReset] = useActions([increase, decrease, reset], []);`
    * #### 만약 useDispatch를 사용하는 경우 useCallback으로 감싸서 최적화 권장
      `const onIncrease = useCallback(() => dispatch(increase), [dispatch]);`
    * #### 새 reducer 추가시 modules 디렉토리의 index.ts의 rootReducer에도 추가해야 함