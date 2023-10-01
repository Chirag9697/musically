//lib
import express from 'express';
import knex from "knex";
import { Model } from 'objection';
import cors from 'cors';
import * as fromuser from './packages/users';
import * as frommusic from './packages/Music';
import * as fromauth from './packages/authentication';
import * as fromplaylist from './packages/playlists';
import * as fromlikedsongs from './packages/likedsongs';
import {development} from '../knexfile';

export const app=express();
// const development=require("../knexfile");
const connection = development;
var cors=require('cors');

Model.knex(knex(connection));

app.use(cors());
app.use(express.json());

const initial="api/v1";

app.use(`/${initial}/auth`,fromauth.router);
app.use(`/${initial}/music`,frommusic.router);
app.use(`/${initial}/playlists`,fromplaylist.router);
app.use(`/${initial}/likedsongs`,fromlikedsongs.router);


app.listen(3000,()=>{
    console.log("listening on port 3000")
})

// module.exports=app;