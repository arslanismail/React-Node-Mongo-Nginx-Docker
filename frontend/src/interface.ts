import * as React from 'react';

export interface TodoInterface{
    _id?: string,
    title: string,
    isCompleted: boolean
}

export interface todoFormInterface{
    todos: TodoInterface[],
    handleTodoCreate:(todo:TodoInterface) => void;
}

export interface TodoListInterface{
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id:string | undefined) => void;
    handleTodoRemove: (id:string | undefined) => void;
    handleTodoComplete: (id:string  | undefined) => void;
    todos: TodoInterface[]
}

export interface TodoItemInterface {
    handleTodoUpdate: (event:React.ChangeEvent<HTMLInputElement>, id:string | undefined) => void;
    handleTodoRemove: (id:string  | undefined) => void;
    handleTodoComplete: (id:string | undefined) => void;
    todo: TodoInterface
}

