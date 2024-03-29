import Layout from "../components/Layout/Layout";
import  Head from 'next/head'
import './index.scss'
import Link from "next/link";
import NeedSolution from "../components/NeedSolution/NeedSolution";
import 'normalize.css'

const Index = () => <Layout>
<Head>
    <title>ExMedia Creatives | Best of MarTech</title>
    <meta name="facebook-domain-verification" content="1hwsc7wgie2zrcgqpb0ycvu2g4uxcb" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
        <meta name="google-site-verification" content="kmbrx57bxpG7mnv9qSUcjLAbULlGQwDRthw8Zid_gyY" />
            <meta name="description" content="Digital Marketing for Startups" />
            <meta name="keywords" content="social media marketing, marketing technology, best of marketing, startup marketing, grow your startup, startup revenue,social media, marketing, digital, SEO, increase profit, top marketing firm, best agency, revenue " />
            <meta name="author" content="Expression Media" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
    <link href="https://fonts.googleapis.com/css?family=Be+Vietnam:400,800&display=swap" rel="stylesheet"></link>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
</Head>
<header className="header">
    <div className="container">
       <div className="row">
        <div className="col-sm-12 col-lg-7">
            <h1 className="header-one animated fadeIn delay-1s">
            Build a Profitable Startup with A Result-Driven Marketing & Sales Team.
            
            </h1>
 
            <p className="small-text animated fadeIn delay-2s">Let us Build You a Marketing Team to achieve Your Startup Goals.</p>


            <Link href="/contact">
                <a className="header-btn hvr-grow-shadow animated fadeInUp delay-3s" >
                Hire Us Now!
                </a>
            </Link>
        </div>
        <div className="col-sm-12 col-lg-5 center-pics animated fadeIn delay-2s ">
            <img src="/static/img/svg/homepics2.svg" alt="home picture" className="img-fluid header-img"/>
        </div>
       </div>
    </div>    
</header>
<section className="section-choose">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
            <h2 className="heading-two text-center">Why Choose Us?</h2>

            </div>
            <div className="card-deck">
                <div className="card hvr-grow">
                    <img src="/static/img/svg/brand.svg" className="card-img-top" alt="branding picture"/>
                    <div className="card-body">
                        <h3 className="card-title">Spend Less</h3>
                        <p className="card-text">Cut down personnel management cost and overhead by 5x. Exmedia team hires, manages your marketing & Sales team.</p></div>
                </div>
                <div className="card hvr-grow">
                    <img src="/static/img/svg/marketing1.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">Ready to Work</h3>
                        <p className="card-text">Tap into our Creatives Community spanning multiple regions, with proven track record of sales and results with marketing.</p>
                    </div>
                </div>
                <div className="card hvr-grow">
                    <img src="/static/img/svg/softdev1.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">Continous Mangement</h3>
                        <p className="card-text">We carefully curate the team based on your Startup Vison, Goals, and Needs. We continue to support the team, even as they serve your Startup.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="section-offer">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <h2 className="heading-two text-center">
                    What The Team will do.
                </h2>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/social-media 2.svg" className="img-fluid"/>
                <p className="paragraph-one">
                    Social Media Marketing <br />
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/seo 1.svg" className="img-fluid"/>
                <p className="paragraph-one">
                Email Marketing
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/analysis 1.svg" className="img-fluid"/>
                <p className="paragraph-one">
                Digital Marketing Audit
                </p>
            </div>

        </div>
        <div className="row pt-5">
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/Web development 1.svg" className="img-fluid"/>
                <p className="paragraph-one">
                Digital Marketing & Sales Strategy
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/contentM.svg"  className="img-fluid"/>
                <p className="paragraph-one">
                Product Market Research
                </p>
            </div>
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/Cross-Platform.svg" className="img-fluid"/>
                <p className="paragraph-one">
                 Advertising Campaigns
                </p>
            </div>

        </div>
    </div>
</section>
<NeedSolution/>
</Layout>;

export default Index;
