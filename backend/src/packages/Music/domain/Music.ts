import { Model } from "objection";
import { Playlists } from "../../playlists/domain/Playlists";
export class Music extends Model{
    nameofmusic?:String
    videoid?:String
    // userid?:String
    playlistid?:String
    
    static get tableName(){
        return  'music';
    }
    static relationMappings = {
        owner: {
          relation: Model.BelongsToOneRelation,
          modelClass: Playlists,
          join: {
            from: 'music.playlistid',
            to: 'Playlists.id'
          }
        }
      };

}