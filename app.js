// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 5000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))
app.use('/scripts', express.static(__dirname + 'public/scripts'))
app.use('/vendors', express.static(__dirname + 'public/vendors'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

app.locals.newsdata = require('./data/news.json')

// Routes
app.get('', (req, res) => {
    res.render('pages/index', {
        title: 'Branding and Digital design studio.',
        companyName: 'Abstract',
        identifier: 'We are a branding, and digital<br> design studio in Houston.',
        titleTwo: '',
        textDesc: '<p class="fz-18">We love crafting beautiful, smart and inspired work that focuses on a business\’ goals and their customers. We do this across multiple touch points to help organizations achieve their goals.</p>',
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files', 'lnil lnil-grid-alt', 'lnil lnil-page'],
        services: ['Advertising', 'Branding', 'Digital', 'Print'],
        serviceLinks: ['/services/advertising', '/services/branding', '/services/digital', '/services/print'],
        snipText: ['We know that successful brands establish an emotional connection with consumers that can prove very difficult down.',
            'The fact is, branding matters. While successful brands stand the test of time, many others fizzle out and fail to make an impact.',
            'Whether you need a responsive website design with a content management system, a social media campaign or an email markeing campaing',
            'Tactile and familiar, there are few mediums that can rival how engaging a beautiful piece of print can be.'],
    })
})

app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Us',
        companyName: 'Abstract',
        identifier: 'Abstract Creative is a creative, branding, and digital design studio in Houston.',
    })
})

// ============ NEWS ============
app.get('/news/', (req, res) => {
    res.render('pages/news', {
        companyName: 'Abstract',
        layout: './layouts/news'
    })
})
// res.render('pages/news', { data: 'data/news.json' });

// Business Marketing Brochure
app.get('/news/business-marketing', (req, res) => {
    res.render('pages/newsPost', {
        title: 'Importance of Brochures for Business Marketing',
        category: 'Print',
        date: 'Dec 15, 2021',
        newsExcerpt: '<div class="ptf-single-post__excerpt">The <span class="has-accent-1">brochure</span>s of any business actually forms an integral part of printed marketing in spite the increasing popularity of online marketing strategies. A good-looking brochure is a very necessary item for every business, it actually helps the businesses to grow.</div>',
        newsText: ['<p>Let\’s check out a few reasons that indicates that companies must invest in the brochure designing:</p><ul style="line-height: 2;"><li>The brochures can aid in capturing the attention of your potential customers, specifically in case your business is small or new and you are low on budget</li><li>Brochures are pocket friendly and effective as compared to any other marketing strategy. Your ads in the newspaper or magazine in a prime section will be very costly. The space of advertisement will shared by different businesses and thus, it will be tough to stand out</li><li>The booklets and the brochures, can actually focus completely on the offerings of the business, hence grabs the attention of the potential customers who look through them. The only thing that you need to do is to include informative and interesting content in the brochure and the images must be appropriate and call to action must be incorporated.</li><li>Brochures are very versatile and they can be used for any type of products and services and for different places in your office, like reception desk, your own cabin or may be in a promotional event.</li></ul><div class="ptf-spacer" style=" --ptf-xxl: 1.875rem;"></div><p>So, now you know how much <a class="text-decoration-underline has-accent-4" href="/services/print/brochure-design">brochure</a> design in Houston is important for your business.</p>'],
        newsTextTwo: '',
        img: '/img/blog/single-post/post-media-1.png',
        imgOne: '/img/blog/single-post/content-image-2.png',
        imgTwo: '/img/blog/single-post/content-image-2.png',
        imgThree: '/img/blog/single-post/content-image-2.png',
        url: '/news',
        companyName: 'Abstract',
        layout: './layouts/newsPost'
    })
})

