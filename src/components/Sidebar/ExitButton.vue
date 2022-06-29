<template>
    <div class="exit-button">
        <div class="exit-button-left">
            <img class="profile-image" :src="profileImage" />
            <div class="profile-name">Бахтияр Исраилов</div>
        </div>
        <div>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.6421 2.91529C18.1913 2.32924 17.5798 2 16.9423 2H5.40385C4.76631 2 4.15488 2.32924 3.70407 2.91529C3.25326 3.50134 3 4.2962 3 5.125V23.875C3 24.7038 3.25326 25.4987 3.70407 26.0847C4.15488 26.6708 4.76631 27 5.40385 27H16.9423C17.5798 27 18.1913 26.6708 18.6421 26.0847M23.1923 8.25L28 14.5M28 14.5L23.1923 20.75M28 14.5H11.5938"
                    stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>

<script lang="ts" setup>
import profileImage from "@/assets/images/profile-image.png";
</script>

<style>
.exit-button{
   background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
}

.exit-button-left{
    display: flex;
    align-items: center;
}
.profile-image{
    width: 41px;
    height: 41px;
    object-fit: cover;
    margin-right: 8px;   
}
</style>