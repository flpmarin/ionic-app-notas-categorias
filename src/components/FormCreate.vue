// formulario con titulo y descripcion con text area y boton crear, v-modelear los 2 datos de titulo y descripcion
<template>
    <ion-content>
        <ion-textarea label="Titulo" v-model="titulo"></ion-textarea>
        <ion-textarea label="Descripcion" v-model="descripcion"></ion-textarea>
        <ion-button expand="block" @click="sendForm()">Crear nota</ion-button>
    </ion-content>
</template>

<script lang="ts" setup>
import { IonContent, IonTextarea, IonButton } from '@ionic/vue';
import { ref } from 'vue';
import { CategoryService } from '@/services/CategoryService';

const service = new CategoryService();

const sendForm =  async ()  => {
    const response = await service.createNotes(
        titulo: titulo,
        descripcion: descripcion,
        props.id,
    )
    if(response){
        console.log('Nota creada');
    }
}

const props = defineProps(['id']);
const titulo = ref('');
const descripcion = ref('');


</script>
    