<template>
    <ion-page>
        <ion-content class="ion-padding">
            <ion-button @click="createNote">Crear nota</ion-button>
            <ion-button>Actualizar nota</ion-button>
            <ion-button :color="'danger'">Eliminar nota</ion-button>
            <ModalForm :title="'Crear nota'" :color="'primary'" :isOpenModal="openCreate" @closeModal="closeModalBtnCerrar()">
                <FormCreate/>
            </ModalForm>
        </ion-content>
    </ion-page>

</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
// import { useRoute } from 'vue-router';
import {ref, Ref } from 'vue';
// import CategoryService from '@/services/CategoryService';
import ModalForm from '@/components/ModalForm.vue';
import FormCreate from '@/components/FormCreate.vue';


const openCreate: Ref<boolean> = ref(false);
const createNote = () => {
    openCreate.value = true;
}
const closeModalBtnCerrar = () => {
    openCreate.value = false;
}
// const service = new CategoryService();
// const route = useRoute();   
// const id = route.params.id;

</script>

<style scoped>
</style>