// Rebranding Benefits
app.get('/news/rebranding-benefits', (req, res) => {
    res.render('pages/newsPost', {
        title: 'Benefits Of Rebranding',
        category: 'Branding',
        date: 'Dec 15, 2021',
        newsExcerpt: '<div class="ptf-single-post__excerpt">The trends in the marketing world changes continuously and sometimes it\’s kind of difficult to maintain a modern image. <span class="has-accent-1">Rebranding</span> is a good option for the business owners, but it is usually overlooked by them. But, you must know that maintaining the values, look and feel of your business can be very beneficial for the growth of your business.</div>',
        newsText: ['<p>Let\’s check out some of the benefits of rebranding:</p><div class="ptf-spacer" style=" --ptf-xxl: 1.875rem;"></div><p>1.You can connect with new audience: this is one of the biggest advantage of rebranding, as when you refresh the feel and look of your brand, then you can reach to your potential customers. When you concentrate on newer aspects of business and marketing and promote your business in a correct manner, then you will definitely be noticed by all. Rebranding can fulfil your business needs and in this ever-evolving market you\’ll grow like a pro.</p><p>2.You will become different from your competitors: with the growth of your business, you might reach the same level as your competitors, thus you\’ll require to differentiate from your competition. Rebranding can help you in setting the exclusive offers of your company in the most effective way and hence, your approach will be unique. Differentiating your brand is necessary to be unique from others and to depict that you are an expert. By rebranding your company you\’ll provide your brand its own feel, look and voice and this will help in establishing your business as a leader.</p><p>3.You\’ll stay updated: there is only one simple goal of rebranding and that is keeping your brand updated. The trends of designs play a vital role in how the current and potential customers perceive your company. When you ensure that the look of your site is as per the most current trends, then your customer will pay attention to you and this will signal that you are well aware about the trends.</p><p>4.New goals, offers and products will be reflected: it is sometimes hard to display how your business grows, if your brand doesn\’t reflect it. If you are offering new products or you have set new goals for your business, then rebranding is the best alternative to do that. Although, sticking to the traditional services is necessary, you will be required to update them from time to time.</p>'],
        newsTextTwo: '',
        img: '/img/blog/single-post/post-media-1.png',
        imgOne: '/img/blog/single-post/content-image-2.png',
        imgTwo: '/img/blog/single-post/content-image-2.png',
        imgThree: '/img/blog/single-post/content-image-2.png',
        url: '/news',
        companyName: 'Abstract',
        layout: './layouts/newsPost'
    })
})

// Business Needs
app.get('/news/graphic-design', (req, res) => {
    res.render('pages/newsPost', {
        title: 'Your Business Needs Graphic Design More Than You Think',
        category: 'Print',
        date: 'Dec 15, 2021',
        newsExcerpt: '<div class="ptf-single-post__excerpt">Amidst the flourishing digital media world, businesses are increasingly looking for ways to connect with a target audience. As a business owner, you might have hundreds of issues and thousands of things to manage at work. It might take your focus off of the need for highly crafted<span class="has-accent-1"> graphic design</span>.</div>',
        newsText: ['<p>You should know that graphic design plays an important role in making your business successful. Here are some points that will draw your attention to graphic design:</p><div class="ptf-spacer" style=" --ptf-xxl: 1.875rem;"></div><p><strong>Brand recognition:</strong> the things that help create the right brand image include a good looking logo and every other aspect of the business. The design of your site is required to target your potential customers, and for this, it needs to be functional, professional, and attractive. Your brand should be able to provide an instant connection with the fantastic products and services you offer. For this connection, the only thing you require is good graphic design.</p><p><strong>Uniforms, company webpages, publications, stationery, and other items surround your employees.</strong> To provide a happy and healthy workplace, you will need to band your company together behind the design that you have selected for your brand. When building your company\'s identity, you need to focus on the fact that they are committed to the brand. If you have an excellent graphic design, then it can strengthen the sense of commitment.</p><p><strong>Professionalism:</strong> if you need your business to leave a positive first impression on your clients or vendors. You need to focus on your logo, representing your business, but all this depends on the fact that you have designed it in the most effective possible manner. If your logo looks cheap, then it won\'t be easy to create a positive impression on the client.</p><p><strong>Communication:</strong> the functions of high-quality graphic design are beyond the look of your website and logo. Graphic design can help you create visuals, which will display your ideas most effectively. You can use professionally designed images and texts to avoid any misunderstanding and to communicate your thoughts with your customer.</p>'],
        newsTextTwo: '<p>If you want the most effective solutions for your business and the most professional graphic design services in Houston, TX, click on the link given below.</p>',
        img: '/img/blog/single-post/post-media-1.png',
        imgOne: '/img/blog/single-post/content-image-2.png',
        imgTwo: '/img/blog/single-post/content-image-2.png',
        imgThree: '/img/blog/single-post/content-image-2.png',
        url: '/news',
        companyName: 'Abstract',
        layout: './layouts/newsPost'
    })
})
// ============ PORTFOLIO============

