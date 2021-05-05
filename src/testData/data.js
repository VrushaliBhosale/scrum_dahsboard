export const allTasks = {
  t1:{id:'t1',name:"Task 1",description:"Task 1 description",status:'c1'},
  t2:{id:'t2',name:"Task 2",description:"Task 2 description",status:'c1'},
  t3:{id:'t3',name:"Task 3",description:"Task 3 description",status:'c1'},
  t4:{id:'t4',name:"Task 4",description:"Task 4 description",status:'c2'},
  t5:{id:'t5',name:"Task 5",description:"Task 5 description",status:'c2'},
  t6:{id:'t6',name:"Task 6",description:"Task 6 description",status:'c3'},
  t7:{id:'t7',name:"Task 7",description:"Task 7 description",status:'c3'}
}

export const progressColumns = [
  {id:'c1',name:'To Do',taskIds:["t1","t2","t3"]},
  {id:'c2',name:'In Progress',taskIds:["t4","t5","t6"]},
  {id:'c3',name:'Done',taskIds:["t7"]}];