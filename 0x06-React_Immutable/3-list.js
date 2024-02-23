import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}
export function addElementToList(list, string) {
  return list.push(string);
}
