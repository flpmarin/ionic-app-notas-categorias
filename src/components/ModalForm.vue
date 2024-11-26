<template>

    <ion-content class="ion-padding">
      <ion-modal :is-open="props.isOpenModal">
        <ion-header>
          <ion-toolbar :color="props.color">
            <ion-title>{{props.title}}</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="cerrarModal()">Cerrar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <slot></slot>
        </ion-content>

      </ion-modal>
    </ion-content>
  </template>
  
  <script lang="ts" setup>
  //props --->título,
    import { IonButtons, IonButton, IonModal, IonHeader, IonToolbar, IonContent, IonTitle } from '@ionic/vue';
    import { defineProps, defineEmits } from 'vue';
  
    const props = defineProps(['title', 'color' ,'isOpenModal']);
    const emits = defineEmits(['closeModal']);

    const cerrarModal = () => {
      emits('closeModal');
    }

  </script>