<template>
    <div class="about-me">
        <div class="heading">
            <h2>Hi, I'm James 👋🏻. I live in Redondo Beach, Los Angeles 🌊 but I'm a Londoner at heart, hailing from the UK. </h2>
        </div>
        <div class="intro">
            <p>I'm currently working as a freelance developer, and am comfortable using a range of different technologies as you can see below. 
               Right now I'm open to new freelance projects and full-time roles. 
               <br/> <br/>
                Before becoming a developer, I gained a degree in French & Spanish from a top 10 UK University, and led consultative sales for the UK's 3rd largest food publishing website. I love
                seeing what you can achieve at the intersection of creativity and technology, and I'm excited at how much tech is changing the planet. When I'm not coding, you'll catch me reading,
                cooking or exploring California's National Parks. 
            </p>
        </div>
        <div class="skills">
            <h3>
                Languages <hr/>
            </h3>
            
            <div class="computer">
                <span class="language-icon">💻</span>
                <ul>
                    <Language 
                        v-for="(language, idx) in languages.computer"
                        :key="idx"
                        :name="language.name"
                        :imgSrc="language.imgUrl"
                    />
                </ul>
            </div>
            <div class="human">
                <span class="language-icon">🗣</span>
                <ul>
                    <Language 
                        v-for="(language, idx) in languages.human"
                        :key="idx"
                        :isEmoji="true"
                        :emoji="language.emoji"
                        :name="language.name"
                    />
                </ul>
            </div>
        </div>

        <div class="frameworks">
            <h3>
                Frameworks <hr/>
            </h3>
            <ul>
                <Framework 
                    v-for="framework in frameworks"
                    :key="framework.name"
                    :name="framework.name"
                    :imgSrc="framework.imgUrl"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import Framework from './Framework';
import Language from './Language';

export default {
    name: 'AboutMe',
    components: {
        Framework,
        Language
    },
    data: function() {
        return {
            languages: {
                computer: [
                    {
                        name: 'JavaScript',
                        imgUrl: 'javascript.svg'
                    },
                    {
                        name: 'HTML',
                        imgUrl: 'html-5.svg'
                    },
                    {
                        name: 'CSS',
                        imgUrl: 'css-3.svg'
                    },
                    {
                        name: 'PHP',
                        imgUrl: 'php.svg'
                    },
                    {
                        name: 'SQL (MySQL, SQLite)',
                        imgUrl: 'sql.svg'
                    }
                ],
                human: [
                    {
                        name: 'English',
                        emoji: '🇬🇧',
                        imgUrl: 'react.svg'
                    },
                    {
                        name: 'French',
                        emoji: '🇫🇷',
                        imgUrl: 'vue.svg'
                    },
                    {
                        name: 'Spanish',
                        emoji: '🇪🇸',
                        imgUrl: 'laravel.svg'
                    }
                ],
            },
            frameworks: [
                    {
                        name: 'React.js',
                        imgUrl: 'react.svg'
                    },
                    {
                        name: 'Vue.js',
                        imgUrl: 'vue.svg'
                    },
                    {
                        name: 'Laravel',
                        imgUrl: 'laravel.svg'
                    },
                    {
                        name: 'SCSS',
                        imgUrl: 'sass.svg'
                    },
                    {
                        name: 'Strapi',
                        imgUrl: 'strapi.webp'
                    },
                    {
                        name: 'Bootstrap',
                        imgUrl: 'bootstrap.svg'
                    },
                    {
                        name: 'Wordpress',
                        imgUrl: 'wordpress-icon.svg'
                    },
                    {
                        name: 'Woocommerce',
                        imgUrl: 'woocommerce.svg'
                    },
                    {
                        name: 'Squarespace',
                        imgUrl: 'squarespace.svg'
                    },
                    {
                        name: 'Shopify',
                        imgUrl: 'shopify.svg'
                    },
                    {
                        name: 'AWS',
                        imgUrl: 'aws.svg'
                    },
                    {
                        name: 'Node',
                        imgUrl: 'nodejs-icon.svg'
                    }
                ]
        }
    }
}
</script>

<style lang="scss">
.about-me {
    min-height: 1000px;
    height: 100vh;
    width: 50vw;
    display: grid;
    grid-template: repeat(12, 1fr) / repeat(8, 1fr);
    .heading {
        grid-area: 2/1/4/9;
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
    .skills {
        grid-area: 6/1/9/9;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 0px 2vw;
        border: .5px solid #eee;
        box-shadow: 0px 0px 5px #eee;
        border-radius: 10px;
        h3 {
            width: 100%;
            margin: 1.5vh auto 0vh auto;
            max-height: 5vh;
            hr {
                width: 95%;
                background-color: #eee;
            }
        }
        .human, .computer {
            display: flex;
            width: 30%;
            height: 19vh;
            .language-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 25%;
                font-size: 5rem;
            }
            ul {
                width: 75%;
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                text-align: left;
                margin-bottom: 2vh;
                li {
                    display: flex;
                    list-style: none;
                    vertical-align: center;
                    justify-content: flex-start;
                    width: 15vw;
                    max-height: 35px;
                    .skill-logo {
                        width: 15%;
                        font-size: 2rem;
                        img {
                            max-height: 25px;
                            max-width: 25px;
                        }
                    }
                    .skill-text {
                        width: 70%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        p {
                            text-align: left;
                            vertical-align: center;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
    .frameworks {
        grid-area: 9/1/13/9;
        display: flex;
        justify-content: center;
        height: 94%;
        flex-wrap: wrap;
        margin: 1.5vh 2vw 2vh 2vw;
        border: .5px solid #eee;
        box-shadow: 0px 0px 5px #eee;
        border-radius: 10px;
        h3 {
            width: 100%;
            margin: 1.5vh auto 0vh auto;
            max-height: 5vh;
            hr {
                width: 95%;
                background-color: #eee;
            }
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            width: 95%;
            margin: 5px 5px 0px 5px;
            height: 75%;
            justify-content: space-evenly;
            padding: 0px;
            li {
                display: flex;
                align-items: space-evenly;
                justify-content: space-evenly;
                height: 45px;
                border-radius: 10px;
                border: .5px solid #eee;
                box-shadow: 0px 0px 5px #eee;
                width: 32%;
                margin: .2vh 3px;
                .framework-logo {
                    width: 30%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        max-height: 40px;
                        max-width: 40px;
                        width: auto;
                        margin: auto;
                    }
                }
                .framework-text {
                    width: 70%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                p {
                    text-align: left;
                    vertical-align: center;
                    font-weight: bold;
                }

                }
            }
        }

    }
}
</style>