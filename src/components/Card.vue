<template>
  <section class="flex flex-col items-center gap-6 pb-6 bg-white shadow-2xl rounded-2xl">
    <img class ="rounded-t-2xl" src="../assets/illustration-hero.svg " alt="Girl listening to song enjoyment"/>
    <div class="flex flex-col gap-6 px-6 pt-4">
        <div class="flex flex-col gap-4">
            <h1 class="text-xl font-black text-center text-dark-blue">
                Order Summary
            </h1>
            <p class="w-64 text-base font-medium text-center text-desaturated-blue xl:w-72">
                You can now listen to millions of songs,
                audiobooks, and podcasts on any device
                anywhere you like!
            </p>
        </div>
    </div>
    <div class="flex flex-col self-stretch gap-4 px-6 xl:px-12">
        <PlanItem/>
            <button class="primary-btn">Proceed to Payment </button>
            <button class="-mt-2 secondary-btn">Cancel Order</button>
    </div>
  </section>
</template>

<script>
import PlanItem from '../components/PlanItem.vue'

export default {
    name: 'Card',
    components: {
        PlanItem
  }
}
</script>
