import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "hello world", completed: false }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload, completed: false }
            state.todos.push(todo);
        },
        // state abhi ki state ko represent karta hai
        // action payload ko represent karta hai jab koi values chahiye hoti hai to action.payload use karte hain
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text, completed } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
                todo.completed = completed;
            }
        }

    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
// is file ko import karna padega store.js me
// aur store.js me reducer ko add karna padega