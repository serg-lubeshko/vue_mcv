## ROUTER

```vue
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
];
```
name: "home" - это алиас для нашего роута. Мы можем ссылаться в проекте не по пути, а по name


## views Template
Вместо href writing `router-link`
```vue

<p class="text-xs-center">
<router-link to="{name: 'login'}"> Need an account?</router-link>
</p>
```

```vue

В конце template указываем:
<script>
export default {
  name: "McvRegister",
  methods: {
    onSubmit() {                 //Для кнопки
      console.log("register");   
    },
  },
};
</script>

```
### Form
``` vue 
 <form @submit.prevent="onSubmit"></form>
 
 //@submit.prevent="onSubmit"  - отключает дефолтное поведение
 ```