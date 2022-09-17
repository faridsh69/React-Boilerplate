import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "store/reducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
