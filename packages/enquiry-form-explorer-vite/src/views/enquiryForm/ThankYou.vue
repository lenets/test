<script setup lang="ts">
import { useEnquiryForm } from '@/useEnquiryForm';
import { TextInput, VerticalStep, Spinner, Submit } from 'components-vue3';
import IconEmail from '@/components/icons/IconEmail.vue';
import { ref } from 'vue';
import { NewsletterAgreementOptions } from '@/enquiryContentData';
import EnquiryFormWrapper from '@/components/EnquiryFormWrapper.vue';
import { proccess } from '@/hubspot';

const { formData } = useEnquiryForm();

const footerLinks = [
  {
    name: 'Alle Reisen',
    href: 'https://www.explorer.de/reiseziele.html'
  },
  {
    name: 'Mietwagen / Camper',
    href: 'https://www.explorer.de/mietwagen-camper.html',
  },
  { name: 'Hotels', href: 'https://www.explorer.de/reisearten/hotels.html' },
  { name: 'Flüge', href: 'https://www.explorer.de/fluege.html' },
  { name: 'Zur Homepage', href: 'https://www.explorer.de/' },
];

const isPending = ref(false);
formData.value.newsLetterEmail = formData.value.emailAdress;
const submitBtnText = ref('Newsletter anfordern');

async function submitForm() {
  isPending.value = true;

  formData.value.newsletterAgreement = NewsletterAgreementOptions.agreement;

  try {
    await proccess(false);
  } finally {
    const FORMSPARK_ACTION_URL = `https://submit-form.com/${
    import.meta.env.VITE_NEWSLETTER_FORM_FORMSPARK
    }`;

    await fetch(FORMSPARK_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        newsletterEmail: formData.value.newsLetterEmail,
      }),
    });

    submitBtnText.value = 'Vielen Dank!';
    isPending.value = false;
  }
}
</script>

<template>
  <EnquiryFormWrapper :showStepper="false">
    <div>
      <h1 class="text-primary text-22 mt-46 mb-24 font-bold font-secondary">
        Vielen Dank für deine Reise-Anfrage.
      </h1>
      <div class="mb-48">
        <VerticalStep
          content="Deine Anfrage ist eingegangen und wir freuen uns, dich bei der Planung und Buchung deiner Reise zu unterstützen."
          state="completed"
        />
        <VerticalStep
          class="mt-24"
          content="Dein Reiseberater kontaktiert dich innerhalb der nächsten 48 Stunden, um mit dir deine Reise im Detail zu planen."
          state="active"
        />
      </div>

      <div
        v-if="
          formData.newsletterAgreement ===
          NewsletterAgreementOptions.disagreement
        "
        class="p-28 bg-grey-lighter rounded-3xl mb-40"
      >
        <h4 class="mb-16 font-secondary font-semibold text-18">
          Verpass mit unserem Newsletter kein Reise-Angebot!
        </h4>
        <p class="font-secondary text-lightgrey font-medium">
          Mit unserem Newsletter erhältst Du regelmäßig unsere besten
          Reiseangebote, jede Menge Inspiration für Deinen nächsten Traumurlaub
          und wertvolle Experten-Tipps.
        </p>
        <form @submit.prevent="submitForm()">
          <fieldset class="md:flex mt-24">
            <TextInput
              class="w-full md:w-2/3 mb-24 md:mb-0 md:mr-24"
              :value="formData.newsLetterEmail"
              @input="formData.newsLetterEmail = $event"
              placeholder="E-Mail Adresse"
              :hasIcon="true"
            >
              <IconEmail class="h-14 text-primary" />
            </TextInput>
            <Submit
              v-if="!isPending"
              class="btn-primary h-48 px-16 w-full md:w-230"
              >{{ submitBtnText }}</Submit
            >
            <Spinner class="border-t-primary mr-70" v-if="isPending" />
          </fieldset>
        </form>
      </div>
      <h2 class="font-secondary text-18 font-semibold mb-24">
        Können wir dich für weitere spannende Reise-Inhalte begeistern?
      </h2>
      <div class="md:flex mb-40 justify-between">
        <div class="p-24 bg-grey-lighter rounded-3xl w-full md:w-[48%]">
          <div class="h-160 mb-24">
            <img
              class="w-full h-full object-cover rounded-[8px] max-w-[250px] ml-auto mr-auto"
              src="@/assets/specialOffersPhoto-2.jpg"
              alt="Special Offers Photo"
            />
          </div>
          <p class="font-secondary font-medium tracking-[.5px] text-lightgrey text-16 my-24">
            Wir helfen Dir günstig, die schönsten Reise-Momente zu erleben. 
            Mit immer neuen Angeboten. 
          </p>
          <a href="https://www.explorer.de/aktionen.html"
            ><div
              class="primary-btn"
            >
              Aktionsangebote
            </div>
          </a>
        </div>
        <div
          class="p-24 bg-grey-lighter rounded-3xl w-full md:w-[48%] mt-24 md:mt-0"
        >
          <div class="h-160 mb-24 rounded-2xl">
            <img
              class="w-full h-full object-cover rounded-[8px] max-w-[250px] ml-auto mr-auto"
              src="@/assets/travelBlogsPhoto-2.jpg"
              alt="Travel Blogs Photo"
            />
          </div>
          <p class="font-secondary font-medium tracking-[.5px] text-lightgrey text-16 my-24">
            Unsere Reiseberater reisen passioniert. Hier teilen sie ihre 
            Erfahrungen und Erlebnisse.
          </p>
          <a href="https://www.explorer.de/kampagnen/reiseberichte.html"
            ><div
              class="primary-btn"
            >
              Reiseberichte
            </div></a
          >
        </div>
      </div>

      <div class="flex gap-[16px] gap-y-[24px] justify-center flex-wrap mb-120">
        <div class="text-primary" v-for="link in footerLinks" :key="link.name">
          <a class="footer-link checked-fill font-medium" :href="link.href">{{ link.name }}</a>
        </div>
      </div>
    </div>
  </EnquiryFormWrapper>
</template>

<style scoped>
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