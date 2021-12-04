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

// Routes
app.get('', (req, res) => {
    res.render('pages/index', {
        title: 'Branding and Digital design studio.',
        companyName: 'Abstract',
        identifier: 'We are a branding, and digital<br> design studio in Houston.',
        titleTwo: '',
        textDesc: '<p class="fz-18">We love crafting beautiful, smart and inspired work that focuses on a business’ goals and their customers. We do this across multiple touch points to help organizations achieve their goals.</p>',
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

app.get('/news', (req, res) => {
    res.render('pages/about', {
        title: 'News Page',
        companyName: 'Abstract',
    })
})

app.get('/works', (req, res) => {
    res.render('pages/works', {
        title: 'Works',
        layout: './layouts/portfolio'
    })
})

app.get('/services', (req, res) => {
    res.render('pages/services', {
        title: 'Services Page',
        titleTwo: '',
        textDesc: '<p class="fz-18">We love crafting beautiful, smart and inspired work that focuses on a business’ goals and their customers. We do this across multiple touch points to help organizations achieve their goals.</p>',
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
        layout: './layouts/sidebarThree'
    })
})

// Online Advertising
app.get('/services/advertising/online-advertising', (req, res) => {
    res.render('pages/service-details', {
        title: 'Online Advertising',
        layout: './layouts/sidebarThree'
    })
})

// Print Advertising
app.get('/services/advertising/print-advertising', (req, res) => {
    res.render('pages/service-details', {
        title: 'Print Advertising',
        layout: './layouts/sidebarThree'
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
        layout: './layouts/sidebarThree'
    })
})

// Brand Identity
app.get('/services/branding/brand-identity', (req, res) => {
    res.render('pages/service-details', {
        title: 'Brand Identity',
        layout: './layouts/sidebarThree'
    })
})

// Brand Strategy
app.get('/services/branding/brand-strategy', (req, res) => {
    res.render('pages/service-details', {
        title: 'Brand Strategy',
        layout: './layouts/sidebarThree'
    })
})

// Infographic Design
app.get('/services/branding/infographic-design', (req, res) => {
    res.render('pages/service-details', {
        title: 'Infographic Design',
        layout: './layouts/sidebarThree'
    })
})

// Logo Design
app.get('/services/branding/logo-design', (req, res) => {
    res.render('pages/service-details', {
        title: 'Logo Design',
        layout: './layouts/sidebarThree'
    })
})

// Rebranding
app.get('/services/branding/rebranding', (req, res) => {
    res.render('pages/service-details', {
        title: 'Rebranding',
        layout: './layouts/sidebarThree'
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
        layout: './layouts/sidebarThree'
    })
})

// E-commerce
app.get('/services/digital/e-commerce', (req, res) => {
    res.render('pages/service-details', {
        title: 'E-Commerce',
        layout: './layouts/sidebarThree'
    })
})

// Email Marketing
app.get('/services/digital/email-marketing', (req, res) => {
    res.render('pages/service-details', {
        title: 'Email Marketing',
        layout: './layouts/sidebarThree'
    })
})

// Social Media
app.get('/services/digital/social-media', (req, res) => {
    res.render('pages/service-details', {
        title: 'Social Media',
        layout: './layouts/sidebarThree'
    })
})

// Search Engine Optimization
app.get('/services/digital/seo', (req, res) => {
    res.render('pages/service-details', {
        title: 'Search Engine Optimization',
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