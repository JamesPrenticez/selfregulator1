import { atom } from 'recoil';

export const addTaskState = atom({
    key: 'add',
    default: "",
  });

export const tasksState = atom({
    key: 'tasks',
    default: [],
  });