<template>
  <div class="flex justify-center">
    <div class="flex justify-center items-center flex-col w-screen relative">
      <!-- header -->
      <div class="header text-red-500 w-full flex items-center justify-end p-5 fixed z-0">
        <span class="font-semibold">Login</span>
      </div>
      
      <!--  -->
      <Nuxt class="pages"/>
    </div>
  </div>
</template>

<style lang="scss">

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.header {
  height: 67px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 12px 12px;
  box-shadow: 0px 3px 6px #00000029;
  top: 0;

  span {
    color: #319795;
  }
}

.pages {
  margin-top: 67px;
}

/* .button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
