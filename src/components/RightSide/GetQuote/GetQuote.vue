<template>
    <div class="get-quote">
        <div class="heading">
            <h2>Need help with your website? Want to build a custom web-app? Get in touch for a free consultation.</h2>
        </div>
        <div class="intro">
            <p>No project is too big or small, so don't hesitate to get in touch. I'll work with you to create a website or web-app that'll delight your users, and be
                the perfect extension of your brand. In addition, I work with a network of highly skilled developers that have scaled products to millions of users.
                <br/><br/>
                Fill out the form below and I'll be in touch with you within 24 hours.
                    
            </p>
        </div>
        <form v-if="notSubmitted" @submit.prevent="validateForm">
            <p v-if="errors.length">
                <b>{{this.errors[0]}}</b>
            </p>
            <label for="name">Name: 
                <input name="name" v-bind="name" type="text" placeholder="Your name"/>
            </label>

            <label for="email">Email:
                <input name="email" v-bind="email" type="text" placeholder="Your email"/>
            </label>

            <label for="Phone">Phone:
                <input name="Phone" v-bind="phone" type="textarea" placeholder="Your phone number"/>
            </label>

            <label for="Project_Info">Additional Info:
                <textarea name="Project_Info" class="project-info" v-bind="projectInfo" type="textarea" placeholder="Project information..."/>
            </label>
            <input type="submit" 
                   class="form-button" 
                   value="Get in touch"
            />
        </form>
        <div class="thankyou-message" v-else>
            <h4>Thanks for getting in touch. Speak soon.</h4>
        </div>
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';
import axios from 'axios';
export default {
    name: 'GetQuote',
    data: function() {
        return {
            name: null,
            email: null,
            phone: null,
            projectInfo: null,
            errors: [],
            notSubmitted: true
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(2)
        },
        email: {
            required,
            email
        }
    },
    methods: {
        validateForm() {
            this.$v.$touch()
            console.log(this.$v);
            if (this.$v.$invalid) {
                this.errors.push('Please double check your entries!');
            } else {
                const formData = new FormData();
                formData.append('Name', this.name);
                formData.append('Phone', this.phone);
                formData.append('Email', this.email);
                formData.append('Project_Info', this.projectInfo);

                axios.post('https://script.google.com/macros/s/AKfycbz9Co-qCGwl-FwRn9ceQAULKdTsEkGm3PR-ZPKTj7r2G-D9IfI/exec', formData)
                .then(() => {
                    this.notSubmitted = false;
                });
            }
        }
    }
}
</script>

<style lang="scss">
.get-quote {
    min-height: 700px;
    height: 100vh;
    width: 50vw;
    display: grid;
    grid-template: repeat(12, 1fr) / repeat(8, 1fr);
    .heading {
        grid-area: 2/1/4/8;
        text-align: left;
        margin-left: 2vw;
    }
    .intro {
        grid-area: 3/1/5/9;
        text-align: left;
        margin: 2vh 2vw 0vh 2vw;
        p {
            font-weight: normal;
            white-space: pre-line;
            max-width: 100%;
        }
    }
    form, .thankyou-message {
        grid-area: 5/1/13/9;
        margin: 2vh 2vw 2vh 2vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        h4 {
            color: var(--leftSide-bgColor);
            transition: 2s ease-in-out;
        }
        p {
            display: flex;
            b {
                transition: 2s ease-in-out;
                color: var(--leftSide-bgColor);
            }
        }
        label {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-weight: bold;
            input, textarea {
                width: 90%;
                transition: 2s ease-in-out;
                box-shadow: 0px 0px 5px var(--leftSide-bgColor);
                border: 0.5px solid var(--leftSide-bgColor);
                border-radius: 10px;
                min-height: 35px;
                margin: 10px auto 10px 0px;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                padding-left: 10px;
                &.project-info {
                    min-height: 150px;
                    vertical-align: top;
                    padding-top: 10px;
                    font-family: sans-serif;
                    div {
                        height: 95%;
                    }
                }
                &:active {
                    border: 3px solid var(--leftSide-bgColor);
                    box-shadow: 0px 0px 10px var(--leftSide-bgColor);
                }
            }
        }
        .form-button {
            background-color: var(--leftSide-bgColor);
            color: white;
            cursor: pointer;
            width: 10vw;
            min-width: 100px;
            height: 5vh;
            min-height: 40px;
            transition: 2s ease-in-out;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            appearance: none;
            border-style: solid;
            border: 2px solid var(--leftSide-bg-Color);
            font-family: sans-serif;
            font-size: .95rem;
        }
    }
    @media (max-width: 750px) {
        grid-template: repeat(16, 1fr) / repeat(12, 1fr);
        min-height: 1000px;
        width: 100vw;
        .heading {
            grid-area: 2/1/3/13;
            font-size: .8rem;
            margin: 0px 5vw;
        }
        .intro {
            grid-area: 3/1/7/13;
            margin-top: 25px;
            font-size: .95rem;
            margin: 0px 5vw;
        }
        form, .thankyou-message {
            grid-area: 7/2/12/11;
            align-items: center;
            margin: 5px auto;
            @media (max-width: 600px) {
                margin-top: 5vh;
            }
            width: 100%;
            label {
                width: 100%;
                input, textarea {
                    width: 100%;
                    margin-right: 0px;
                }
            }
            .form-button {
                // Padding on inputs
                width:  calc(100% + 10px);
                margin: 0px auto;
                padding-left: 5px;
                padding-right: 5px;
            }
        }
    }
}
</style>