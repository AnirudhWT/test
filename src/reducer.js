const start_State = [
  {
   task: 'Maze Runner',
    date: '10/31/2019',
    allotedto: 'James Dashner',
    id: 1,
    flag: false
  },
  {
   task: 'Blood and Sand',
    date: '11/2/2019',
    allotedto: 'Elizabeth Hunter',
    id: 2,
    flag: false
  }, {
   task: 'Brave new World',
    date: '11/1/2019',
    allotedto: 'Aldous Huxley',
    id: 3,
    flag: false
  },
  {
   task: 'Harry Potter:The goblet of fire',
    date: '11/11/2019',
    allotedto: 'J.K Rowlings',
    id: 4,
    flag: false
  }, {
   task: 'Panchtantra',
    date: '11/1/2019',
    allotedto: 'Munshi Premchand',
    id: 5,
    flag: false
  }, {
   task: 'My Experiments with truth',
    date: '11/3/2019',
    allotedto: 'Mahatma Gandhi',
    id: 6,
    flag: false
  }
];

export default function red(state = start_State, action) {
  switch (action.type) {
    case 'selectedbook':
      let rawdata = [...state];
      rawdata.map((element, index) => {

        if (element.id === action.id) {
          console.log(element.flag);
          element.flag = true;
          console.log(element.flag);
        }
      })
      return rawdata;

    case 'addbook':
      console.log(action);
      return [...state, {
       task: action.task,
        date: action.date,
        allotedto: action.allotedto,
        id: parseInt(Math.random() * 100),
        flag: false
      }]

    case 'deletebook':
      let filtered = [...state];
      filtered = filtered.filter(function(value) {
        return value.id != action.id;
      });
      return filtered;

    case 'removebook':
      let rawdata1 = [...state];
      rawdata1.map((element, index) => {

        if (element.id === action.id) {
          console.log(element.flag);
          element.flag = false;
          console.log(element.flag);
        }
      })
      return rawdata1;

    default:
      return state;
  }


}
