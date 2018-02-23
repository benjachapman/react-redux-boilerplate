import { createSelector } from 'reselect';

const hpDataSelector = state => state.example;

const resultSelector = createSelector(
  hpDataSelector,
  payload => payload.get('result')
);

export const dataSelector = state => ({
  result: resultSelector(state),
});
