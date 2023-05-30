<script setup lang="ts">
import NewsletterWrapper from '@/components/NewsletterWrapper.vue';
import { getSiteData } from '@/helpers';
const siteData = getSiteData();
</script>

<template>
  <NewsletterWrapper>
    <div>
      <h1 class="step-title mb-24 mt-46">
        Schön, dass du dabei bist!
      </h1>
      <div class="font-secondary text-16">
        <p><b>Bitte bestätige deine Anmeldung  in der Email, die wir dir gerade geschickt 
          haben.</b> Falls du die Email nicht finden solltest, schau auch in Deinem Spam 
          Ordner nach.
        </p>
        <p class="mt-24">Wir freuen uns darauf, dich für einzigartige Reise-Erlebnisse zu begeistern.</p>
      </div>
      <div class="cards">
        <h2 class="cards__title font-secondary text-primary-dark text-18 font-semibold">Vielleicht findest du schon eine spannende Reise bei uns?</h2>
        <div class="md:flex mt-24 mb-24 justify-between">
          <div class="card">
            <div class="h-160 mb-24">
              <img
                class="w-full h-full object-cover rounded-[8px] max-w-[250px] ml-auto mr-auto"
                src="@/assets/specialOffersPhoto-2.jpg"
                alt="Special Offers Photo"
              />
            </div>
            <p class="card__txt font-secondary font-medium tracking-[.5px] text-lightgrey text-16 my-24">
              Wir helfen Dir günstig, die schönsten Reise-Momente zu erleben.
              Mit immer neuen Angeboten.
            </p>
            <a href="https://www.explorer.de/aktionen.html">
              <div class="primary-btn">
                  Aktionsangebote
              </div>
            </a>
          </div>
          <div class="card">
            <div class="h-160 mb-24 rounded-2xl">
              <img
                class="w-full h-full object-cover rounded-[8px] max-w-[250px] ml-auto mr-auto"
                src="@/assets/travelBlogsPhoto-2.jpg"
                alt="Travel Blogs Photo"
              />
            </div>
            <p class="card__txt font-secondary font-medium tracking-[.5px] text-lightgrey text-16 my-24">
              Unsere Reiseberater reisen passioniert. Hier teilen sie ihre 
              Erfahrungen und Erlebnisse.
            </p>
            <a href="https://www.explorer.de/kampagnen/reiseberichte.html">
              <div class="primary-btn">
                Reiseberichte
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-links flex gap-[16px] gap-y-[24px] justify-center flex-wrap mb-120">
        <div class="text-primary" v-for="link in siteData.thankYouLinks" :key="link.link">
          <a class="footer-link checked-fill font-medium" :href="link.link">{{ link.text }}</a>
        </div>
      </div>
    </div>
  </NewsletterWrapper>
</template>

<style scoped>
.stattravel .footer-links {
  @apply max-w-[475px] mx-auto;
}
.footer-link {
  @apply inline-block rounded-full py-12 px-18 font-primary text-primary leading-4 text-14 bg-white ring-inset ring-1 ring-primary;
}

.stattravel .footer-link {
  @apply rounded-lg font-semibold;
}
.stattravel .cards__title {
  @apply text-22;
}
.card {
  @apply p-24 bg-grey-lighter rounded-3xl w-full md:w-[48%] mt-24 md:mt-0;
}

.stattravel .card {
  @apply p-16 bg-[#F8F8F9];
}

.card__txt {
  @apply text-lightgrey;
}

.stattravel .card__txt {
  @apply text-primary-dark min-h-[96px] flex items-center;
}
.primary-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply rounded-[8px] font-extrabold bg-primary text-white font-primary h-48 py-10 px-24 text-center w-full;
}
.primary-btn:hover {
  transform: scale(1.01);
}

.footer-link {
  @apply inline-block rounded-full py-14 px-18 font-primary text-primary leading-4 text-14 bg-white ring-inset ring-1 ring-primary;
}
.footer-link:hover {
  @apply ring-2;
}
</style>