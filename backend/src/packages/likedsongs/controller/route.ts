//lib
import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import { checktoken } from '../../../utils/check-token';
//local
// import ytdl from 'ytdl';
import * as fromusers from '../../users';
import * as fromauth from '../../authentication';
import * as frommusic from '../../Music';
import * as fromlikesongs from '../../likedsongs';
dotenv.config();

const app = express();
export const router = express.Router()

router.post('/',checktoken,async(req,res)=>{
    try{
        const{musicid}=req.body;
        const{email}=req.user;
        const getuserid=await fromusers.get_one2(email);
        console.log(getuserid['id']);
        const data={musicid:musicid,userid:getuserid['id']};
        const likesong=await fromlikesongs.create(data);
        res.send({success:"song successfully liked"});

    }catch(error){
        res.send({error:error});
    }
})

router.get('/',checktoken,async(req,res)=>{
    try {
        const{musicid}=req.body;
        const{email}=req.user;
        const getuserid=await fromusers.get_one2(email);
        console.log(getuserid['id']);
        const allsong=await fromlikesongs.get_all(getuserid['id']);
        const allmusic=[];
        for(let i=0;i<allsong.length;i++){
            const exactmusic=await frommusic.get_one(allsong[i].musicid);
            allmusic.push({...exactmusic,...allsong[i]});
        }
        res.send(allmusic);
        
    } catch (error) {
       res.send(error);
    }    

})


router.delete('/:id',checktoken,async(req,res)=>{
    try{
        const{id}=req.params;
        const unlikesong=await fromlikesongs.deleterecordbymusicid(id);
        res.send({success:"successfully unliked the song"});
    }catch(error){
        res.send(error);
    }
})