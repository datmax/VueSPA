<template>
    <v-layout row>
        <v-flex md6 offset-md3 xs12>
            <panel title="Songs">
            <v-btn to="/songs/create" slot="action" fab right bottom absolute small>
                <v-icon>add</v-icon>
            </v-btn>
            <div v-for="song in songs" :key="song.id">
            <v-layout>
                <v-flex xs6>
                    <h1>{{song.title}}</h1>
                    <h2>{{song.artist}}</h2>
                </v-flex>
                <v-flex xs6>
                    <img :src="song.albumImage" />
                </v-flex>
            </v-layout>
            </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from "@/components/Panel"
import SongsService from "@/services/SongsService"
export default {
    data(){
        return{
            songs: null
        }
    },
    components:{
        Panel
    },
    async mounted(){
        //do a request for all the songs in the backend
        this.songs = (await SongsService.index()).data
    }
}
</script>
<style>

</style>
