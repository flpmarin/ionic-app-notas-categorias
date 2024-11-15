<template>

    <ion-content class="ion-padding">
      <ion-modal :is-open="props.isOpenModal">
        <ion-header>
          <ion-toolbar :color="props.color">
            <ion-title>{{props.title}}</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="closeModel()">Cerrar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
            reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
            dicta.
          </p>
        </ion-content>

      </ion-modal>
    </ion-content>
  </template>
  
  <script lang="ts" setup>
  //props --->título,
    import { IonButtons, IonButton, IonModal, IonHeader, IonToolbar, IonContent, IonTitle } from '@ionic/vue';
    import { ref, defineProps, defineEmits } from 'vue';
  
    const props = defineProps(['title', 'color' ,'isOpenModal']);
    const emits = defineEmits(['close']);

    const closeModel = () => {
      emits('close');
    }

    const isOpen = ref(false);
  
    const setOpen = (open: boolean) => (isOpen.value = open);
  </script>