/* BASIC STUFF */
import React, {useReducer, useContext} from 'react';
import {AuthContext} from "../utils/AuthFront/context";
import {PostContext} from "../utils/postContext";
import {PostReducer} from "../utils/postsReducer";
import {useStyles} from '../styles/styles';

/* COMPONENTS & STYLES */
import '../styles/App.css';
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import CreatePost from "../components/CreatePost";
import ProfileInfoFeed from "../components/ProfileInfoFeed";
import FeedPosts from "../components/FeedPosts";
import PeopleWhoMaybeYouKnow from "../components/PeopleWhoMaybeYouKnow";


function FeedPage() {

    const classes = useStyles();

    const [postState, postDispatch] = PostReducer();


    return (
        <PostContext.Provider value={{postState, postDispatch}}>
            <AuthContext.Consumer>
            {props =>
                <Container className={classes.rootFeed} maxWidth={'xl'}>
                    <div className={classes.columnFeedSides}>
                        <ProfileInfoFeed/>
                    </div>
                    <div className={classes.columnFeedCenter}>
                        <Grid container spacing={6}>
                            <CreatePost/>
                        </Grid>
                        <Grid container spacing={6}>
                            <FeedPosts/>
                        </Grid>
                    </div>

                    <div className={classes.columnFeedSides}>
                        <PeopleWhoMaybeYouKnow/>
                    </div>
                </Container>
            }
            </AuthContext.Consumer>
        </PostContext.Provider>
)
}


export default FeedPage;

