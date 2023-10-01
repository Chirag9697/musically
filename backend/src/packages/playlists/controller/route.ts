import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
//local
// import ytdl from 'ytdl';
import * as fromplaylist from '../../playlists';
import * as frommusic from '../../Music';
import * as fromusers from '../../users';
// import { checktoken } from '../../../utils/check-token';
import {checktoken} from '../../../utils/check-token';
const app = express();
export const router = express.Router()

router.get('/users/',checktoken,async(req,res)=>{
    console.log("helo");
    // console.log(req.user);
    try{
        const{email}=req.user;
        // console.log(email);
        const getuserid=await fromusers.get_one2(email);
        console.log(getuserid['id']);
        const allplaylist=await fromplaylist.get_all(getuserid['id']);
        console.log("allplaylist",allplaylist);
        res.send(allplaylist);
    } catch(error){
        res.send({error:error});
    } 
})
router.get('/:playlistid',async(req,res)=>{
    try{
        const{playlistid}=req.params;
        const allsongsofplaylist=await frommusic.get_onebyplaylistid(playlistid);
        res.send(allsongsofplaylist);
    } catch(error){
        res.send({error:error});
    } 
})

router.delete('/:id',checktoken,async(req,res)=>{
    try{
        const{id}=req.params;
        // const deletesongs=await frommusic.deleterecordbyplaylistod(id);
        
        const allplaylist=await fromplaylist.deleterecord(id);
        console.log("🚀 ~ file: route.ts:50 ~ router.delete ~ allplaylist:", allplaylist)
        
        res.send({success:"deleting successfully"});
    } catch(error){
        res.send({error:error});
    } 
})

router.post('/',checktoken,async(req,res)=>{
    console.log("afsdfas")
    try{
        const{nameofplaylist}=req.body
        console.log(req.body);
        const{email}=req.user;
        console.log(email);
        const getuserid=await fromusers.get_one2(email);
        // console.log(getuserid['id']);
        const data={nameofplaylist:nameofplaylist,userid:getuserid['id']};
        const allplaylist=await fromplaylist.create(data);
        res.send(allplaylist);
    } catch(error){
        res.send({error:error});
    } 
})


