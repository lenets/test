<template>
  <div class="lg:flex lg:justify-between">
    <div class="w-full lg:w-2/3">
      <div class="bg-grey-lighter py-20 pl-16 lg:pl-32 xl:pl-64">
        <a
          class="flex flex-col items-end w-140 md:w-164"
          href="https://www.explorer.de/"
        >
          <img alt="Explorer main logo" src="@/assets/logoEx.svg" />
        </a>
      </div>
      <div class="mx-24 lg:mx-32 xl:mx-64 overflow-hidden lg:overflow-visible">
        <div class="main-content mx-auto">
          <transition name="slot" mode="out-in" appear>
            <slot></slot>
          </transition>
        </div>
      </div>
    </div>

    <aside class="hidden lg:block h-screen w-1/3 sticky top-0">
      <img
        alt="Aside image"
        src="@/assets/sidebaEx.jpg"
        class="w-full h-full object-cover"
      />
    </aside>
  </div>
</template>

<style>
.main-content {
  max-width: 600px;
  width: 100%;
}
.slot-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.slot-enter-active {
  transition: all 0.3s ease-out;
}
.slot-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.slot-leave-active {
  transition: all 0.3s ease-in;
}
</style>
