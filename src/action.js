export function Showselected(id) {
  return {
    type: 'selectedbook',
    id
  }
}
;

export function AddTask(value) {
  console.log(value);

  return {
    type: 'addbook',
    task: value.task,
    date: value.date,
    allotedto:value.allotedto
  }
}
;


export function DeleteBook(id) {
  return {
    type: 'deletebook',
    id
  }
}
;

export function RemoveBook(id) {
  return {
    type: 'removebook',
    id
  }
}
;