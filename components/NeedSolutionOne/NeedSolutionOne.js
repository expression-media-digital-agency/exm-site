import './NeedSolutionOne.scss'
import Link from 'next/link'
const NeedSolutionOne = () => (
    <section className="section-solution">
    <div className="container">
        <div className="row">
            
            <div className="col-sm-4 text-center">
                <img src="/static/img/svg/anita.svg" alt="anita picture" className="img-fluid"/>
            </div>
            <div className="col-sm-8">
                <h3 className="heading-three">Hey! I hope you’ve not forgotten me?</h3>
                <h1  className="heading-one">Let’s create your next solution</h1>
                <h2 className="heading-two">Let's discuss your next idea</h2>
                <p className="paragraph-one mb-5">Click on the button below to get through to us.</p>
                <Link href="/work">
                    <a className="solution-btn">
                        Contact Us
                    </a>
                </Link>
            </div>
        </div>
    </div>
</section>
  );

  export default NeedSolutionOne;