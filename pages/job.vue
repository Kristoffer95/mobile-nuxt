<template>
  <div class="job h-screen flex flex-col items-center">
    <div class="mt-4 fixed z-0">
      <h1 class="title text-center font-medium">Deine Job</h1>
      <h1 class="title text-center font-medium">website</h1>
    </div>
    <img class="fixed z-0" :src="image('agreement')" alt="" srcset="" style="margin-top: 187px">

    <div class="bottom-nav w-screen flex flex-col items-center absolute z-1" style="padding-bottom: 138px">
      <div class="top w-screen flex flex-col items-center mt-6">
        <div class="button-register w-80 h-10 flex justify-center items-center">
          <span class="text-white text-base">Kostenlos Registrieren</span>
        </div>
      </div>
      <div class="bottom mt-6">
        <div class="buttons-wrapper">
          <div class="buttons flex">
            <div 
              class="h-10 flex items-center px-8 first:rounded-l-xl last:rounded-r-xl" 
              :class="selected_button === button_index ? 'selected-button' : null"
              v-for="(button, button_index) in buttons" 
              :key="button_index" 
              @click="selectButton(button_index)">
                Arbeitnehmer
            </div>
          </div>
        </div>

        <div class="px-5 mt-7 flex flex-col">
          <h2 class="bottom-title text-center">Drei einfache Schritte zu deinem neuen Job</h2>
          
          <!-- one -->
          <div class="one">
            <div class="one-image flex flex-col items-end mt-5">
              <img class="profile-data pr-1" :src="image('profile_data')" alt="">
            </div>
            <div class="one-texts flex">
              <div>1.</div>
              <div>Erstellen dein Lebenslauf</div>
            </div>
          </div>

          <!-- two -->
          <div class="two overflow-x-hidden">
            <svg data-v-8c046fa2="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="" style="width: calc(136% + 1.3px); height: 52px;"><path data-v-8c046fa2="" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" style="fill: rgb(255, 255, 255);"></path></svg>
            <div class="two-texts flex">
              <div>2.</div>
              <div>Erstellen dein Lebenslauf</div>
            </div>
            <div class="two-image flex flex-col items-end mt-5">
              <img class="profile-data pr-1" :src="image('task')" alt="">
            </div>
            <div data-v-8c046fa2="" class="custom-shape-divider" style="transform: rotate(180deg); bottom: 0px;"><svg data-v-8c046fa2="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="" style="width: calc(136% + 1.3px); height: 52px;"><path data-v-8c046fa2="" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" style="fill: rgb(255, 255, 255);"></path></svg></div>
          </div>

          <!-- three -->
          <div class="three">
            <div class="three-texts flex">
              <div>3.</div>
              <div>Mit nur einem Klick bewerben</div>
            </div>
            <div class="three-image flex flex-col items-end mt-5">
              <img class="profile-data pr-1" :src="image('personal_file')" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'job',
  data() {
    return {
      selected_button: 0,
      buttons: ['Arbeitnehmer', 'Arbeitgeber', 'Temporärbüro']
    }
  },
  methods: {
    selectButton(index: number) {
      this.selected_button = index
    }
  }
})
</script>

<style lang="scss">
.job {
  background: transparent linear-gradient(141deg, #EBF4FF 0%, #E6FFFA 100%) 0% 0% no-repeat padding-box;

  .title {
    font-size: calc(100vw / 10);
    line-height: calc(100vw / 8);
  }

  .bottom-nav {
    top: 90vh;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px -1px 3px #00000033;
    border-radius: 12px 12px 0px 0px;

    .top {
      height: 128px;
      border-bottom: 1px solid #bebebe33;
      
      .button-register {
        background: transparent linear-gradient(95deg, #319795 0%, #3182CE 100%) 0% 0% no-repeat padding-box;
        border-radius: 12px;
      }

    }

    .bottom {
      .buttons-wrapper {
        padding-left: 20px;
        width: 100vw;
        overflow-x: scroll;
        
        .buttons {
          div {
            border: 1px solid #CBD5E0;
            color: #319795;
          }
        }
      }

      .bottom-title {
        font-size: calc(100vw / 15);
        line-height: calc(100vw / 12);
        letter-spacing: 0px;
      }
    }
    
  }
}
.selected-button {
  background-color: #81E6D9;
  border-color: #81E6D9 !important;
  color: white !important;
}


.one {
  .one-texts {
    position: relative;
    margin-top: 51px;
    color: #718096;
    
    div {
      &:first-child {
        bottom: 0;
        line-height: calc(100vw / 3.3);
        position: absolute;
        font-size: calc(100vw / 3);
      }
      &:last-child {
        margin-left: 140px;
        font-size: 16px;
      }
    }
  
  }
}

.two {
  background: transparent linear-gradient(134deg, #E6FFFA 0%, #EBF4FF 100%) 0% 0% no-repeat padding-box;

  .two-texts {
    position: relative;
    margin-top: 140px;
    color: #718096;

    div {
      &:first-child {
        bottom: 0;
        left: 30px;
        line-height: calc(100vw / 3.3);
        position: absolute;
        font-size: calc(100vw / 3);
      }
      &:last-child {
        margin-left: 160px;
        font-size: 16px;
      }
    }
  }
}

.three {
  .three-texts {
    position: relative;
    margin-top: 50px;
    color: #718096;

    div {
      &:first-child {
        bottom: 0;
        left: 60px;
        line-height: calc(100vw / 3.3);
        position: absolute;
        font-size: calc(100vw / 3);
      }
      &:last-child {
        margin-left: 190px;
        font-size: 16px;
      }
    }
  }
}
</style>
