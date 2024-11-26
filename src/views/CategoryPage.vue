<template>
    <ion-page>
        <ion-content class="ion-padding">
            <ion-button @click="createNote">Crear nota</ion-button>
            <ion-button>Actualizar nota</ion-button>
            <ion-button>Eliminar nota</ion-button>
            <ModalForm :title="'Crear nota'" :color="'primary'" :isOpenModal="openCreate"/>
        </ion-content>
    </ion-page>

</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
// import { useRoute } from 'vue-router';
import {ref, Ref } from 'vue';
// import CategoryService from '@/services/CategoryService';
import ModalForm from '@/components/ModalForm.vue';



const openCreate: Ref<boolean> = ref(false);
const createNote = () => {
    openCreate.value = true;
}

// const service = new CategoryService();
// const route = useRoute();   
// const id = route.params.id;

</script>

<style scoped>
</style>