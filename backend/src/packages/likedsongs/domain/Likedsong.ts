import { Model } from "objection";
import { Music } from "../../Music";
import { users } from "../../users";
// import { Playlists } from "../../playlists/domain/Playlists";
export class Likedsong extends Model{
    
    musicid?:String
    userid?:String
    // userid?:String
    // playlistid?:String
    
    static get tableName(){
        return  'likedsongs';
    }
    static relationMappings = {
        owner: {
          relation: Model.BelongsToOneRelation,
          modelClass: Music,
          join: {
              from: 'likedsongs.musicid',
            to: 'music.id'
          }
        },
        owneruser: {
          relation: Model.HasManyRelation,
          modelClass: users,
          join: {
              from: 'likedsongs.userid',
            to: 'users.id'
          }
        }
      };

}