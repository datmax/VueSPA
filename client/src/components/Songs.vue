<template>
    <v-layout row>
        <v-flex md6 offset-md3 xs12>
            <panel title="Songs">
            <div v-for="song in songs" :key="song.id">
                {{song.title}}
                {{song.artist}}
                {{song.album}}
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
