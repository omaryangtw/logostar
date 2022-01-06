# [logostar](https://logostar.com.tw/)

Logostar is the only integrated solution you need for trademark registeration.

The solution can be deliverd both in Taiwan and around the globe.

For service enquiry, please visit [logostar](https://logostar.com.tw/)

### Technology Stack
- [Vue3](https://v3.vuejs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Emailjs](https://www.emailjs.com/)
- [Recaptcha](https://www.npmjs.com/package/vue-recaptcha)

### Secrets setup
Create a new file named ```.env.local``` in root directory (same level as package.json)
```
VITE_USER_ID = `your_emailjs_user_id`
VITE_SERVICE_ID = `your_emailjs_service_id`
VITE_TEMPLATE_ID = `your_emailjs_template_id`
```
## Development and Deploy

### Local development

```
npm install
npm run dev
```

### Deploy to [Google App Engine](https://cloud.google.com/appengine)


```
npm run build
gcloud app deploy
```
