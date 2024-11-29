<template>
    <ion-page>
        <ion-content class="ion-padding">
            <ion-button @click="createNote">Crear nota</ion-button>
            <ion-button>Actualizar nota</ion-button>
            <ion-button :color="'danger'" @click="deleteNote">Eliminar nota</ion-button>
            <ModalForm :title="'Crear nota'" :color="'primary'" 
                :isOpenModal="openCreate"
                @closeModal="closeModalCreate()">
                <FormCreate :id="id"/>
            </ModalForm>

            <ModalForm :title="'Eliminar nota'" :color="'danger'" 
                :isOpenModal="openDelete"
                @closeModal="closeModalDelete()">
                <FormDelete />

            </ModalForm>
        </ion-content>
    </ion-page>

</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { useRoute } from 'vue-router';
import { ref, Ref } from 'vue';
// import CategoryService from '@/services/CategoryService';
import ModalForm from '@/components/ModalForm.vue';
import FormCreate from '@/components/FormCreate.vue';
import FormDelete from '@/components/FormDelete.vue';

const route = useRoute();
const id = route.params.id;
const openDelete: Ref<boolean> = ref(false);
const openCreate: Ref<boolean> = ref(false);
const createNote = () => {
    openCreate.value = true;
}
const closeModalCreate = () => {
    openCreate.value = false;
}

const closeModalDelete = () => {
    openDelete.value = false;
}

const deleteNote = () => {
    openDelete.value = true;
}
// const service = new CategoryService();
// const route = useRoute();   
// const id = route.params.id;

</script>

<style scoped></style>