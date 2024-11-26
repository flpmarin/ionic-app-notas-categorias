// formulario con titulo y descripcion con text area y boton crear, v-modelear los 2 datos de titulo y descripcion
<template>
    <ion-list>
        <ion-item>
            <ion-label position="floating">Titulo</ion-label>
            <ion-textarea v-model="titulo"></ion-textarea>
        </ion-item>
        <ion-item>
            <ion-label position="floating">Descripción</ion-label>
            <ion-textarea v-model="descripcion"></ion-textarea>
        </ion-item>
        <ion-button @click="crearTarea">Crear</ion-button>


<script lang="ts">
  import { IonList, IonItem, IonButton  } from '@ionic/vue';