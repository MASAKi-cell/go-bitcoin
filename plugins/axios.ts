import { Context } from "@nuxt/types";

export default function ({ $axios, redirect }: Context) {
  $axios.onRequest((config) => {
    console.log(`API url:${config.url}, method:${config.method}`);
  });

  $axios.onError((error) => {
    const code = error.response?.status;

    if (code === 404) console.log("Code:404 Error");
  });
}
