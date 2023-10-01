//lib
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import { checktoken } from '../../../utils/check-token';
//local
// import ytdl from 'ytdl';
import ytdl from 'ytdl-core';
import youtubesearchapi from 'youtube-search-api'
import * as fromusers from '../../users';
import * as fromauth from '../../authentication';
import * as frommusic from '../../Music';
import { deepEqual } from 'assert';
dotenv.config();

const app = express();
export const router = express.Router()

router.post('/',async(req,res)=>{
    try{
        const{playlistid,videoid,nameofmusic}=req.body;

        const data={playlistid:playlistid,videoid:videoid,nameofmusic:nameofmusic};
        console.log(data);
        const addtoplaylist=await frommusic.create(data);
        res.send({success:"successfully added"});
    }catch(error){
        res.send({error:error});
    }
})

router.get('/:videoid',async(req,res)=>{
    const{videoid}=req.params;
    const videourl = `https://www.youtube.com/watch?v=${videoid}`;
    try {
        res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
        ytdl(videourl, {filter:"audioonly", quality: "highestaudio" }).pipe(res);
    } catch (error) {
        console.log(error);
        res.send({ "error": error })
    }    

})
router.get('/search/:searchquery',checktoken, async (req, res) => {
    console.log("search query")
    const {searchquery} = req.params;
    // console.log(searchquery);
    // const data1={name,email,password};
    // const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchquery}&key=AIzaSyB5BA_XNWjFnzgc4prxdeD2V_soTveqiBM`)
    // const data = await response.data;
    const data = await youtubesearchapi.GetListByKeyword(`${searchquery}`, [false], [3])
    // console.log(data);
    // try{
    //     const newuser=await fromauth.register(data1)
    //     console.log("New USER",newuser);
    //     return res.status(200).send(newuser);
    // }catch(error){
    //     return res.status(200).send({error:`${error}`});
    // }
    // console.log(data.items[0].id);
    // const videourl = `https://www.youtube.com/watch?v=${data.items[0].id}`;
    // let info = await ytdl.getInfo(data.items[0].id);
    //const info=await 
    // const format = ytdl.filterFormats(info.formats, 'audioonly');
    try {

        // const proc = new ffmpeg({ source: stream })
        // proc.setFfmpegPath('/Applications/ffmpeg')
        // proc.saveToFile('audio.mp3', (stdout, stderr) =>{

        // console.log('done');

        // })
        // ffmpeg().input("C://musically//backend//video.mp4").output('output.mp3').on('end', () => {
        //     console.log('audio download finished')
        // })
        // .on('error',(err)=>{
        //     console.log(err);
        // })
        // .run();

        // res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
        // ytdl(videourl, {filter:"audioonly", quality: "highestaudio" }).pipe(res);
        console.log(data);
        res.send(data);
    } catch (error) {
        // res.send("error");
        console.log(error);
        res.send({ "error": error });
    }

})

router.get('/download/:videoid',(req,res)=>{
    const{videoid}=req.params;
    const videourl = `https://www.youtube.com/watch?v=${videoid}`;
    try {
        res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
        ytdl(videourl, {filter:"audioonly" }).pipe(res);
    } catch (error) {
        console.log(error);
        res.send({ "error": error })
    }    
})

router.delete('/:id',checktoken,async(req,res)=>{
    try{
        const{id}=req.params;
        console.log("id",id);
        const deletesong=await frommusic.deleterecord(id);
        console.log(deletesong);
        res.send({success:"song deleted"}); 
    }catch(error){
        res.send(error);
    }
})