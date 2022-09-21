import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from "react-router-dom";


function SinglePost({ post }) {

    const dispatch = useDispatch();

    if (post) {

    return (
        <div>
        <div><img src={post.image_url}/></div>
        <div>{post.location}</div>
        <div>Comments Component: </div>
        <div>{post.caption}</div>
        <div>{post.user.username}</div>
        </div>
    )} else{
        return null
    }
}

export default SinglePost;
