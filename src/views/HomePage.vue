<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Start Page</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-button id="open-modal">Open Modal</ion-button>
        <ion-modal
          ref="modal"
          trigger="open-modal"
          :initial-breakpoint="0.75"
          :breakpoints="[0, 0.75]"
          @did-present="didPresent"
          @did-dismiss="didDismiss"
          :css-class="cssClass"
        >
          <ion-header>
            <ion-toolbar>
              <ion-title>Modal</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
            </ion-text>
          </ion-content>
        </ion-modal>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonModal,
    IonPage,
    IonText,
    IonTitle,
    IonToolbar
  } from '@ionic/vue';
  import { ref, useTemplateRef } from 'vue';

  const modal = useTemplateRef('modal');

  const cssClass = ref('');

  function didPresent() {
    cssClass.value = 'fully-visible';
  }

  function didDismiss() {
    cssClass.value = '';
  }

  function dismiss() {
    modal.value?.$el.dismiss();
  }
</script>

<style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>
