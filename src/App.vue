<template>
  <ion-app>

  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Aplicación Notas</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      AQUÍ VAN LOS ITEMS DEL MENÚ
    </ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Aplicación Notas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding"> 
      <ion-router-outlet />
    </ion-content>

    <FooterBar/>
  </ion-page>
</ion-app>
</template>

<script lang="ts" setup>
  import {IonApp, IonRouterOutlet , IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import FooterBar from '@/components/FooterBar.vue';
</script>

<style scoped>

</style>