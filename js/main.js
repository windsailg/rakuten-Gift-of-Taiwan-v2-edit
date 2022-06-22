
const VueApp = Vue.createApp({
    el: 'Gift of Taiwan',
    data() {
        return {
            tags,
            searchValue: null,
            dragValue: null,
        }
    },
    mounted() {
        // this.shuffle()
        this.setSplide()
        // this.setLocomotiveScroll()
        this.setScrollEffect()
        this.setAOS()
    },
    methods: {
        searchSale() {
            if (this.searchValue) {
                const href = `https://search.rakuten.co.jp/search/mall/${this.searchValue}/?sid=403482`
                window.open(href, '_blank')
            }
        },
        shuffle() {
            setInterval(() => {
                this.tags = _.shuffle(this.tags)
            }, 8000)
        },
        setLocomotiveScroll() {
            const LocomotiveScrollParams = {
                el: document.querySelector('#app'),
                // el: document.querySelector('#TopBanner'),
                smooth: true,
                repeat: true,
                lerp: 0.1,
                tablet: {
                    smooth: true,
                    breakpoint: 550,
                },
                smartphone: {
                    smooth: false,
                },
            }
            const scroll = new LocomotiveScroll(LocomotiveScrollParams)
        },
        setScrollEffect() {
            $('#GoShopping').on('click', function (e) {
                e.preventDefault()
                const anchor = $(this).attr('href')
                const anchorTop = $(anchor).offset().top
                $('html, body')
                    .stop()
                    .animate(
                        {
                            scrollTop: anchorTop
                        },
                        700,
                    )
            })
            $('#GoTop').on('click', () => {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    700,
                )
            })
            const setOffset = () => {
                if ($(window).scrollTop() >= 300) {
                    $('#GoTop').fadeIn()
                } else {
                    $('#GoTop').fadeOut()
                }
            }
            window.addEventListener('scroll', setOffset)
        },
        setSplide() {
            const splideTopParams = {
                pagination: false,
                arrows: false,
                autoplay: true,
                type: 'fade',
                easing: 'ease',
                rewind: true,
                speed: 1500,
            }
            const splideMiniBannerParams = {
                perPage: 3,
                perMove: 1,
                pagination: false,
                arrows: true,
                autoplay: true,
                type: 'loop',
                easing: 'ease',
                speed: 600,
            }
            const splideSquareBannerParams = {
                perPage: 3,
                perMove: 1,
                pagination: false,
                arrows: true,
                autoplay: true,
                type: 'loop',
                easing: 'ease',
                speed: 600,
                focus: 'center',
            }
            const splideShopItemParams = {
                perMove: 2,
                fixedWidth: 240,
                gap: 60,
                pagination: false,
                arrows: true,
                autoplay: true,
                type: 'loop',
                // rewind: true,
                rewindByDrag: true,
                easing: 'ease',
                speed: 800,
            }
            const splideTop = new Splide('#SplideTop', splideTopParams)
            const splideMiniBanner = new Splide(
                '#SplideMiniBanner',
                splideMiniBannerParams,
            )
            const splideSquareBanner = new Splide(
                '#SplideSquareBanner',
                splideSquareBannerParams,
            )
            splideTop.mount()
            splideMiniBanner.mount()
            splideSquareBanner.mount()

            const shopItemSplides = document.querySelectorAll('.shopitem__splide')
            shopItemSplides.forEach((e) => {
                const s = new Splide(
                    e,
                    splideShopItemParams,
                )
                s.mount()
            })
        },
        setAOS() {
            const AOSParams = { once: false }
            AOS.init(AOSParams)
        },
        // Tags drag event
        onDragStart(event) {
            this.dragValue = event.target.innerText.slice(1)
        },
        onDragEnd() {
            this.dragValue = null
        },
        onDrop() {
            this.searchValue = this.dragValue
        },
    },
}).mount('#app')

const consoleStyle =
    "font-weight: bold; font-size: 1.05rem; font-family: '微軟正黑體'; color: #ffb93e;"

// const style = document.querySelector('#MainStyle')
// const val =  'css/style.css?v=' + (+ new Date())
// style.setAttribute('href', val)
