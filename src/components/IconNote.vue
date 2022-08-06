<template>
    <div class="ic" style="margin right:10px">
        <img class="ic" style="width:25px" :src="require('../assets/Icons/add_alert.svg')" />
        <img style="width:25px" class="ic" :src="require('../assets/Icons/person_add.svg')" />
        <img style="width:25px" class="ic" :src="require('../assets/Icons/palette.svg')" />
        <img style="width:25px" margin-right:20px class="ic" :src="require('../assets/Icons/image.svg')" />
        <img style="width:25px" class="ic" :src="require('../assets/Icons/archive.svg')" />
        <img style="width:25px" class="ic" :src="require('../assets/Icons/more_vert.svg')" />
    </div>
</template>

<script>
export default {
    name: "NoteIcons",

}

</script>

<style scoped>
.ic{
 display: flex;
flex-direction: row;
gap:20px;
/* margin-right: 25px; */
padding-top: 10px;
padding-left: 5px;

}
</style>