app.get('/works', (req, res) => {
    res.render('pages/works', {
        title: 'Works',
        filter: ['filter-1 filter-4 filter-7', 'filter-2 filter-5', 'filter-3 filter-6', 'filter-1 filter-4 filter-7'],
        category: ['Branding', 'Illustration', 'Branding, UI/UX', 'Branding, Packing, Motion'],
        workLink: ['/works', '/works', '/works', '/works'],
        toolTipImg: ['/img/portfolio/grid/work-1.png', '/img/portfolio/grid/work-2.png', '/img/portfolio/grid/work-3.png', '/img/portfolio/grid/work-4.png'],
        workTitle: ['Supro Online Store', 'LW Poster', 'Lewis Studio Website', 'SPA Brand'],
        workDate: ['2021', '2021', '2020', '2019'],
        layout: './layouts/portfolio'
    })
})
app.get('/works/muscle-rehab', (req, res) => {
    res.render('pages/works', {
        title: 'Works',
        filter: '',
        category: '',
        workLink: '',
        toolTipImg: '',
        workTitle: '',
        workDate: '',
        layout: './layouts/portfolio'
    })
})

app.get('/services', (req, res) => {
    res.render('pages/services', {
        title: 'Services Page',
        titleTwo: '',
        textDesc: '<p class="fz-18">We love crafting beautiful, smart and inspired work that focuses on a business\’ goals and their customers. We do this across multiple touch points to help organizations achieve their goals.</p>',
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files', 'lnil lnil-grid-alt', 'lnil lnil-page'],
        services: ['Advertising', 'Branding', 'Digital', 'Print'],
        serviceLinks: ['/services/advertising', '/services/branding', '/services/digital', '/services/print'],
        snipText: ['We know that successful brands establish an emotional connection with consumers that can prove very difficult down.',
            'The fact is, branding matters. While successful brands stand the test of time, many others fizzle out and fail to make an impact.',
            'Whether you need a responsive website design with a content management system, a social media campaign or an email markeing campaing',
            'Tactile and familiar, there are few mediums that can rival how engaging a beautiful piece of print can be.'],
        layout: './layouts/portfolio'
    })
})
// ============ ADVERTISING ============
// Advertising
app.get('/services/advertising', (req, res) => {
    res.render('pages/services', {
        title: 'Advertising',
        titleTwo: 'Advertising',
        textDesc: '<h3 class="ptf-widget-title">We know that successful brands establish an emotional connection with consumers that can prove very difficult to break down.</h3><p class="fz-18">Online, outdoors, in print and through social and broadcast media, it helps businesses to reach audiences that might otherwise be beyond their grasp. However, this is not mission accomplished. We believe that advertising is much more about what you say than how you choose to convey it.</p> <p class="fz-18">Communicating a clear, compelling message that resonates with the target audience is the true essence of successful advertising and the primary reason people buy your products and use your services. Even in its purest form, advertising can prove highly useful. In the hands of an experienced designer, the combination of a line of copy, a single image, and careful placement of the brand logo is often all that is required to trigger brand recognition and prompt the necessary call to action. Developed over a campaign, advertising has the potential to achieve much more. If you think advertising should play a more influential role in your brand strategy, then talk to us – we’d be delighted to share our experience with you. Please view our Portfolio to see work created for some of our clients.</p>',
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files', 'lnil lnil-grid-alt'],
        services: ['Campaigns', 'Online Advertising', 'Print Advertising'],
        serviceLinks: ['/services/advertising/campaigns', '/services/advertising/online-advertising', '/services/advertising/print-advertising'],
        snipText: ['We know that successful brands establish an emotional connection with consumers that can prove very difficult down.',
            'The fact is, branding matters. While successful brands stand the test of time, many others fizzle out and fail to make an impact.',
            'Whether you need a responsive website design with a content management system, a social media campaign or an email markeing campaing'],
        layout: './layouts/portfolioTwo'
    })
})

