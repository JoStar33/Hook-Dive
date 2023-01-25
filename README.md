# Hook-Dive
숨참고 훅 다이브🤿


## useEffect
  스테이트의 값이 변할때마다, 그리고 넘겨받은 props값이 변경될 때마다 자연스럽게 useEffect가 동작하게 된다. 그리고 화면이 마운트, 언마운트 되는 시점에서 실행된다는 점. useEffect뒤에 배열을 넣어줄 수가 있다. 빈배열의 경우 마운트가 되는 시점에만, 그리고 배열안에 값을 넣으면 넣은 값이 변경될때에만 useEffect가 실행되도록 할 수 있다. useEffect안에 return을 두는 경우는 unMount의 효과를 기대할 수 있다. 들 수 있는 예시는 인터벌이 있을 것이다. 인터벌을 계속 지정해둔 경우 clean을 해줄때까지 동작을 하게된다. 이런 문제를 방지하고자 unMount시에 clean을 할 수 있도록 해주는 것이다.
  
  
## useMemo

useEffect안에 리렌더링이 될때마다 특정 값을 계속해서 바꿔줘야하는 상황이 있을텐데, 만약 특정값을 계산하는게 무척 복잡하고 시간복잡도를 많이 잡아먹는 상황이 있다고 가정해보자. 이 경우 useEffect가 실행될때마다 계산이 이루어져야하기 때문에 비효율적이라는 결론에 도달한다. 특정값이 변할때에만 리렌더링이 일어나길 바란다? 이때에는 바로 useMemo를 통해 성능 최적화를 해보자. useMemo는 메모리상에 계산되어야하는 값을 저장해두고 특정 값이 바뀔때에만 실행되도록 만들 수 있다.


자 그리고 memo도 한번 알아보자. 우리가 일반적으로 생각해봤을때 자식 컴포넌트의 리렌더링이 일어난다면 부모는 당연히 리렌더링이 발생하지 않는다. 그러나 부모가 리렌더링이 발생시 자식도 리렌더링이 발생하게 되는데 특정상황에서 자식과 부모가 독립적으로 렌더가 되길 바란다면 이는 비효율적인 방식이라고 결론이 난다. 우리는 그래서 memo를 통해서 이러한 상황을 방지할 수 있다. memo를 React에서 import한 후에 자식컴포넌트를 감싸도록 한다면, 부모의 리렌더링이 일어나는 시점에서 자식의 리렌더링을 막을 수 있는 것이다.
이렇게 훌륭한 useMemo와 memo도 문제점이 하나있는데 바로 메모리를 차지한다는 점이다. 이 일련의 과정들은 메모리에 값이나 컴포넌트를 저장하기 때문에 일어날 수 있는 것이다. 따라서 반드시 useMemo, memo를 써야하는 상황에서만 사용하도록 하자.


## useCallback

## useContext

## useQuery

## useMutation

## customHook
