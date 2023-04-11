import React, { useCallback } from 'react';
import Counter from './Counter';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from '../modules/counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  //   const number = useSelector((state) => state.counter.number);
  //   const dispatch = useDispatch();
  //   const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  //   const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  //   const onIncrease = useCallback(() => increaseAsync(), []);
  //   const onDecrease = useCallback(() => decreaseAsync(), []);
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increaseAsync,
    decreaseAsync,
  },
)(CounterContainer);
