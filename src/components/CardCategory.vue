<template>

    <ion-card @click="setIsOpen()">
      <img :alt="props.alt" :src="props.img" />
      <ion-card-header>
        <ion-card-title>{{ props.title }}</ion-card-title>
        <ion-card-subtitle>{{ props.subtitle }}</ion-card-subtitle>
      </ion-card-header>
  
      <ion-card-content>
        {{ props.description }}
      </ion-card-content>
    </ion-card>
    <Modal :color="'primary'" :title="'Título'" :isOpenModal="isOpen" @close="cerrar()" />
    
  </template>
  
  <script lang="ts" setup>
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
    import { defineProps, Ref, ref } from 'vue';
    import Modal from './Modal.vue';
    
    const props = defineProps(['title', 'subtitle', 'description', 'img', 'alt']);
    const isOpen:Ref<boolean> = ref(false);
    const cerrar = () => {
      isOpen.value = false;
    }
    const setIsOpen = () => {
        isOpen.value = true;
      }
  </script>
 <style scoped>

 ion-card {
    width: 300px;  
 }
 
 ion-card:hover{
  cursor: pointer;
  scale:1.01;
 }

 
 </style>
