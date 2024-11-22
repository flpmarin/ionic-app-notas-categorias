<template>
    <ion-page>
        <ion-content>
            <h1>CategoryPage, el id es : {{ id }}</h1>
        </ion-content>
    </ion-page>

</template>

<script lang="ts" setup>
import { IonPage, IonContent } from '@ionic/vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const id = route.params.id;



</script>

<style scoped>
</style>