// Campaigns
app.get('/services/advertising/campaigns', (req, res) => {
    res.render('pages/service-details', {
        title: 'Campaigns',
        layout: './layouts/sidebarThree',
        textDesc: '<h3 class="ptf-widget-title">Earning the trust and respect of your customers takes more than just a catchy slogan or a well-designed logo. Creating a campaign that stands out and consistently engages your audience is a great way of gaining customer loyalty.</h3><p class="fz-18">Creativity is at the heart of every advertising campaign we produce.</p> <p class="fz-18">For a campaign to be successful and fully engage an audience, exciting creative ideas need to be combined with the right media channel. Whether its online, social media, print, transport or outdoor advertising, selecting the proper channels to promote a product or service is crucial to a successful campaign.</p> <p class="fz-18">Understanding your target audience and their behavior can dictate how best to connect with them and in turn, which channels to communicate through.</p>',
        heroImg: '',
        serviceList: ['Online Advertising', 'Print Advertising'],
        serviceLinks: ['/services/advertising/online-advertising', '/services/advertising/print-advertising'],
        serviceIcon: ['lnil lnil-add-files', 'lnil lnil-add-files'],
    })
})

// Online Advertising
app.get('/services/advertising/online-advertising', (req, res) => {
    res.render('pages/service-details', {
        title: 'Online Advertising',
        layout: './layouts/sidebarThree',
        textDesc: '<h3 class="ptf-widget-title">Online advertising is one of the most effective ways to engage with your target audience, boost traffic to your website, and enhance your brand’s visibility.</h3><p class="fz-18">Compared to traditional forms of advertising, it is highly efficient to communicate with your audience in the central part due to the potential to target a specific demographic. The ability to target by age, gender, and geographic location are just a few of the ways we can engage with your particular audience.</p> <p class="fz-18">Furthermore, retargeting allows us to track people who visit your site and display retargeted adverts to them as they visit other sites online.</p> <p class="fz-18">The ability to measure the success of online advertising is invaluable in addition to its unique targeting capabilities. With pay-per-click advertising (PPC), you only pay when people click on your advert, and it is therefore easy to track how an advert is performing. Display or web banner advertising offers the opportunity to visually engage your audience and deliver a clear message that, again, is easily measured.</p><p class="fz-18">From engaging banner adverts to PPC, we can manage your online advertising strategy to optimize your return on investment and ensure it resonates with your target audience.</p>',
        heroImg: '',
        serviceList: ['Campaigns', 'Print Advertising'],
        serviceLinks: ['/services/advertising/campaigns', '/services/advertising/print-advertising'],
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files'],
    })
})

// Print Advertising
app.get('/services/advertising/print-advertising', (req, res) => {
    res.render('pages/service-details', {
        title: 'Print Advertising',
        layout: './layouts/sidebarThree',
        textDesc: '<h3 class="ptf-widget-title">With brands and businesses continuing to shift their marketing efforts to digital platforms, many question whether print advertising is still relevant.</h3><p class="fz-18">The fact is print advertising continues to be an invaluable medium for brands looking to connect with their target audience. The tactile characteristics of a printed publication offer an engaging experience unparalleled by online advertising.</p> <p class="fz-18">Despite this, print advertising is highly competitive, so it is crucial to ensure your advert stands out from the crowd and instantly captures readers’ attention. An eye-catching headline and compelling imagery, combined with a clear call to action, prompt a reaction from readers.</p> <p class="fz-18">On top of this, a clear strategy is key to maximizing the impact of your campaign. We specialize in planning and producing print advertising that is not only on brand but appeals and engages your target audience. If you’re thinking of commissioning an agency to come up with a big idea and design a successful print advertising campaign for your brand, please don’t hesitate to contact us.</p>',
        heroImg: '',
        serviceList: ['Campaigns', 'Online Advertising'],
        serviceLinks: ['/services/advertising/campaigns', '/services/advertising/online-advertising'],
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files'],
    })
})

