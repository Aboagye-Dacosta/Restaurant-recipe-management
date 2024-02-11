/* eslint-disable react/prop-types */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { BASE_URL } from "./loadData";

const RecipeContext = createContext();

const initState = {
  recipeId: "",
  loading: true,
  data: {},
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
        recipeId: action.payload,
      };
    case "ready":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "error":
      return {
        ...state,
        error: true,
      };
    default:
      throw new Error("Oops could not load recipe");
  }
};

const useRecipeContext = (recipeId) => {
  const actionTypes = Object.freeze({
    loading: "loading",
    ready: "ready",
    error: "error",
  });

  const [{ data, error, loading }, dispatch] = useReducer(reducer, initState);

  const loadRecipe = useCallback(async () => {
    try {
      dispatch({ type: "loading", payload: recipeId });
      const response = await fetch(`${BASE_URL}/${recipeId}`);

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "ready", payload: data });
        return;
      }

      dispatch("error");
    } catch (error) {
      throw new Error("Sorry something happened while loading recipe");
    }
  }, [recipeId]);

  const reload = () => {
    dispatch({ type: "loading", payload: recipeId });
  };

  useEffect(() => {
    if (recipeId && recipeId != data?.id) {
      loadRecipe();
    }
  }, [data.id, loadRecipe, loading, recipeId]);

  return {
    data,
    error,
    loading,
    dispatch,
    reload,
    actionTypes,
  };
};

const RecipeProvider = ({ children }) => {
  return (
    <RecipeContext.Provider value={useRecipeContext}>
      {children}
    </RecipeContext.Provider>
  );
};

const useRecipe = (recipeId) => {
  const context = useContext(RecipeContext);
  return context(recipeId);
};

export { RecipeProvider, useRecipe };
