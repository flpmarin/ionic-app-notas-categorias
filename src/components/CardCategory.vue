<template>

    <ion-card>
      <img :alt="props.alt" :src="props.img" />
      <ion-card-header>
        <ion-card-title>{{ props.title }}</ion-card-title>
        <ion-card-subtitle>{{ props.subtitle }}</ion-card-subtitle>
      </ion-card-header>
  
      <ion-card-content>
        {{ props.description }}
      </ion-card-content>
    </ion-card>
    
  </template>
  
  <script lang="ts" setup>
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
    import { defineProps } from 'vue';
    
    const props = defineProps(['title', 'subtitle', 'description', 'img', 'alt']);
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