// ============ BRANDING ============
// Branding
app.get('/services/branding', (req, res) => {
    res.render('pages/services', {
        title: 'Branding',
        titleTwo: 'Branding',
        textDesc: '<p class="fz-18">Brands that get noticed and stand out from the crowd. They possess assets that work hard to give them the edge: a striking logo, excellent copy, a memorable campaign and an online experience that puts the user first. And in business, brands build trust and customer loyalty.</p> <p class="fz-18">Branding lies at the heart of our services. Our experience in logotype design, advertising, website design and social media ensures a brand’s strengths, values, and USP communicates with conviction across all media channels.</p> <p class="fz-18">We create brands that connect with their target audience, get noticed, and establish a lasting presence in the market. If you are a new company looking to establish a brand presence, or an existing business requiring some much-needed revitalization, our process, market insight, and creative expertise will deliver the results you want to achieve. Please view our portfolio to see examples of our work and read what our clients have to say about us.</p>',
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files', 'lnil lnil-grid-alt', 'lnil lnil-scan', 'lnil lnil-add-files', 'lnil lnil-grid-alt'],
        services: ['Branding Guidelines', 'Brand Identity', 'Brand Strategy', 'Infographic Design', 'Logo Design', 'Rebranding'],
        serviceLinks: ['/services/branding/brand-guidelines', '/services/branding/brand-identity', '/services/branding/brand-strategy', '/services/branding/infographic-design', '/services/branding/logo-design', '/services/branding/rebranding'],
        snipText: ['Once you\'ve created a great brand you\'ll want to keep it that way. Brand guidelines may not sound as exicting as a logo design, but they tie together all elements of your organization cohesively.',
            'When a brand identity works well, you should be able to recognize the brand even if you can\'t see the logo.',
            'All businesses and organizations must plan for the long-term and this certainly applies in the context of brand building across all media.',
            'Infographics are a great way of conveying information clearly and in an easy to digest fashion. Effective infographics allow you to display statistics and facts in a format that engages and captivates your audience.',
            'Few would argue that the logo is the single most important part of an organization\'s brand identity. Indeed, many people outside our industry mistakenly believe that to create a loso is to establish a brand.',
            'Rebranding doesn\'t need to cost a fortune - by carefully planning out the process, breathing new life into your brand can be achieved within almost any budget.'],
        layout: './layouts/portfolioTwo'
    })
})

// Branding Guidelines
app.get('/services/branding/brand-guidelines', (req, res) => {
    res.render('pages/service-details', {
        title: 'Branding Guidelines',
        layout: './layouts/sidebarThree',
        textDesc: '<h3 class="ptf-widget-title">Once you\'ve created a great brand, you\'ll want to keep it that way. Brand guidelines may not sound as exciting as a logo design, but they tie together, cohesively all of your organization\'s elements.</h3><p class="fz-18">Brand guidelines are an excellent way of outlining how your brand should be applied and are a crucial part of any successful organization. To tell the story of a brand and maintain its feel, you need to ensure it is always portrayed consistently and accurately. Guidelines guarantee that everyone associated with an organization knows how the brand should be communicated.</p> <p class="fz-18">The extent of brand guidelines can differ. Typically, they cover how to use your logo, color palette, typefaces (for print and online), photography, and any graphic devices. Guidelines will set clear regulations so that your brand can easily be understood by designers, employees and marketers.</p> <p class="fz-18">As a branding agency, we have extensive experience creating guidelines that ensure your brand is communicated consistently and effectively. We take into account the vision for your brand and the ethos of your organization to create guidelines that stand the test of time.</p>',
        heroImg: '',
        serviceList: ['Campaigns', 'Online Advertising'],
        serviceLinks: ['/services/advertising/campaigns', '/services/advertising/online-advertising'],
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files'],
    })
})

// Brand Identity
app.get('/services/branding/brand-identity', (req, res) => {
    res.render('pages/service-details', {
        title: 'Brand Identity',
        layout: './layouts/sidebarThree',
        textDesc: '<h3 class="ptf-widget-title">With brands and businesses continuing to shift their marketing efforts to digital platforms, many question whether print advertising is still relevant.</h3><p class="fz-18">The fact is print advertising continues to be an invaluable medium for brands looking to connect with their target audience. The tactile characteristics of a printed publication offer an engaging experience unparalleled by online advertising.</p> <p class="fz-18">Despite this, print advertising is highly competitive, so it is crucial to ensure your advert stands out from the crowd and instantly captures readers’ attention. An eye-catching headline and compelling imagery, combined with a clear call to action, prompt a reaction from readers.</p> <p class="fz-18">On top of this, a clear strategy is key to maximizing the impact of your campaign. We specialize in planning and producing print advertising that is not only on brand but appeals and engages your target audience. If you’re thinking of commissioning an agency to come up with a big idea and design a successful print advertising campaign for your brand, please don’t hesitate to contact us.</p>',
        heroImg: '',
        serviceList: ['Campaigns', 'Online Advertising'],
        serviceLinks: ['/services/advertising/campaigns', '/services/advertising/online-advertising'],
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files'],
    })
})

