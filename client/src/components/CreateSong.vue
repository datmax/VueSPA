<template>
    <v-layout row wrap>
        <v-flex xs12 md4>
            <panel title="Song metadata">
                <v-text-field label="Title" required :rules="[required]" v-model="song.title"></v-text-field>
                <v-text-field label="Artist" required :rules="[required]" v-model="song.artist"></v-text-field>
                <v-text-field label="Genre" required :rules="[required]" v-model="song.genre"></v-text-field>
                <v-text-field label="Album" required :rules="[required]" v-model="song.album"></v-text-field>
                <v-text-field label="Album Image" required :rules="[required]" v-model="song.albumImage"></v-text-field>                
                <v-text-field label="Youtube id" required :rules="[required]" v-model="song.youtubeId"></v-text-field>
            </panel>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 offset-md2 md6>
            <panel title="Tab and lyrics">
            <v-text-field label="Lyrics" required :rules="[required]"
             v-model="song.lyrics" multi-line></v-text-field>
            <v-text-field label="Tab" required :rules="[required]"
            v-model="song.tab" multi-line></v-text-field>
            
                
            </panel>
        </v-flex>
        <v-flex md1 offset-md11 xs1>
            <v-btn dense color="success" @click="create">Submit</v-btn>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex>
        <v-alert class="xs12 ml-4" :value="error" transition="scale-transition" error>{{error}}</v-alert>
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
            },
            
            required: (value) => !!value || "Required. ",
            error: null
        }
    },
    components:{
        Panel
    },
    methods:{
        async create(){
            this.error = null
            const areAllFieldsFilledIn = Object
                .keys(this.song)
                .every(key => !!this.song[key])
            if(!areAllFieldsFilledIn){
                this.error = "Please fill in all the fields."
                return
            }
            try{
                await SongService.post(this.song)
                this.$router.push({name: "songs"})
            } catch(err){
                console.log(err)
            }
            
        }
    },

}
</script>

<style>

</style>
