<template>
    <v-layout row wrap>
        <v-flex xs12 md4>
            <panel title="Song metadata">
                <v-text-field label="Title" v-model="song.title"></v-text-field>
                <v-text-field label="Artist" v-model="song.artist"></v-text-field>
                <v-text-field label="Genre" v-model="song.genre"></v-text-field>
                <v-text-field label="Album" v-model="song.album"></v-text-field>
                <v-text-field label="Album Image" v-model="song.albumImage"></v-text-field>                
                <v-text-field label="Youtube id" v-model="song.youtubeId"></v-text-field>
            </panel>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 offset-md2 md6>
            <panel title="Tab and lyrics">
            <v-text-field label="Lyrics" v-model="song.lyrics" multi-line></v-text-field>
            <v-text-field label="Tab" v-model="song.tab" multi-line></v-text-field>
            
                
            </panel>
        </v-flex>
        <v-flex md1 offset-md11 xs1>
            <v-btn dense color="success" @click="create">Submit</v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from "@/components/Panel"
import SongService from "@/services/SongsService"
export default {
    data(){
        return{
            song:{
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImage: null,
                youtubeId: null,
                lyrics: null,
                tab: null
            }
            
        }
    },
    components:{
        Panel
    },
    methods:{
        async create(){
            try{
                await SongService.post(this.song)
                this.$router.push({name: "songs"})
            } catch(err){
                console.log(err)
            }
            
        }
    }
}
</script>

<style>

</style>
