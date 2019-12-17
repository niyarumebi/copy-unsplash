import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import TagList from "./TagList";
import {connect} from "react-redux";
import Action from "../../redux/action";
import {navigate} from "../../helpers/HistoryHelper";
import {makeADash} from "../../helpers/CommonHelper";

function CollectionItem(props) {

    const {
        dispatch,
        collection,
    } = props;


    return (
        <div className="Collection" onClick={() => {
            navigate(`/collections/${collection.id}/${makeADash(collection.title)}`);
        }}>
            <div className="thumbs-wrap">
                <div className="col">
                    <img src={collection.preview_photos[0].urls.small} alt=""/>
                </div>
                <div className="col2">
                    <div className="thumb">
                        <img src={collection.preview_photos[1].urls.small} alt=""/>
                    </div>
                    <div className="thumb">
                        <img src={collection.preview_photos[2].urls.small} alt=""/>
                    </div>
                </div>
            </div>

            <div className="desc-wrap">
                <div className="title">{collection.title}</div>
                <div className="summary">{collection.total_photos} photos · Curated by <Link to={collection.user.links.html}>{collection.user.name}</Link></div>
                <TagList items={collection.tags}/>
            </div>
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(CollectionItem);