// Brand Strategy
app.get('/services/branding/brand-strategy', (req, res) => {
    res.render('pages/service-details', {
        title: 'Brand Strategy',
        layout: './layouts/sidebarThree',
        textDesc: '<h3 class="ptf-widget-title">With brands and businesses continuing to shift their marketing efforts to digital platforms, many question whether print advertising is still relevant.</h3><p class="fz-18">The fact is print advertising continues to be an invaluable medium for brands looking to connect with their target audience. The tactile characteristics of a printed publication offer an engaging experience unparalleled by online advertising.</p> <p class="fz-18">Despite this, print advertising is highly competitive, so it is crucial to ensure your advert stands out from the crowd and instantly captures readers’ attention. An eye-catching headline and compelling imagery, combined with a clear call to action, prompt a reaction from readers.</p> <p class="fz-18">On top of this, a clear strategy is key to maximizing the impact of your campaign. We specialize in planning and producing print advertising that is not only on brand but appeals and engages your target audience. If you’re thinking of commissioning an agency to come up with a big idea and design a successful print advertising campaign for your brand, please don’t hesitate to contact us.</p>',
        heroImg: '',
        serviceList: ['Campaigns', 'Online Advertising'],
        serviceLinks: ['/services/advertising/campaigns', '/services/advertising/online-advertising'],
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files'],
    })
})

// Infographic Design
app.get('/services/branding/infographic-design', (req, res) => {
    res.render('pages/service-details', {
        title: 'Infographic Design',
        layout: './layouts/sidebarThree',
        textDesc: '<h3 class="ptf-widget-title">With brands and businesses continuing to shift their marketing efforts to digital platforms, many question whether print advertising is still relevant.</h3><p class="fz-18">The fact is print advertising continues to be an invaluable medium for brands looking to connect with their target audience. The tactile characteristics of a printed publication offer an engaging experience unparalleled by online advertising.</p> <p class="fz-18">Despite this, print advertising is highly competitive, so it is crucial to ensure your advert stands out from the crowd and instantly captures readers’ attention. An eye-catching headline and compelling imagery, combined with a clear call to action, prompt a reaction from readers.</p> <p class="fz-18">On top of this, a clear strategy is key to maximizing the impact of your campaign. We specialize in planning and producing print advertising that is not only on brand but appeals and engages your target audience. If you’re thinking of commissioning an agency to come up with a big idea and design a successful print advertising campaign for your brand, please don’t hesitate to contact us.</p>',
        heroImg: '',
        serviceList: ['Campaigns', 'Online Advertising'],
        serviceLinks: ['/services/advertising/campaigns', '/services/advertising/online-advertising'],
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files'],
    })
})

// Logo Design
app.get('/services/branding/logo-design', (req, res) => {
    res.render('pages/service-details', {
        title: 'Logo Design',
        layout: './layouts/sidebarThree',
        textDesc: '<h3 class="ptf-widget-title">With brands and businesses continuing to shift their marketing efforts to digital platforms, many question whether print advertising is still relevant.</h3><p class="fz-18">The fact is print advertising continues to be an invaluable medium for brands looking to connect with their target audience. The tactile characteristics of a printed publication offer an engaging experience unparalleled by online advertising.</p> <p class="fz-18">Despite this, print advertising is highly competitive, so it is crucial to ensure your advert stands out from the crowd and instantly captures readers’ attention. An eye-catching headline and compelling imagery, combined with a clear call to action, prompt a reaction from readers.</p> <p class="fz-18">On top of this, a clear strategy is key to maximizing the impact of your campaign. We specialize in planning and producing print advertising that is not only on brand but appeals and engages your target audience. If you’re thinking of commissioning an agency to come up with a big idea and design a successful print advertising campaign for your brand, please don’t hesitate to contact us.</p>',
        heroImg: '',
        serviceList: ['Campaigns', 'Online Advertising'],
        serviceLinks: ['/services/advertising/campaigns', '/services/advertising/online-advertising'],
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files'],
    })
})

// Rebranding
app.get('/services/branding/rebranding', (req, res) => {
    res.render('pages/service-details', {
        title: 'Rebranding',
        layout: './layouts/sidebarThree',
        textDesc: '<h3 class="ptf-widget-title">With brands and businesses continuing to shift their marketing efforts to digital platforms, many question whether print advertising is still relevant.</h3><p class="fz-18">The fact is print advertising continues to be an invaluable medium for brands looking to connect with their target audience. The tactile characteristics of a printed publication offer an engaging experience unparalleled by online advertising.</p> <p class="fz-18">Despite this, print advertising is highly competitive, so it is crucial to ensure your advert stands out from the crowd and instantly captures readers’ attention. An eye-catching headline and compelling imagery, combined with a clear call to action, prompt a reaction from readers.</p> <p class="fz-18">On top of this, a clear strategy is key to maximizing the impact of your campaign. We specialize in planning and producing print advertising that is not only on brand but appeals and engages your target audience. If you’re thinking of commissioning an agency to come up with a big idea and design a successful print advertising campaign for your brand, please don’t hesitate to contact us.</p>',
        heroImg: '',
        serviceList: ['Campaigns', 'Online Advertising'],
        serviceLinks: ['/services/advertising/campaigns', '/services/advertising/online-advertising'],
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files'],
    })
})

