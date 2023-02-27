import { createContext } from "react";
import { useReducer } from 'react';

type QuestionState = "active" | "inactive";

const Context = createContext<QuestionState>("inactive");

export default Context;
