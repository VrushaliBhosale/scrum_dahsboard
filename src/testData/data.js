export const initialTasks = {
  t1:{id:'t1',name:"Task 1",description:"Task 1 description",status:'c1',priority:'High',estimation:'2 Point',labels:[]},
  t2:{id:'t2',name:"Task 2",description:"Task 2 description",status:'c1',priority:'High',estimation:'2 Point',labels:[]},
  t3:{id:'t3',name:"Task 3",description:"Task 3 description",status:'c1',priority:'High',estimation:'2 Point',labels:[]},
  t4:{id:'t4',name:"Task 4",description:"Task 4 description",status:'c2',priority:'High',estimation:'2 Point',labels:[]},
  t5:{id:'t5',name:"Task 5",description:"Task 5 description",status:'c2',priority:'High',estimation:'2 Point',labels:[]},
  t6:{id:'t6',name:"Task 6",description:"Task 6 description",status:'c2',priority:'High',estimation:'2 Point',labels:[]},
  t7:{id:'t7',name:"Task 7",description:"Task 7 description",status:'c3',priority:'High',estimation:'2 Point',labels:[]},
  t8:{id:'t8',name:"Task 8",description:"Task 8 description",status:'c3',priority:'High',estimation:'2 Point',labels:[]},
  t9:{id:'t9',name:"Task 9",description:"Task 9 description",status:'c3',priority:'High',estimation:'2 Point',labels:[]}
}

export const intialProgressColumns = [
  {id:'c1',name:'To Do',taskIds:["t1","t2","t3"]},
  {id:'c2',name:'In Progress',taskIds:["t4","t5","t6"]},
  {id:'c3',name:'Done',taskIds:["t7","t8","t9"]}
];

export const initiallabels = {
  l1:{id:'l1',name:"Bug"},
  l2:{id:'l2',name:"Feature"},
  l3:{id:'l3',name:"Improvement"}
}

export const projectName="Dev-tracker"