// ============ DIGITAL ============
// Digital
app.get('/services/digital', (req, res) => {
    res.render('pages/services', {
        title: 'Digital',
        titleTwo: 'Digital',
        textDesc: '<h3 class="ptf-widget-title">At Abstract, we are passionate about all things digital.</h3><p class="fz-18">Whether you need a responsive website design with a content management system, a social media campaign, or an email marketing campaign, we can help your business thrive online.</p> <p class="fz-18">Building a web presence tailored to your brand is vital to ensuring you stand out from your competitors. Whatever digital services you are looking for, we are confident we can help. At the very least, we can point you in the right direction. Please view our portfolio to see examples of our work and read what our clients have to say about us in our testimonials.</p>',
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files', 'lnil lnil-grid-alt', 'lnil lnil-scan', 'lnil lnil-add-files', 'lnil lnil-grid-alt'],
        services: ['Branding Guidelines', 'Brand Identity', 'Brand Strategy', 'Infographic Design', 'Logo Design', 'Rebranding'],
        serviceLinks: ['/services/branding/brand-guidelines', '/services/branding/brand-identity', '/services/branding/brand-strategy', '/services/branding/infographic-design', '/services/branding/logo-design', '/services/branding/rebranding'],
        snipText: ['Once you\'ve created a great brand you\'ll want to keep it that way. Brand guidelines may not sound as exicting as a logo design, but they tie together all elements of your organization cohesively.',
            'When a brand identity works well, you should be able to recognize the brand even if you can\'t see the logo.',
            'All businesses and organizations must plan for the long-term and this certainly applies in the context of brand building across all media.',
            'Infographics are a great way of conveying information clearly and in an easy to digest fashion. Effective infographics allow you to display statistics and facts in a format that engages and captivates your audience.',
            'Few would argue that the logo is the single most important part of an organization\'s brand identity. Indeed, many people outside our industry mistakenly believe that to create a loso is to establish a brand.',
            'Rebranding doesn\'t need to cost a fortune - by carefully planning out the process, breathing new life into your brand can be achieved within almost any budget.'],
        layout: './layouts/portfolioTwo'
    })
})

// Content Management Systems
app.get('/services/digital/cms', (req, res) => {
    res.render('pages/service-details', {
        title: 'Content Management Systems',
        titleTwo: '',
        serviceList: '',
        textDesc: '<h3 class="ptf-widget-title"></h3><p class="fz-18"></p> <p class="fz-18"></p>',
        serviceIcon: ['', '', '', '', '', ''],
        services: ['', '', '', '', '', ''],
        serviceLinks: ['', '', '', '', '', ''],
        snipText: ['',
            '',
            '',
            '',
            '',
            ''],
        layout: './layouts/sidebarThree'
    })
})

// E-commerce
app.get('/services/digital/e-commerce', (req, res) => {
    res.render('pages/service-details', {
        title: 'E-Commerce',
        titleTwo: '',
        serviceList: '',
        textDesc: '<h3 class="ptf-widget-title"></h3><p class="fz-18"></p> <p class="fz-18"></p>',
        serviceIcon: ['', '', '', '', '', ''],
        services: ['', '', '', '', '', ''],
        serviceLinks: ['', '', '', '', '', ''],
        snipText: ['',
            '',
            '',
            '',
            '',
            ''],
        layout: './layouts/sidebarThree'
    })
})

// Email Marketing
app.get('/services/digital/email-marketing', (req, res) => {
    res.render('pages/service-details', {
        title: 'Email Marketing',
        titleTwo: '',
        serviceList: '',
        textDesc: '<h3 class="ptf-widget-title"></h3><p class="fz-18"></p> <p class="fz-18"></p>',
        serviceIcon: ['', '', '', '', '', ''],
        services: ['', '', '', '', '', ''],
        serviceLinks: ['', '', '', '', '', ''],
        snipText: ['',
            '',
            '',
            '',
            '',
            ''],
        layout: './layouts/sidebarThree'
    })
})

