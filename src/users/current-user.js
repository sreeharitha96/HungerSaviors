import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { profileThunk } from "./user-thunks.js";

const currentUser = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [dispatch])
    return children;
}

export default currentUser;