module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name:'dukfhzuzi',
                api_key:'354123164623578',
                api_secret:'lXWAQXkgB4-Bss4wSORmXPrUz7c',
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    // ...
});