// Social Media
app.get('/services/digital/social-media', (req, res) => {
    res.render('pages/service-details', {
        title: 'Social Media',
        titleTwo: '',
        serviceList: '',
        textDesc: '<h3 class="ptf-widget-title"></h3><p class="fz-18"></p> <p class="fz-18"></p>',
        serviceIcon: ['', '', '', '', '', ''],
        services: ['', '', '', '', '', ''],
        serviceLinks: ['', '', '', '', '', ''],
        snipText: ['',
            '',
            '',
            '',
            '',
            ''],
        layout: './layouts/sidebarThree'
    })
})

// Search Engine Optimization
app.get('/services/digital/seo', (req, res) => {
    res.render('pages/service-details', {
        title: 'Search Engine Optimization',
        titleTwo: '',
        serviceList: '',
        textDesc: '<h3 class="ptf-widget-title"></h3><p class="fz-18"></p> <p class="fz-18"></p>',
        serviceIcon: ['', '', '', '', '', ''],
        services: ['', '', '', '', '', ''],
        serviceLinks: ['', '', '', '', '', ''],
        snipText: ['',
            '',
            '',
            '',
            '',
            ''],
        layout: './layouts/sidebarThree'
    })
})

// User Experience UX Design
app.get('/services/digital/ux-design', (req, res) => {
    res.render('pages/service-details', {
        title: 'User Experience UX Design',

        layout: './layouts/sidebarThree'
    })
})

// Web Development
app.get('/services/digital/web-development', (req, res) => {
    res.render('pages/service-details', {
        title: 'Web Development',

        layout: './layouts/sidebarThree'
    })
})

// Web Design
app.get('/services/digital/web-design', (req, res) => {
    res.render('pages/service-details', {
        title: 'Web Design',

        layout: './layouts/sidebarThree'
    })
})


// ============ PRINT ============
// Print
app.get('/services/print', (req, res) => {
    res.render('pages/services', {
        title: 'Print',
        titleTwo: 'Print',
        textDesc: '<h3 class="ptf-widget-title">Amidst the flourishing world of digital media, businesses are increasingly looking for ways to connect with a target audience.</h3><p class="fz-18">We love crafting beautiful, smart and inspired work that focuses on a business’ goals and their customers. We do this across multiple touch points to help organizations achieve their goals.</p>',
        serviceIcon: ['lnil lnil-scan', 'lnil lnil-add-files', 'lnil lnil-grid-alt', 'lnil lnil-page', 'lnil lnil-page'],
        services: ['Brochure Design', 'Direct Mail', 'Magazine Design', 'Packaging', 'Reports'],
        serviceLinks: ['/services/print/brochure-design', '/services/print/direct-mail', '/services/print/magazine-design', '/services/print/packaging', '/services/print/reports'],
        snipText: ['Brochures can produce enduring connections with an audience and be a fantastic sales tool',
            'Whether you\'re looking to promote a product or service, generate sales leads or raise awareness, a well-executed direct mail campaign is a fantastic way to engage with customers.',
            'With digital communications continuing to rapidly expand, the art of magazine design is more imporatant than ever',
            'The look, the feel, the size, the format and weight, the experience of opening...',
            'Whether you want to review a subject matter within your sector, outline future business objectives or promote a new product or initiative, a well-executed report can be extremely valuable and effective.'],
        layout: './layouts/portfolioTwo'
    })
})

// Brochure Design
app.get('/services/print/brochure-design', (req, res) => {
    res.render('pages/service-details', {
        title: 'Brochure Design',

        layout: './layouts/sidebarThree'
    })
})

// Direct Mail
app.get('/services/print/direct-mail', (req, res) => {
    res.render('pages/service-details', {
        title: 'Direct Mail',

        layout: './layouts/sidebarThree'
    })
})

// Magazine Design
app.get('/services/print/magazine-design', (req, res) => {
    res.render('pages/service-details', {
        title: 'Magazine Design',

        layout: './layouts/sidebarThree'
    })
})

// Packaging Design
app.get('/services/print/packaging', (req, res) => {
    res.render('pages/service-details', {
        title: 'Packaging',

        layout: './layouts/sidebarThree'
    })
})

// Reports
app.get('/services/print/reports', (req, res) => {
    res.render('pages/service-details', {
        title: 'Reports',

        layout: './layouts/sidebarThree'
    })
})


// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))